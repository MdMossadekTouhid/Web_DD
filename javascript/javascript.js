/* Output:
1.innerHTML
2.document.write()
3.document.getElementById("demo").innerHTML = "Hello JavaScript!";
3.document.getElementById("demo").src = "picture.png";
4.alert()
5.console.log()
*/

//Javascript practice - https://www.w3resource.com/javascript-exercises/

var a=50;
var b=10;
var c=a%b;
var str="Mossadek";
var str1="Touhid";
console.log(c);
console.log(str,str1);
if(a==b){
	console.log("a is equal to b");
}
else if(a>b){
	console.log("a is greater than b");
}
else{
	console.log("a is less than b");
}

var i;
for(i=0;i<=10;i++){
	console.log(i);
}

document.write("Even number using for loop:<br>");
for(var i=1;i<=20;i++){
	if(i%2==0){
		document.write(i,"<br>");
	}
}
document.write('<hr style="background-color:red;">');
document.write("Odd number using while loop:<br>");
var j=1;
while(j<21){
	if(j%2==1){
		document.write(j,"<br>");
	}
	j++;
}
document.write('<hr style="background-color:red;">');
document.write("Prime no. from 1 to 20 using do-while loop:<br>");
var i=2;
do{
	var temp=1;
	for(var j=2;j<i;j++){
		if(i%j==0){
			temp=0;
			break;
		}
	}
	if(temp==1){
		document.write(i,"<br>");
	}
	i++;
}while(i<=20);
document.write('<hr style="background-color:red;">');
var n=5;
var m=6;
function mul(){
	var n=10;
	var m=20;
	document.write("<br>Local variable : ",n*m,"<br>");
}
mul();
document.write("Global variable : ",n+m);
document.write('<hr style="background-color:red;">');
