const questionBtns = document.querySelectorAll(".question-btn");
const answerTexts = document.querySelectorAll(".answer-text");
const icons = document.querySelectorAll(".question-btn img");

questionBtns.forEach(btn => btn.addEventListener("click", () => {
    const targetAnswer = document.getElementById(btn.getAttribute("aria-controls"));

    if (targetAnswer.hidden) {
        answerTexts.forEach(ans => ans.hidden = true);
        icons.forEach(icon => icon.src = "images/icon-plus.svg");
        targetAnswer.hidden = false;
        btn.querySelector("img").src = "images/icon-minus.svg";
    }
    else {
        targetAnswer.hidden = true;
        btn.querySelector("img").src = "images/icon-plus.svg";
    }
}));