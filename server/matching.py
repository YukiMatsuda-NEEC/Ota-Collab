class User:
    userID = 0                  # ユーザーID
    managementIssuesArray = 0b0 # 経営課題のフラグ列
    numberOfPeople = 0          # ユーザー数

    def __init__(self):
        self.UserID = self.getUserID()
        self.managementIssuesArray = self.getManagementIssues()
        self.numberOfPeople = self.getNumberOfPeople()

    def getUserID():
        # firebaseに接続してユーザーIDを取ってくる
        userID = 0                      # 暫定
        return userID

    def getManagementIssues():
        # firebaseに接続して経営課題のフラグを取ってくる
        managementIssuesArray = 0b0     # 暫定
        return managementIssuesArray

    def getNumberOfPeople():
        # firebaseに接続してユーザー数を取ってくる
        numberOfPeople = 0              # 暫定
        return numberOfPeople


def matching(person = User()):                  # 引数personとはマッチングしたい本人のこと
    targetUser = []                             # マッチングしたい相手
    for i in range(person.numberOfPeople):
        targetUser.append(User())

    offerUser = User()
    for i in range(person.numberOfPeople):
        maxMatchingPram = 0
        currentMatchingParam = 0
        currentMatchingPram = person.managementIssuesArray & targetUser[i].managementIssuesArray
        if(currentMatchingPram >= maxMatchingPram):
            maxMatchingPram = currentMatchingPram
            offerUser = targetUser[i]

    return offerUser

def main():
    # Djangoを介してフロントエンドと連携する
    if(コラボを探すボタンを押される):
        コラボ相手 = matching(ユーザー)

if __name__ == '__main__':
    main()
