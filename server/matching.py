class User:
    var userID                  # ユーザーID
    var managementIssuesArray   # 経営課題のフラグ列
    var numberOfPeople          # ユーザー数

    def __init__(self):
        self.UserID = getUserID()
        self.managementIssuesArray = getManagementIssues()
        self.numberOfPeople = getNumberOfPeople()

    def getUserID():
        # firebaseに接続してユーザーIDを取ってくる
        return userID

    def getManagementIssues():
        # firebaseに接続して経営課題のフラグを取ってくる
        return managementIssuesArray

    def getNumberOfPeople():
        # firebaseに接続してユーザー数を取ってくる
        return numberOfPeople


def matching(User person):                  # 引数personとはマッチングしたい本人のこと
    User targetUser[person.numberOfPeople]  # 比較対象のユーザーまとめの配列
    User offerUser
    for i in range(person.numberOfPeople):
        var maxMatchingPram = 0
        var currentMatchingParam = 0
        currentMatchingPram = person.managementIssuesArray & targetUser[i].managementIssuesArray
        if(currentMatchingPram >= maxMatchingPram){
            maxMatchingPram = currentMatchingPram
            offerUser = targetUser[i]
        }
    return offerUser

def main():
    # Djangoを介してフロントエンドと連携する
    if(コラボを探すボタンを押される):
        コラボ相手 = matching(ユーザー)

if __name__ == '__main__':
    main()
