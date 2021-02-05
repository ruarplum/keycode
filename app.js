const introText = document.querySelector(".intro-text");
const keyTitle = document.querySelector(".keyTitle");
const codeTitle = document.querySelector(".codeTitle");
const whichTitle = document.querySelector(".whichTitle");

document.addEventListener("keydown", (event) => {    
    keyTitle.textContent = "event.key"
    codeTitle.textContent = "event.code";
    whichTitle.textContent = "event.which";
    let paraKey = document.querySelector(".keyResult");
    paraKey.textContent = event.key;    
    let paraCode = document.querySelector(".codeResult");
    paraCode.textContent = event.code;
    let paraWhich = document.querySelector(".whichResult");
    paraWhich.textContent = event.which;
    introText.textContent = event.which;
});