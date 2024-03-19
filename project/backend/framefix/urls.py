from django.urls import path
from .views import simple_api

urlPatterns = [
    path('hello/', simple_api),
]
