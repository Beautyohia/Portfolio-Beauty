const experiences = Array.from(document.querySelectorAll(".experience"));

experiences.forEach((element) => {
  let toggleBtn = element.querySelector(".toggle");
  let tasks = element.querySelector(".tasks");
   toggleBtn.addEventListener("click", function() {
    tasks.classList.toggle("hidden");
  });
});
