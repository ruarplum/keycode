const body = document.querySelector("body");
const firstPage = document.querySelector(".first-page");
const introText = document.querySelector(".intro-text");
const eventTitles = document.querySelector(".event-titles");
// const eventKeyResult = document.querySelector(".key-result");
// const eventCodeResult = document.querySelector(".code-result");
// const eventWhichResult = document.querySelector(".which-result");

document.addEventListener("keydown", (event) => {
    console.log(event);
    firstPage.style.display = "none";
    
    let eventKeyResult = event.key;
    console.log(eventKeyResult);

    let eventCodeResult = event.code;
    console.log(eventCodeResult);

    let eventWhichResult = event.which;
    console.log(eventWhichResult)

    let paraKey = document.querySelector(".keyResult");
    paraKey.textContent = eventKeyResult;

    let paraCode = document.querySelector(".codeResult");
    paraCode.textContent = eventCodeResult;

    let paraWhich = document.querySelector(".whichResult");
    paraWhich.textContent = eventWhichResult;
});

// console.log(paraKey);
// console.log(paraCode);
// console.log(paraWhich);
// .KeyResult.textContent = ""
