import random

#로또 번호 출력 1~45
lottolist = []
resultlist = []

for i in range(1,46):
    lottolist.append(i)

for i in range(6):
    randomNum = random.randint(1,len(lottolist))-1
    lottol = lottolist.pop(randomNum)
    resultlist.append(lottol)
print(resultlist)