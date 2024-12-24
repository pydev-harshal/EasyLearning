from django.urls import path
from Users.views import *


urlpatterns = [
    path('', index_view, name="index-page"),
    path('login/', login_view, name="login-page"),
]
