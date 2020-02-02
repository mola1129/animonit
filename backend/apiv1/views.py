import requests
import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from config.settings.base import BASE_DIR
import os
import environ

env = environ.Env()
env.read_env(os.path.join(BASE_DIR, '.env'))

# Create your views here.
ANNICT_ACCESS_TOKEN = env('ANNICT_ACCESS_TOKEN')


class AnimeBroadcastList(APIView):
    def get(self, request):
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
        for p in programs:
            anime = {'id': p['id'], 'name': p['work']['title'], 'start_time': p['started_at'],
                     'episode': {'number_text': p['episode']['number_text'], 'title': p['episode']['title']},
                     'channel_name': p['channel']['name'], 'image': p['work']['images']['facebook']['og_image_url']}

            broadcasts['broadcasts'].append(anime)

        return Response(broadcasts, status=res.status_code)


anime_broadcast_list = AnimeBroadcastList.as_view()
