from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.


def simple_api(request):
    return JsonResponse({"message" : "hello"})