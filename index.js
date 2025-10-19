const inputBoxCost = document.getElementById("inputBoxCostI");
const inputBoxTip = document.getElementById("inputBoxCostT");
const buttonCalc = document.getElementById("buttonCalcTest");
const finalBillText = document.getElementById("finalText");

    function billCalc() {
        var billCost = inputBoxCost.value;
        var tipCost = inputBoxTip.value;
        var finalCost = parseInt(billCost) + (parseInt(billCost)*(parseInt(tipCost)/100));

        finalBillText.textContent = "$"+String(finalCost);
    }

    buttonCalc.addEventListener('click',billCalc);
