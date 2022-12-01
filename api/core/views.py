from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import OffersSerializer, LastNumSerializer
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('/home/suzukit/codes/Ota-Collab/api/core/ota-collab-firebase-adminsdk-h8lt9-d5aa562d5e.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

class OffersArray(object):
    def __init__(self, offers):
        self.offers = offers

class LastNumClass():
    def __init__(self, lastNum):
        self.lastNum = lastNum

@api_view(["GET"])
def matching(request, slug):
    if request.method == "GET":
        obj = OffersArray([slug, 'b002', 'c003'])
        offers = OffersSerializer(obj)
        return Response(offers.data)

@api_view(["GET"])
def getLastNum(request):
    if request.method == "GET":
        doc_ref = db.collection('last_num').document('7jLx5j1Ng3nIPmjGiced')
        snapshot = doc_ref.get()
        doc = snapshot.to_dict()
        ln = doc["lastNum"] + 1  # 返す前に1加算
        doc_ref.update({'lastNum': ln})  #lust_numDBの更新 
        last_num = LastNumClass(str(ln))
        LastNum = LastNumSerializer(last_num)
        return Response(LastNum.data)