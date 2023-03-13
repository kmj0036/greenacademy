
list1 = ["o","t","th"]
for i in list1:
    print(i)
    
for i in "green":
    print(i)
    
    number = 0
    for stu in list:
        number =number+1
        if stu >=70:
            print("%d번 학생은 합격입니다. " %number )
        else:
            print("%d번학생 불합격입니다.")
            
print(list(range(3,10,3)))

sum =0
for i in range(1,11,2):
    sum = sum +i
print("1~10의 합계는 %d 입니다")


# 
for i in range(2,10):
    for j in range (1,10):
        print('%d*%d=%d' %(i,j,i*j))