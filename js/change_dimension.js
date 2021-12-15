// 宣告
const cmInput = document.getElementById("cm");
const inchInput = document.getElementById("inch");
cmInput.addEventListener("change", function (e) {
// 預防表單重新整理的預設行為
// e.preventDefault();
    // console.log("centermeter is change")
// 1.1 公分
    const cm=parseFloat(cmInput.value);
    console.log(cm);
    let inch=cm/2.54;
    console.log(inch);
    inch=Math.round(inch*100)/100;
    console.log(inch);
    inchInput.value=inch;
});
    // 1.2 英吋
    inchInput.addEventListener("change", function (e) {
        // e.preventDefault(); 
        // 只有form表單submit才會用到
    const inch=parseFloat(inchInput.value);
    console.log(inch);
    cm=inch*2.54;
    cm=Math.round(cm*100)/100;
    console.log(cm);
    cmInput.value=cm;
});
    