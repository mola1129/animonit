import requests
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
        # filter_started_at_gt = ''
        access_token = ANNICT_ACCESS_TOKEN
        url = 'https://api.annict.com/v1/me/programs'
        params = {'sort_started_at': sort_started_at,
                  'access_token': access_token}

        res = requests.get(url, params=params)
        return Response(res.json(), status=res.status_code)


anime_broadcast_list = AnimeBroadcastList.as_view()
