// 宣告
const form = document.getElementById('myForm');
const ttlAmount = document.getElementById("ttlAmount");
const discount = document.getElementById("discount");
const extraBonus = document.getElementById("extraBonus");
const resultOutput2 = document.getElementById("resultOutput2");
// resultOutput.innerText = "12345";

//get form

form.addEventListener("submit", function (e) {
    console.log(e);
    // 預防表單重新整理的預設行為
    e.preventDefault();
    console.log(ttlAmount.value);
    console.log(discount.value);
    console.log(extraBonus.value);
    parsettlAmount = parseInt(ttlAmount.value);
    console.log(parsettlAmount);
    parseDiscount = parseFloat(discount.value / 100);
    console.log(parseDiscount);
    parseExtraBonus = parseInt(extraBonus.value);
    console.log(parseExtraBonus);
    // let discountAll=0;
    // switch
    // console.log(typeof(option.value));
    let total = "";
    total = (parsettlAmount * parseDiscount) - parseExtraBonus;

    // 全部的折扣+現金折扣
    let discountAll = 0;
    // // 滿500 就打 0.79 0.88
    if(parsettlAmount>=500){
        discountAll=parsettlAmount*(1-parseDiscount);
    }
if(parsettlAmount*parseDiscount>=100){
    discountAll=discountAll+parseExtraBonus;
}
console.log(discountAll);
    
    alert(resultOutput2.innerText = "恭喜你今天賺了" + discountAll);
    // resultOutput2.innerText = "Result :恭喜你今天賺了" + total;
})

