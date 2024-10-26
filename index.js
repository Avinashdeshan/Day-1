function calc() {
    let number01 = Number(document.getElementById("txtUserName1").value);
    let number02 = Number(document.getElementById("txtUserName2").value);
    let operator = document.getElementById("operator").value;
    let lblOutput = document.getElementById("lblOutput");

    //let displayText = Number(document.getElementById("displayText").value);
    //let lblOutput = document.getElementById("lblOutput");
    //let ans = eval(displayText);
    //lblOutput.innerHTML = ans;
    //alert(ans);
    let ans;
    if (operator == "+") {
        ans = number01 + number02;
    } else if (operator == "-") {
        ans = number01 - number02;
    } else if (operator == "*") {
        ans = number01 * number02;
    } else {
        ans = number01 / number02;
    }

    console.log("Number 01 : " + number01 + "|Number 02 : " + number02 + "|Operator : " + operator);
    lblOutput.innerHTML = "Number 01 : " + number01 + "|Number 02 : " + number02 + "=" + ans;
}