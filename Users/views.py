from django.shortcuts import render
from Users.models import *
# Create your views here.

def index_view(request):
    return render(request,'Users/index.html')


def login_view(request):
    return render(request,'Users/login.html')





