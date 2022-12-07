from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import OffersSerializer, LastNumSerializer
from google.cloud import firestore  # これ何用か
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('./core/ota-collab-firebase-adminsdk-h8lt9-d5aa562d5e.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

class OffersArray(object):
    def __init__(self, offers):
        self.offers = offers

class LastNumClass():
    def __init__(self, lastNum):
        self.lastNum = lastNum
        
class User:
    # コンストラクタ（デフォルト：userID=0）
    def __init__(self, userID=0):
        self.userID = userID
        self.managementIssuesArray = self.getManagementIssues(userID)

    # 経営課題を取得する関数
    def getManagementIssues(self, userID):
        # firebaseに接続して経営課題のフラグを取ってくる
        managementIssuesArray = 0b0
        doc_ref = db.collection('ManagementIssues').document(str(userID))
        snapshot = doc_ref.get()
        ss = snapshot.to_dict()
#        print(str(userID) +": "+ str(ss))
        if(ss["attracting_customers"] == True):
            managementIssuesArray += 2**12
        if(ss["awareness"] == True):
            managementIssuesArray += 2**11
        if(ss["branding"] == True):
            managementIssuesArray += 2**10
        if(ss["employee_training"] == True):
            managementIssuesArray += 2**9
        if(ss["expansion"] == True):
            managementIssuesArray += 2**8
        if(ss["frequency"] == True):
            managementIssuesArray += 2**7
        if(ss["human_resources"] == True):
            managementIssuesArray += 2**6
        if(ss["new_customers"] == True):
            managementIssuesArray += 2**5
        if(ss["outflow"] == True):
            managementIssuesArray += 2**4
        if(ss["purchases"] == True):
            managementIssuesArray += 2**3
        if(ss["repeat_rate"] == True):
            managementIssuesArray += 2**2
        if(ss["sales"] == True):
            managementIssuesArray += 2**1
        if(ss["unit_price"] == True):
            managementIssuesArray += 2**0
        
#        print(managementIssuesArray)
        return managementIssuesArray

def getNumberOfPeople():
    numberOfPeople = 0
    doc_ref = db.collection('ManagementIssues')
    docs = doc_ref.stream()
    for doc in docs:
        numberOfPeople += 1
    return numberOfPeople

def matching(person: User):                  # 引数personとはマッチングしたい本人のこと
    numberOfPeople = getNumberOfPeople()
#    print("numberOfPeople: "+str(numberOfPeople))
    targetUser = []                    # マッチング相手の配列
    # マッチング相手の経営課題情報をユーザーID上から順番に取ってくる
    for i in range(0, numberOfPeople, 1):
        if(person.userID != i):
            targetUser.append(User(i))
        else:
            targetUser.append(User(0))  # 自分の情報はskipする
    
    offerUser = []                      # コラボ相手として推薦するユーザーのオブジェクト
    maxMatchingParam = 0                # 最多フラグ一致度
    currentMatchingParam = 0            # 現在比較中の相手とのフラグ一致度
    
    # ユーザーIDが若い順に経営課題一致度を比較している（「最多フラグ一致度」を調べるため）
    for i in range(0, len(targetUser), 1):
        currentMatchingParam = bin(person.managementIssuesArray & targetUser[i].managementIssuesArray).count("1")
#        print("current: "+str(currentMatchingParam)+", "+str(int(person.managementIssuesArray) & int(targetUser[i].managementIssuesArray)))
        # もしかつてない一致度を持つユーザーが現れたらその一致度を「最多フラグ一致度」とする
        if(currentMatchingParam >= maxMatchingParam):
            maxMatchingParam = currentMatchingParam

    # 「最多フラグ一致度」を持つユーザーを配列に追加する
    for i in range(0, len(targetUser), 1):
        # もし比較対象のユーザーが「最多フラグ一致度」を持っていたら、offerUser[]にappendする
        if(bin(person.managementIssuesArray & targetUser[i].managementIssuesArray).count("1") == maxMatchingParam):
            offerUser.append(User(i))
    return offerUser

@api_view(["GET"])
def returnMatching(request, slug):
    if request.method == "GET":
        user = int(slug)
        person = User(user)
        offerUserID = []
        offerUser = []
        offerUser = matching(person)
        for i in range(len(offerUser)):
            if((offerUser[i].userID != 0) & (offerUser[i].userID != user)):
                offerUserID.append(offerUser[i].userID)
        obj = OffersArray(offerUserID)
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