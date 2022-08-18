const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

function compareValue(sum,luckyNumber){
    if(sum % luckyNumber === 0){
        outputBox.innerText="Your Birthday Is Lucky....🤩💕";
    }
    else{
        outputBox.innerText="Your Birthday Is Not That Lucky....😞💔";
    }
}

function checkBirthdateIsLucky(){

    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValue(sum,luckyNumber.value);
    }
    else{
        outputBox.innerText="Please Enter Both The Fields First"
    }
    
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for( let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
     return sum;
}

checkButton.addEventListener("click", checkBirthdateIsLucky);


