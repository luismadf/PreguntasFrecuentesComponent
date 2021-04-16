const categories = document.querySelectorAll("#categories .category");
const containerQuestions = document.querySelectorAll(".container-questions");
let activeCategory = null;

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    categories.forEach((category) => {
      category.classList.remove("active");
    });

    e.currentTarget.classList.toggle("active");
    activeCategory = category.dataset.category;

    /* Here we active the question container */

    containerQuestions.forEach((container) => {
      if (container.dataset.category === activeCategory) {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
      }
    });
  });
});
