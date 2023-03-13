import random
#random()
num=random.random()
print(num)

#평균구하기
listA =[70,60,55,75,95,90,80,80,85,100]
total =0
for i in listA:
    total += i
ave= total /len(listA)
print(ave)


for i in range(5):
    print("*"*(i+1))    
    
rps= input("가위,바위,보중 하나를 입력해주세요 :")
if rps != '가위' and rps != '바위' and rps != '보':
    print("잘못입력하셨습니다.")
else :
    print("%s를 입력했습니다."%rps)
    rpsnum = random.randint(1,3)
    comrps = "가위" if rpsnum ==1 else "바위" if rpsnum == 2 else "보"
    print("컴퓨터는 %s를 냈습니다. " %comrps)
    if rps == comrps :
        print('비겼습니다.')
    elif rps == "가위" and  comrps == "보" or rps=="바위" and comrps =="가위" or rps=="보" and comrps=="바위" :
        print('you win')
    else :
        print('you lose')