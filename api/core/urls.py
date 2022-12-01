from django.urls import path, include
from . import views

app_name = 'core'

urlpatterns = [
    # matching/<slug>にアクセスしたらviewsのreturnMatching関数を呼ぶ
    path("matching/<slug>", views.returnMatching, name='returnMatching'),
    path("getLastNum", views.getLastNum, name='getLastNum'),
]