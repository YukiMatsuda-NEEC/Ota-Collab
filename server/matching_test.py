# -*- coding: utf-8 -*-

class User:
    def __init__(self, userID=0):
        self.userID = userID
        self.managementIssuesArray = self.getManagementIssues(userID)
        self.numberOfPeople = self.getNumberOfPeople()

    def getManagementIssues(self, userID):
        # firebaseに接続して経営課題のフラグを取ってくる代わり
        if(self.userID == 0):
            managementIssuesArray = 0b000000     # 暫定
        if(self.userID == 1):
            managementIssuesArray = 0b001011     # 暫定
        if(self.userID == 2):
            managementIssuesArray = 0b001111     # 暫定
        if(self.userID == 3):
            managementIssuesArray = 0b010011     # 暫定
        if(self.userID == 4):
            managementIssuesArray = 0b010111     # 暫定
        if(self.userID == 5):
            managementIssuesArray = 0b011011     # 暫定
        if(self.userID == 6):
            managementIssuesArray = 0b110111     # 暫定
        return managementIssuesArray

    def getNumberOfPeople(self):
        # firebaseに接続してユーザー数を取ってくる代わり
        numberOfPeople = 7                     # 暫定
        return numberOfPeople


def matching(person):                  # 引数personとはマッチングしたい本人のこと
    targetUser = []
    for i in range(1, person.numberOfPeople, 1):
        if(person.userID != i):
            targetUser.append(User(i))
        else:
            targetUser.append(User(0))
    
    # ここから下は未検証
    offerUser = User()
    maxMatchingPram = 0
    currentMatchingParam = 0
    for i in range(person.numberOfPeople-1):
        currentMatchingPram = person.managementIssuesArray & targetUser[i].managementIssuesArray
 #       print(currentMatchingParam)
        if(currentMatchingPram > maxMatchingPram):
            maxMatchingPram = currentMatchingPram
            offerUser = targetUser[i]

    return offerUser

def main():
    person = User(3)
    offerUser = matching(person)
#    print(offerUser.managementIssuesArray)

if __name__ == '__main__':
    main()
