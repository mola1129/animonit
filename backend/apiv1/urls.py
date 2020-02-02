from django.urls import path
from . import views

app_name = 'apiv1'
urlpatterns = [
    path('anime/broadcast/get', views.anime_broadcast_list,
         name='anime_broadcast_list')
]
