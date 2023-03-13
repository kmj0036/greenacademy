
coffee =10
while True:
    money=int(input("돈을 넣어 주시오:"))
    if money == 300:
        print("커피를 줍니다.")
        coffee =coffee-1
    elif money > 300:
        print ("거스름돈 %d 원이 반환되고 커피가 나옵니다." %(money-300))
        coffee = coffee-1
    else:
        print("돈이 부족합니다")
        print("남은 커피의 수는 %d입니다" %coffee)
    if coffee ==0:
        print("커피가 다 소진되었습니다. 판매가 중지됩니다.")
        break
    
    
    