// var a= 5;

// document.write("Initial value: " + a);
// document.write("<br> Value after Increment is: " + ++a);

// var b= 7;
// var sum = a+b

// document.write("<br> Value after addition is " + sum);
// document.write("<br> Value after decrement is: " + --sum);

// var c= 3;
// document.write("<br> The remainder is: " + c/sum);


//                          ************* NEW TASK ***********


// var a = "600";
// var b = "5";
// var c = a*b;

// document.write("Total cost buy 5 tickets to movie is " + c + "PKR")


// var a = parseInt(prompt("Enter Item 1 price "));
// var b = parseInt(prompt("enter quantity "));
// var c = parseInt(prompt("Enter Item 1 price "));
// var d = parseInt(prompt("enter quantity "));
// var e = parseInt(prompt("Shipping charges","100"));

// document.write("Price of item 1 is " + a)
// document.write("<br> Quantity item 1 is " + b)
// document.write("<br> Price of item 2 is " + c)
// document.write("<br> Quantity item 2 is " + d)
// document.write("<br> Shipping charges " + e)

// var sum = ((a*b)+(c*d)+e);

// document.write("<br><br> Total cost of your order is " + sum);


//                          ************* NEW TASK ***********

// alert("pizza" + "\n" + "pizz" + "\n" + "piz" + "\n" + "pi" + "\n" + "p")


//                          ************* NEW TASK ***********


// var dollar = parseInt("104.80")
// var multi = dollar * 10;
// var riyal = parseInt("28");
// var mult = riyal * 25;
// var sum = mult + multi;

// document.write("Total currancy in PKR: " + sum);


//                          ************* NEW TASK ***********


// var a = parseInt(4)
// var b = parseInt(5)
// var sum = a + b;
// var multi = sum * 10;
// var divi = multi / 2;

// document.write(divi);


//                          ************* NEW TASK ***********


// var a = parseInt(2022)
// var b = parseInt(1998)
// var c = a - b

// document.write("Current Year: " + a);
// document.write("<br> Birth Year: " + b);
// document.write("<br> Your Age: " + c)


//                          ************* NEW TASK ***********


// var a = "Sooper"
// var b = parseInt(40)
// var c = parseInt(90)
// var d = parseInt(2)
// var e = parseInt(30)
// var f = parseInt(12)

// var g = (c - b) * ((e*f)*d);

// document.write("Favourite snack: " + a)
// document.write("<br> Current age: " + b)
// document.write("<br> Estimated maximum Age: " + c)
// document.write("<br> Amount of snacks per day: " + d)
// document.write("<br> You will need " + g +" " + a + " " + "to last you until the ripe old age of " + c )


//                          ************* NEW TASK ***********


// var inp = prompt("Enter Number")
// var len = (inp.length)
// if(len==0){
//     document.write("Please enter data")
// }
// else{
//     document.write(inp)
// }

//                          ************* NEW TASK ***********


// var a =5
// var a1= typeof a
// var b="5"
// var b1 = typeof b
// var c = a===b
// console.log(a1,b1)
// console.log(c) 


//                          ************* NEW TASK ***********


// var a = parseInt (prompt("value of a",122))
// var b = parseInt (prompt("value of b" ,121))
// var c = parseInt (prompt("value of c" , 120))

// if (a>b && a>c){
//     document.write("<br> A is greater")

//     if (b>c){
//         document.write("<br> B is med")
//         document.write("<br> C is small")
//     }
//     else{
//         document.write("<br> B is Small")
//         document.write("<br> c is Med")

//     }
// }
// else if (b>a && b>c){
//     document.write("<br> B is greater")

//     if (c>a){
//         document.write("<br> C is med")
//         document.write("<br> A is small")
//     } else {
//         document.write("<br> C is samll")
//         document.write("<br> A is med")
//     }
// }
// else if (c>b && c>a){
//     document.write("<br> C is greater")

//     if (a>b){
//         document.write("<br> A is med")
//         document.write("<br> b is samll")
//     }
//     else{
//         document.write("<br> A is small")
//         document.write("<br> b is med")
//     }
// }

//                          ************* NEW TASK ***********


// var a1 = [1,2,3,4,5,"hello",4,"data"]
// console.log(a1)
// console.log(a1[4])
// a1.push(45)
// console.log(a1)
// a1.pop()
// console.log(a1)
// console.log(a1.length)
// console.log(a1.slice(1,5))
// console.log(a1.indexOf(4))




// //                           (------Assignment #06-----) 

// //                           Task 1, Mathematics Expressions

// var a = 10;

// document.write("Result:");
// document.write("<br>The value of a is" + a);

// document.write("<br><br>------------------------------")

// document.write("<br><br>The value of ++a is: " + ++a);
// document.write("<br>Now the value of a is: " + a);

// document.write("<br><br>The value of a++ is: " + a++);
// document.write("<br>Now the value of a is: " + a);

// document.write("<br><br>The value of --a is: " + --a);
// document.write("<br>Now the value of a is: " + a);

// document.write("<br><br>The value of a-- is: " + a--);
// document.write("<br>Now the value of a is: " + a);



//                              ----Task 2----

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//          //    1 -   0  +  1 + 1 = 3  
// document.write(result);

// //     --a;
// //     =1
// //     --a - --b
// //     =1
// //     --a - --b + ++b
// //     =2
// //     --a - --b + ++b + b--
// //     =3


//                              ---Task 3---


// var inp= prompt("Enter your name");

// document.write("Welcome Thakur");


//                                ------New task 4,5----

// var user= parseInt(prompt("Enter only one number",5));
// var a= 0;

// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");
// document.write(user + " *" + " "  + ++a + " " + "=" + " " + user*a + "<br>");


//                                      -----New task 6---


// var a= prompt("Enter first subject name");
// var b= prompt("Enter first subject name");
// var c= prompt("Enter first subject name");

// var t_marks= parseInt(100);

// var d= parseInt(prompt("Enter obtained marks for first subject"));
// var e= parseInt(prompt("Enter obtained marks for second subject"));
// var f= parseInt(prompt("Enter obtained marks for third subject"));


// document.write("<table>");

// document.write("<tr>")

//     document.write("<th> Subject </th>")
//     document.write("<th> Total marks </th>")
//     document.write("<th> Obtained marks marks </th>")
//     document.write("<th> Percentage </th>")

// document.write("</tr>")

// document.write("<tr>")

//     document.write("<td>" + a + "</td>");
//     document.write("<td>" + t_marks + "</td>");
//     document.write("<td>" + d + "</td>");
//     document.write("<td>" + d + "%" + "</td>");

// document.write("</tr>")

// document.write("<tr>")

//     document.write("<td>" + b + "</td>");
//     document.write("<td>" + t_marks + "</td>");
//     document.write("<td>" + e + "</td>");
//     document.write("<td>" + e + "%" + "</td>");


// document.write("</tr>")

// document.write("<tr>")

//     document.write("<td>" + c + "</td>");
//     document.write("<td>" + t_marks + "</td>");
//     document.write("<td>" + f + "</td>");
//     document.write("<td>" + f + "%" + "</td>");

// document.write("</tr>")

// document.write("<tr>")

//     document.write("<th colspan='2'>" + t_marks*3 + "</th>");
//     var sum= d+e+f;
//     document.write("<th>" + sum + "</th>");
//     var per= sum/300*100
//     document.write("<th>" + per.toFixed() + "%" + "</th>");

// document.write("</tr>")

// document.write("</table>");


//                        ----------USER INPUT & CONDITIONAL STATEMENT-------

//                                  ------Task 1-----

// var city= "Karachi";

// var inp= prompt("Enter any city name");

// if (inp.toLowerCase() == city.toLowerCase())
// {
//     document.write("<h1> The city of Lights</h1>")
// }
// else
// {
//     document.write("<h1> Good choice </h1>")
// }


//                                  -------Task 2------

// var genma= "male";
// var genfe= "female";

// var inp= prompt ("What is your gender");

// if (inp.toLowerCase() == genma.toLowerCase())
// {
//     document.write("Good morning sir")
// }
// else if (inp.toLowerCase() == genfe.toLowerCase())
// {
//     document.write("Good morning Ma'am");
// }
// else
// {
//     document.write("Plz enter your gender")
// }


//                                  ------Task 3------

// var a= "Red";
// var b= "Yellow";
// var c= "Green";

// var inp= prompt("Enter color of road traffic signal");

// if(inp.toLowerCase() ==a.toLowerCase() || inp.toLowerCase() ==b.toLowerCase() || inp.toLowerCase() ==c.toLowerCase())
// {
//     document.write("<br><br><br><br><br><br><br><center><table class='tb' cellpadding='10px'>")
//     document.write("<tr class= 'rb'> <th> Signal color <span class='mg'> Message </span> </th> </tr>");
//     document.write("<tr class='back'> <th> <span class='al'> Red </span> <span class='mg'> Must Stop </span> </th> </tr>");
//     document.write("<tr> <th> <span class='al'> Yellow </span> <span class='mg'> Ready to Move </span></th> </tr>");
//     document.write("<tr class='back'> <th> <span class='al'> Green </span> <span class='mg'> Move now </span></th> </tr> <tr></tr></center>");
// }
// else
// {
//     document.write("WRONG COLOR")
// }


//                                  -----task 4-----


// var inp= prompt("How much fuel is remaining in car (in litre)?")

// if(inp.charCodeAt(0) >= 48 && inp.charCodeAt(0) <= 57)
// {
//     if (inp <= 0.25)
//     {
//         document.write("Plz refill the fuel")
//     }
//     else
//     {
//         document.write("Car fuel is : " + inp + " liter" + "<br>" + "Drive carefully")
//     }
// }
// else
// {
//     document.write("Use only number")
// }


//                                  -----task 5-----

// // A
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }  //true

// // B
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }    //false

// // C
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }   //false

// if (c === 13){
// alert("condition 2 is true");
// }   //true

// if (++c < 14){
// alert("condition 3 is true");
// }   //false

// if(c === 14){
// alert("condition 4 is true");
// }   //true

// // D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }  //true

// //E
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // F
// if("car" < "cat"){
// alert("car is smaller than cat");
// }   //true


//                                  -----task 6-----


// var obt_marks= parseInt(prompt("How many marks do you obtained in three subjects?"));
// var T_marks= parseInt(prompt("Enter total marks of three subjects"));
// var per= (obt_marks / T_marks) *100;

// document.write("<fieldset>  <h1> Marks Sheet </h1> <br><br><br>");

// document.write("Total marks :" + T_marks + "<br>");
// document.write("Marks obtained :" + obt_marks + "<br>");
// document.write("Percentage :" + per.toFixed() + "%" + "<br>");

// if(per >= 80)
// {
//     document.write("Grade :A-one <br> Remarks : Excellent")
// }
// else if(per >= 70)
// {
//     document.write("Grade :A <br> Remarks : Good")
// }
// else if(per >= 60)
// {
//     document.write("Grade :B <br> Remarks : You need to improve")
// }
// else
// {
//     document.write("Grade :Fail <br> Remarks : Sorry")
// }

// document.write("</fieldset>")


//                                  -----task 7-----


// var secret_num= (Math.random()*10).toFixed()
// // alert(secret_num);
// var inp= parseInt(prompt("Enter number"))

// if(inp == secret_num)
// {
//     document.write("BINGO! Correct guess")
// }
// else if(inp+1 == secret_num)
// {
//     document.write("Close enough to correct answer.")
// }
// else
// {
//     document.write("Incorrect")
// }


//                                  -----task 8-----


// var a= 16;
// var b= 3;

// if(a % b == 0)
// {
//     alert("Divisible by 3")
// }
// else
// {
//     alert("Not Divisible")
// }


//                                  -----task 9-----


// var inp= parseInt(prompt("Enter number"))

// if(inp == 0)
// {
//     document.write("Plz try another number")
// }
// else if(inp % 2 == 0)
// {
//     document.write("Even number")
// }
// else
// {
//     document.write("Odd number")
// }


//                                  -----task 10-----


// var temp= parseInt(prompt("Enter temperature"));

// if(temp > 40)
// {
//     document.write("It is too hot outside");
// }
// else if(temp > 30)
// {
//     document.write("Today's weather is normal");
// }
// else if(temp > 20)
// {
//         document.write("Today's weather is cool")
// }
// else if(temp > 10)
// {
//     document.write("OMG! Today's weather is so cool")
// }
// else
// {
//     document.write("Allah khair karey")
// }


//                                  -----task 11-----


// var a= parseInt(prompt("Enter first number"));
// var b= parseInt(prompt("Enter second number"));
// var op= prompt("Operators  : +,-,*,/,%")

// if(op == "+")
// {
//     alert("First number is :" + a + "\n" + "Second number is :" + b + "\n" + "Operator is :" + " " + op + "\n" + "Result :" + (a+b));
// }
// else if(op == "-")
// {
//     alert("First number is :" + a + "\n" + "Second number is :" + b + "\n" + "Operator is :" + " " + op + "\n" +"Result :" + (a-b));
// }
// else if(op == "*")
// {
//     alert("First number is :" + a + "\n" + "Second number is :" + b + "\n" + "Operator is :" + " " + op + "\n" +"Result :" + (a*b));
// }
// else if(op == "/")
// {
//     alert("First number is :" + a + "\n" + "Second number is :" + b + "\n" + "Operator is :" + " " + op + "\n" +"Result :" + (a/b));
// }
// else if(op == "%")
// {
//     alert("First number is :" + a + "\n" + "Second number is :" + b + "\n" + "Operator is :" + " " + op + "\n" +"Result :" + (a%b));
// }
// else
// {
//     alert("Error")
// }

//                     ************ IF…ELSE & ELSE IF STATEMENT ****************

//                                  -----task 1-----


// var ascii= prompt("Enter character");
// alert(ascii.charCodeAt());


//                                  -----task 2-----

// var a= 1;
// var b= 2;

// if(a>b)
// {
//     alert(a);
// }
// else if(b>a)
// {
//     alert(b);
// }
// else if(a == b)
// {
//     alert("First number is :" +  a + "\n" + "Second number is :" + b)
// }
// else
// {
//     alert("Error")
// }


//                                  -----task 3-----

// var a= parseInt(prompt("Enter number"));

// if(a > 0)
// {
//     alert("Positive Number");
// }
// else if( a == 0)
// {
//     alert(a)
// }
// else if(a < 0 )
// {
//     alert("Negative number")
// }
// else
// {
//     alert("Error")
// }

//                                  -----task 4-----

// var vowel= "A";

// if(vowel.toLowerCase() == "a")
// {
//     alert("True")
// }
// else if(vowel.toLowerCase() == "e")
// {
//     alert("True");
// }
// else if(vowel.toLowerCase() == "i")
// {
//     alert("True");
// }
// else if(vowel.toLowerCase() == "o")
// {
//     alert("True");
// }
// else if(vowel.toLowerCase() == "u")
// {
//     alert("True");
// }
// else
// {
//     alert("False")
// }


//                                  -----task 5-----


// var correct_pass= "usama123";
// var inp= prompt("Enter your password");

// if(inp == correct_pass)
// {
//     alert("Correct Password")
// }
// else if(inp == "")
// {
//     alert("Plz enter your password")
// }
// else
// {
//     alert("Incorrect password")
// }


//                                  -----task 6-----


// var hour=20;

// if(hour < 18)
// {
//     alert("Good day");
// }
// else
// {
//     alert("Good evening")
// }


//                                  -----task 7-----


// var clock= prompt("Enter time in 24 hours clock");

// if(clock >=0000 && clock < 1200)
// {
//     console.log("Good morning") 
// }
// else if(clock >= 1200 && clock < 1700)
// {
//     console.log("Good after noon");
// }
// else if(clock >= 1700 && clock < 2100)
// {
//     console.log("Good evening");
// }
// else if(clock >= 2100 && clock < 2400)
// {
//     console.log("Good night");
// }
// else
// {
//     document.write("yeh koi majak horiya hai....")
// }


//                                  ************ ARRAYS *************

// //                                   ********* TASK 1 **********    

// var array= [];

//                                   ********* TASK 2 **********    

// var array= [];

//                                   ********* TASK 3 **********    

// var array= ["usama", "shah"];

//                                   ********* TASK 4 **********    

// var array= [1,2,3,4];

//                                   ********* TASK 5 **********    

// var array= [true,false];

//                                   ********* TASK 6 **********    

// var array= ["usama","shah",1,2,3,true,false];

//                                   ********* TASK 7 **********    

// var array= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<fieldset> <h1> Qualifications: </h1> <br>")

//     document.write("<h2> 1) " + array[0] + "</h2>")
//     document.write("<h2> 2) " + array[1] + "</h2>")
//     document.write("<h2> 3) " + array[2] + "</h2>")
//     document.write("<h2> 4) " + array[3] + "</h2>")
//     document.write("<h2> 5) " + array[4] + "</h2>")
//     document.write("<h2> 6) " + array[5] + "</h2>")
//     document.write("<h2> 7) " + array[6] + "</h2>")
//     document.write("<h2> 8) " + array[7] + "</h2>")


//                                   ********* TASK 8 **********    


// var s_names= ["Usama", "Danish", "Hamza"];
// var s_score= [320, 420, 280]
// var t_marks= 500;

// var usama_per= ((s_score[0]/t_marks)*100).toFixed();
// var danish_per= ((s_score[1]/t_marks)*100).toFixed();
// var hamza_per= ((s_score[2]/t_marks)*100).toFixed();

// document.write("<fieldset> Score of" + " " + s_names[0] + " " + "is" + " " + s_score[0] + "." + " " + "Percentage: " + usama_per + "% <br>")
// document.write("Score of" + " " + s_names[1] + " " + "is" + " " + s_score[1] + "." + " " + "Percentage: " + danish_per + "% <br>")
// document.write("Score of" + " " + s_names[2] + " " + "is" + " " + s_score[2] + "." + " " + "Percentage: " + hamza_per + "% <br> </fieldset>")


//                                   ********* TASK 9 **********    


// var color_names= [];

// var inp1= prompt("Which color do you want to add?")
// color_names.push(inp1)
// console.log(color_names);
// var inp2= prompt("Which color do you want to add now?")
// color_names.push(inp2);
// console.log(color_names );
// color_names.unshift("Yellow","Orange");
// console.log(color_names )
// color_names.shift()
// console.log(color_names)
// color_names.pop()
// console.log(color_names)
// var inp3= parseInt(prompt("At which index number do you want to add color?"));
// var inp4= prompt("which color do you want to add?");
// color_names.splice(inp3,0,inp4);
// console.log(color_names);
// var inp5= parseInt(prompt("form which index number do you want to start removing color?"));
// var inp6= parseInt(prompt("How many colors do you want to delete?"));
// color_names.splice(inp5,inp6)
// console.log(color_names);


//                                   ********* TASK 10 **********    

// var s_score= [320,120,700];
// document.write("<fieldset> Scores of students : " + s_score + "<br>");
// s_score.sort()
// document.write("Orderd scores of students : " + s_score + "</fieldset>");


//                                   ********* TASK 11 **********    


// var cities= ["karachi", "Lahore","Islamabad", "Quetta", "Peshawar"];
// document.write("<fieldset> <h2> Cities list :</h2>" + cities + "<br><br>");
// var s_cities= cities.slice(2,4);
// document.write("<h2> Selected cities list :</h2>" + s_cities + "</fieldset>")


//                                   ********* TASK 12 **********    


// var array= ["This","is", "my", "cat"];
// document.write("<fieldset> <h2> Array: </h2>" + array)
// var j= array.join(" ");
// document.write("<h2> String </h2>" + j + "</fieldset>")

//                                   ********* TASK 13 **********    


// var devices= [];
// devices.push("Kyeboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");
// console.log(devices)
// document.write("<fieldset> <h2> Devices : </h2>" + devices + "<br><br>")

// document.write("<h3> Out: </h3> " + devices[0] + "<br>")
// document.write("<h3> Out: </h3> " + devices[1] + "<br>")
// document.write("<h3> Out: </h3> " + devices[2] + "<br>")
// document.write("<h3> Out: </h3> " + devices[3] + "</fieldset>")


//                                   ********* TASK 14 **********    


// var devices= [];
// devices.unshift("Monitor");
// devices.unshift("Printer");
// devices.unshift("Mouse");
// devices.unshift("Keyboard");
// console.log(devices)
// document.write("<fieldset> <h2> Devices : </h2>" + devices + "<br><br>")

// document.write("<h3> Out: </h3> " + devices[0] + "<br>")
// document.write("<h3> Out: </h3> " + devices[1] + "<br>")
// document.write("<h3> Out: </h3> " + devices[2] + "<br>")
// document.write("<h3> Out: </h3> " + devices[3] + "</fieldset>")


//                                   ********* TASK 15 **********    


// var array= ["Apple", "Motorolla", "Samsung", "Nokia", "Sony", "Haier"];

// document.write("<select> <option selected disabled> -------Select------ </option>")
// document.write("<option>" + array[0] + "</option>")
// document.write("<option>" + array[1] + "</option>")
// document.write("<option>" + array[2] + "</option>")
// document.write("<option>" + array[3] + "</option>")
// document.write("<option>" + array[4] + "</option>")
// document.write("<option>" + array[5] + "</option></select>")
