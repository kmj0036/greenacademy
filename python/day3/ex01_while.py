#while 을 이용한 조건문

treeHit = 0
while treeHit < 10:
    print("나무를 %d번 찍었습니다" %treeHit)
    treeHit += 1
    
# number =0
# while number != 4 :
    # print ("4가 아님")
    # number = int(input())
    
fruits = ["사과","오렌지"]
#추가
fruits.append("딸기")
#삽입
fruits.insert(1,"수박")
print(fruits)

#while문을 사용해서 1~10사이 홀수만 작성
# while wnumber <= 10:
#     if wnumber % 2 == 1:
#         numlist.append(wnumber)