year=int(input("년도를 입력하시오:"))

if year %4 ==0:
    if year % 100 == 0:
        print("평년")
        if year % 400 == 0:
            print("윤년") 
    else:
        print("윤년")
else:
    print("평년")        