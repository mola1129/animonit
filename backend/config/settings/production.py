from .base import *
import environ
import dj_database_url

env = environ.Env()

SECRET_KEY = env('SECRET_KEY')
DEBUG = False

ALLOWED_HOSTS = ['*']

DATABASES = {'default': dj_database_url.config()}
