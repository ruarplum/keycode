const introText = document.querySelector(".intro-text");
const keyTitle = document.querySelector(".keyTitle");
const codeTitle = document.querySelector(".codeTitle");
const whichTitle = document.querySelector(".whichTitle");

document.addEventListener("keydown", (event) => {
    
    // let keyResult.textContent = event.key;
    
    let eventKeyResult = event.key;
    keyTitle.textContent = "event.key"

    let paraKey = document.querySelector(".keyResult");
    paraKey.textContent = eventKeyResult;
    

    
    let eventCodeResult = event.code;
    codeTitle.textContent = "event.code";

    let eventWhichResult = event.which;
    whichTitle.textContent = "event.which";


    
    
    let paraCode = document.querySelector(".codeResult");
    paraCode.textContent = eventCodeResult;

    paraCode

    // whichResult.textContent = eventWhichResult;
    let paraWhich = document.querySelector(".whichResult");
    paraWhich.textContent = eventWhichResult;

    // introText.textContent = eventWhichResult;
});

// // I guess I meant more along the lines of 
// paraWhich.textContent = event.which 
// or even 
// document.querySelector(".whichResult").textContent = event.which