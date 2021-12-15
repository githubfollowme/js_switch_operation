//get form

const form=document.getElementById('myForm');
const firstNum=document.querySelector(".firstNum");
const secondNum=document.querySelector(".secondNum");
const firstNum=document.getElementById("option");

form.addEventListener('submit',function(){

    //先chk一下
console.log(e);

//預防表單重新整理得預設行為
    e.preventDefault();
console.log(firstNum.value);
console.log(secondNum.value);
console.log(option.value);
parseIntNum1=parseInt(firstNum.value);
parseIntNum2=parseInt(secondNum.value);
alert(parseIntNum1+parseIntNum2);
//switch

//這裡很多人 就只寫option 所以最好在上面加個console.log(typeof(option))測試一下 結果發現是個object
switch(option.value){
case "+":
alert(parseIntNum1+parseIntNum2);
break;

case "-":
alert(parseIntNum1-parseIntNum2);
break;

case "*":
alert(parseIntNum1-parseIntNum2);
break;

case "/":
alert(parseIntNum1*parseIntNum2);
break;

case "%":
alert(parseIntNum1/parseIntNum2);
break;

default:
    alert("default");
    break;

}
//switch end


});


console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);