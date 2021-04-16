const questions = document.querySelectorAll(
  ".container-questions .container-question"
);

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    questions.forEach((element) => {
      element.classList.remove("active");
      element.querySelector(".answer").style.maxHeight = null;
    });

    e.currentTarget.classList.toggle("active");

    const answer = question.querySelector(".answer");
    const realHeight = answer.scrollHeight;

    if (!answer.style.maxHeight) {
      answer.style.maxHeight = realHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});
