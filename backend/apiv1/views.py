import requests
import datetime
import dateutil.parser
from rest_framework.views import APIView
from rest_framework.response import Response
from config.settings.base import BASE_DIR
import os
import environ

# Read environment variable
env = environ.Env()
env.read_env(os.path.join(BASE_DIR, '.env'))
ANNICT_ACCESS_TOKEN = env('ANNICT_ACCESS_TOKEN')


class AnimeBroadcastList(APIView):

    def get(self, request):
        # Use Annict api.
        sort_started_at = 'asc'
        filter_started_at_gt = datetime.datetime.now(tz=datetime.timezone.utc)
        per_page = 50
        access_token = ANNICT_ACCESS_TOKEN
        url = 'https://api.annict.com/v1/me/programs'
        params = {'sort_started_at': sort_started_at,
                  'filter_started_at_gt': filter_started_at_gt,
                  'per_page': per_page,
                  'access_token': access_token}
        res = requests.get(url, params=params)

        programs = res.json()['programs']
        broadcasts = {'broadcasts': []}
        JST = datetime.timezone(datetime.timedelta(hours=+9), 'JST')
        week = ['月', '火', '水', '木', '金', '土', '日']

        for p in programs:
            # convert utc to jst.
            start_time_jst = dateutil.parser.parse(
                p['started_at']).astimezone(JST)

            # 28 hour notation
            hour_28 = start_time_jst.hour
            if hour_28 < 5:
                hour_28 += 24
                start_time_jst += datetime.timedelta(days=-1)

            start_time = str(start_time_jst.year) + '/' + \
                str(start_time_jst.month) + '/' \
                + str(start_time_jst.day) + 'T' + str(hour_28) + \
                ':' + str(start_time_jst.minute).zfill(2)

            weekday = week[start_time_jst.weekday()]

            episode = {
                'number_text': p['episode']['number_text'], 'title': p['episode']['title']}

            anime = {'id': p['id'], 'name': p['work']['title'], 'start_time': start_time, 'weekday': weekday,
                     'episode': episode, 'channel_name': p['channel']['name'], 'image': p['work']['images']['facebook']['og_image_url']}

            broadcasts['broadcasts'].append(anime)

        return Response(broadcasts, status=res.status_code)


anime_broadcast_list = AnimeBroadcastList.as_view()
