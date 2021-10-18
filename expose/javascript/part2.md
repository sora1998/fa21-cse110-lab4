1. Question1: 3. it's var variable so it's not block variable so it can be accessed.Because the length of the price is 3, and i will be the the length of prices which is the number of original prices we pass to the function[100,200,300]
2. Question2: 150.it's var variable so it's not block variable so it can be accessed. When we implement the loop, the disscountedPrice variable will store the last discountedPrice which is 0.5*300=150.
3. Question3: 150.it's var variable so it's not block variable so it can be accessed.When we implement the loop, the finalprice variable will store the last discountedPrice which is round(150*100)/100=15000/100=150.
4. Question4: [ 50, 100, 150 ]. The Price we pass in is [100,200,300] and we pass in the discount is 0.5,we use loop calculated the price after loop and pass to a empty variable. The result is [100*0.5,200*0.5,300*0.5]=[ 50, 100, 150 ]
5. Question5:  ReferenceError: i is not defined. The variable i is let variable so it's scope is limited to the block which is the loop in this code. So it will be removed when the block over.
6. Question6:  ReferenceError: discountPrice is not defined.The variable discountPrice is let variable so it's scope is limited to the block which is the loop in this code. So it will be removed when the block over.
7. Question7: 150. In this code, the variable finalPrices's scope is the whole function, so we can access it outside the loop.The finalprice variable will store the last discountedPrice which is round(150*100)/100=15000/100=150
8. Question8:[ 50, 100, 150 ]. The change of the variable type will not affect the process of the function. So, it will still do the same thing as functiuon above and return the right result.The result is [100*0.5,200*0.5,300*0.5]=[ 50, 100, 150 ]
9. Question9: ReferenceError: i is not defined. The variable i is let variable so it's scope is limited to the block which is the loop in this code. So it will be removed when the block over.
10. Question10: 3. The length variable is const variable but the scope is the function,so it can be accessed. And the variable store the length of the input prices which is 3.
11. Question11: [ 50, 100, 150 ]. After change the discounted to const but we can change its value by internal function. length is a constant variable that store the length of the input prices and we don't need to change it. Even the const variable discountedPrice should can't be redeclared but because its scope is the loop every time it finish one loop the discountedPrice will be cleared so we are declaring a new variable. So everything should work, its output should be [100*0.5,200*0.5,300*0.5]=[ 50, 100, 150 ].
12. Question12:<br>
    A.student.name <br>
    B.student["grad year"] <br>
    C.student.greeting() <br>
    D.student["favorite reacher"].name <br>
    E.student.courseLoad[0] <br>
13. Question13:<br>
    A.32 <br>
    B.1  <br>
    C.3 <br>
    D.3null <br>
    E.4 <br>
    F.0 <br>
    G.3undefined <br>
    H.NaN <br>
14.Question14:<br>
    A.true <br>
    B.false <br>
    C.true <br>
    D.false <br>
    E.false <br>
    F.true <br>
15.Question15：If the two values are not the same type, === directly returns false, but ==)will convert them to the same type, and then compare them by ===. <br>
17. Question17: [2,4,6]. In the function modifyArray's loop eveytime it call the function callback with parameter array[i] which is pass array[i] to doSomething each loop, and doSomething return the value times 2. So the result is [1*2,2*2,3*2]= [2,4,6].<br>
19. Question19:1432
