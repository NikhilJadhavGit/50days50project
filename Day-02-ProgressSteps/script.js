let curActive = 1;

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", (e) => {
  if (curActive > 1) {
    curActive--;
    update();
  }
});

next.addEventListener("click", (e) => {
  if (curActive < circles.length) {
    curActive++;
    update();
  }
});

function update() {
  circles.forEach((circle, idx) => {
    if(curActive>1)
      prev.disabled = false;
    else
      prev.disabled = true;
    if(curActive>=circles.length){
      next.disabled = true;
    }
    else{
      next.disabled = false;
    }
    if (idx < curActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    const progressPercent = (curActive-1)/(circles.length-1)*100;
    progress.style.width=progressPercent+'%'; 
  });
}
