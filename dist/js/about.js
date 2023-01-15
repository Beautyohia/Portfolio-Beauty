const experiences = Array.from(document.querySelectorAll(".experience"));
// console.log(experiences);

experiences.forEach((element) => {
  let toggleBtn = element.querySelector(".toggle");
  let tasks = element.querySelector(".tasks");
  toggleBtn.addEventListener("click", function openAccordion() {
    toggleBtn.innerHTML = toggleBtn.innerHTML === "+" ? "-" : "+";
    tasks.classList.toggle("hidden");
  });
});
