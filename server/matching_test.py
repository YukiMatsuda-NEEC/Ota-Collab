# -*- coding: utf-8 -*-
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('./server/ota-collab-firebase-adminsdk-h8lt9-d5aa562d5e.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

class User:
    # コンストラクタ（デフォルト：userID=0）
    def __init__(self, userID=0):
        self.userID = userID
        self.managementIssuesArray = self.getManagementIssues(userID)
        self.numberOfPeople = self.getNumberOfPeople()
    
    # 経営課題を取得する関数
    def getManagementIssues(self, userID):
        # firebaseに接続して経営課題のフラグを取ってくる代わり
        if(self.userID == 0):
            managementIssuesArray = 0b000000000     # ユーザー0: 空っぽの値
        if(self.userID == 1):
            managementIssuesArray = 0b101011101     # 暫定
        if(self.userID == 2):
            managementIssuesArray = 0b101010101     # 暫定
        if(self.userID == 3):
            managementIssuesArray = 0b110010101     # 暫定
        if(self.userID == 4):
            managementIssuesArray = 0b100110011     # 暫定
        if(self.userID == 5):
            managementIssuesArray = 0b101011011     # 暫定
        if(self.userID == 6):
            managementIssuesArray = 0b101110111     # 暫定
        if(self.userID == 7):
            managementIssuesArray = 0b101001111     # 暫定
        if(self.userID == 8):
            managementIssuesArray = 0b101101011     # 暫定
        if(self.userID == 9):
            managementIssuesArray = 0b101110001     # 暫定
        if(self.userID == 10):
            managementIssuesArray = 0b101010001     # 暫定
        if(self.userID == 11):
            managementIssuesArray = 0b001000001     # 暫定
        return managementIssuesArray

    # ユーザー数を取得する関数（クラス外に出したほうがいいかも）
    def getNumberOfPeople(self):
        # firebaseに接続してユーザー数を取ってくる代わり
        numberOfPeople = 0
        doc_ref = db.collection('ManagementIssues')
        docs = doc_ref.stream()
        for doc in docs:
            numberOfPeople += 1

        # numberOfPeople = 10                     # 暫定
        print("numberOfPeople: "+str(numberOfPeople))
        return numberOfPeople


def matching(person):                  # 引数personとはマッチングしたい本人のこと
    targetUser = []                    # マッチング相手の配列
    # マッチング相手の経営課題情報をユーザーID上から順番に取ってくる
    for i in range(1, person.numberOfPeople, 1):
        if(person.userID != i):
            targetUser.append(User(i))
        else:
            targetUser.append(User(0))  # 自分の情報はskipする
    
    offerUser = []                      # コラボ相手として推薦するユーザーのオブジェクト
    maxMatchingParam = 0                # 最多フラグ一致度
    currentMatchingParam = 0            # 現在比較中の相手とのフラグ一致度

    # ユーザーIDが若い順に経営課題一致度を比較している（「最多フラグ一致度」を調べるため）
    for i in range(1, len(targetUser), 1):
        currentMatchingParam = bin(person.managementIssuesArray & targetUser[i].managementIssuesArray).count("1")
        print("current: "+str(currentMatchingParam)+", "+str(bin(person.managementIssuesArray & targetUser[i].managementIssuesArray)))
        # もしかつてない一致度を持つユーザーが現れたらその一致度を「最多フラグ一致度」とする
        if(currentMatchingParam >= maxMatchingParam):
            maxMatchingParam = currentMatchingParam

    # 「最多フラグ一致度」を持つユーザーを配列に追加する
    for i in range(1, len(targetUser), 1):
        # もし比較対象のユーザーが「最多フラグ一致度」を持っていたら、offerUser[]にappendする
        if(bin(person.managementIssuesArray & targetUser[i].managementIssuesArray).count("1") == maxMatchingParam):
            offerUser.append(User(i))

    return offerUser

def main():
    person = User(6)
    offerUser = []
    offerUser = matching(person)
    for i in range(len(offerUser)):
        print(bin(offerUser[i].managementIssuesArray))

if __name__ == '__main__':
    main()
