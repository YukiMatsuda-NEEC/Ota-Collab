from django.urls import path, include
from .views import matching
from . import views

app_name = 'core'

urlpatterns = [
    # matching/<slug>にアクセスしたらviewsのmatching関数を呼ぶ
    path("matching/<slug>", views.matching, name='matching'),
    path("getLastNum", views.getLastNum, name='getLastNum'),
]