def testFunction():
    testArray = []
    for i in range(5):
        testArray.append(i)

    return testArray

def main():
    test = []
    test = testFunction()
    print(test)

if __name__ == '__main__':
    main()
