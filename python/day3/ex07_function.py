# 1. 일반적인 함수:입력값과 리턴이 있는 함수
def add(a,b):
    return a+b
    print("aaaaa")
re= add(10,20)
print(re)

#2. 입력값이 없는 함수
def printHi():
    print("Hi")
print(printHi())

#매개변수 지정해서 호출하기-매개변수를 지정해서 호출시 순서에 상관없이 사용할수 있다. 
def sub(a,b):
    return a-b
re2 = sub(10,20)
print(re2)

#입력값이 몇개가 될지 모를 때
def addMany(*args):
    result=0
    for i in args:
        result = result+i
    return result

re3=addMany(1,2,3,4,5)
re4=addMany(7,8,9)
print(re3)
print(re4)

#매개변수에 초기값 설정하기
# def = define -->정의 하다.
def sayMy(name,age,man=True):
    print("나의 이름은 %s 입니다" %name)
    print("나의 나이는 %d 살입니다."%age)
    if man :
        print("남자입니다.")
    else:
        print("여자입니다.")
        
sayMy("킴그린",22)
sayMy("리블루",23,False)