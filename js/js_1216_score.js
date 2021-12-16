const form=document.getElementById("myForm");
const submit = document.getElementById('submit') ;
const chi = document.getElementById("chi");
const eng = document.getElementById("eng");
const math = document.getElementById("math");
const resultOutput = document.getElementById("resultOutput");
const btn2Button=document.getElementById("btn");
chi.addEventListener("change",function(e){
    if(chi>100 || chi<0){
        chi.value=0;
    alert("輸入格式不正確");
    }
});
eng.addEventListener("change",function(e){
    if(eng>100 || english<0){
        eng.value=0;
        alert("輸入格式不正確");
    }
});
math.addEventListener("change",function(e){
    if(math>100|| math<0){
        math.value=0;
        alert("輸入格式不正確");
    }
});
// resultOutput.innerText = "12345";

//get form
let total="";
submit.addEventListener("click",function(e){
    e.preventDefault();
    console.log(e);
    // 預防表單重新整理的預設行為
    
    console.log(chi.value);
    console.log(eng.value);
    console.log(math.value);
    parseIntChi = parseInt(chi.value);
    parseIntEng = parseInt(eng.value);
    parseIntMath = parseInt(math.value);
    let avg =(Math.round(parseIntChi+parseIntEng+parseIntMath)/3);
    console.log("avg",avg);
    // 看下資料型態
    console.log(typeof(total));
    // switch
    let level;
    let color="secondary";
   
if(avg>=90){
    level="A"
    color="success";
}else if(avg>=80){
    level="B"
}else if(avg>=70){
    level="C"
}else if(avg>=60){
    level="D"
}else {
    level="E"
    color="danger";
} 
            console.log("level",level);
            console.log("color",color);           
            const result=
            `<div class="alert alert-danger" role="alert" id="resultOutput">
            國文:${chi}100<br>
            英文:${eng}50<br>
            數學:${math}80<br>
            總分:${total}200<br>
            平均:${avg}100<br>
            成績判定:${level}
            </div>`;

            resultOutput.innerText = result;
});