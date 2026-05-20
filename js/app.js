// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
  document.documentElement.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {

  document.documentElement.classList.toggle("dark");

  if(document.documentElement.classList.contains("dark")){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light");
  }

});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((reveal) => {

    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      reveal.classList.add("active");
    }

  });

});