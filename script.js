const questionBtns = document.querySelectorAll(".question-btn");
const answerTexts = document.querySelectorAll(".answer-text");
const icons = document.querySelectorAll(".question-btn img");

questionBtns.forEach(btn => btn.addEventListener("click", () => {
    const targetAnswer = document.getElementById(btn.getAttribute("aria-controls"));
    const btnIcon = btn.querySelector("img");
    const isExpanded = btn.getAttribute("aria-expanded");

    answerTexts.forEach(ans => ans.hidden = true);
    questionBtns.forEach(bt => bt.setAttribute("aria-expanded", "false"));
    icons.forEach(icon => icon.src = "images/icon-plus.svg");

    if (isExpanded == "false") {
        targetAnswer.hidden = false;
        btn.setAttribute("aria-expanded", "true");
        btnIcon.src = "images/icon-minus.svg";
    }
}));