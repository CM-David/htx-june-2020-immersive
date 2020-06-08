num = [80000, 7, 8, 9, 9, 23, 45, 50000, 23, 50]

def largest(num):
    num.sort()
    print(num)
    print(num[-1])

largest(num)

def largest2(num):
    lastIndex = len(num) - 1
    num.sort()
    print(num[lastIndex])


largest2(num)



def largest3 (num):
    i = 0
    greatestNum = 0
    while i < len(num):
        if greatestNum < num[i]:
            greatestNum = num[i]
        i += 1
    print(greatestNum)
largest3(num)