console.log("hello");

let interval;
let navMenuATags = document.querySelectorAll(".no-list-style a");
for (let element of navMenuATags) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    let targetSectionId = element.textContent.trim().toLowerCase();
    let targetSection = document.getElementById(targetSectionId);
    console.log(targetSection);

    interval = setInterval(scrollVertically, 20, targetSection);
    // or
    // interval = setInterval(function () {
    //   scrollVertically(targetSection);
    // }, 20);
  });
}

function scrollVertically(targetSection) {
  let targetSectionTop = targetSection.getBoundingClientRect().top;
  if (targetSectionTop <= 60) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}

// skill section

let skills = document.getElementById("skills");
let progressBar = document.querySelectorAll(".skill-progress > div");
let animationDone = false;

function initialiseBars() {
  for (var bar of progressBar) {
    bar.style.width = 0 + "%";
  }
  // if (progressBar[progressBar.length]) {
  //   bar.style.width = 100 + "%";
  // }
}

console.log(progressBar.length);

initialiseBars();
// let interval2;
function fillBars() {
  for (let bar of progressBar) {
    let currWidth = 0;
    let interval2 = setInterval(function () {
      let targetWidth = bar.getAttribute("data-bar-width");

      if (targetWidth <= currWidth) {
        clearInterval(interval2);
        return;
      }
      currWidth++;
      bar.style.width = currWidth + "%";
    }, 5);
  }
}

// let lastProgressBar = document.querySelector("last-progress-bar");
// function fillLastBar() {
//   setTimeout(function () {
//     let targetWidth3 = lastProgressBar.getAttribute("data-bar-width");
//     lastProgressBar.style.width = targetWidth3 + "%";
//   }, 5);
// }

function chekScroll() {
  let targetWidth = skills.getBoundingClientRect().top;

  if (!animationDone && targetWidth <= window.innerHeight) {
    animationDone = true;
    fillBars();
    // fillLastBar();
  } else if (targetWidth > window.innerHeight) {
    animationDone = false;
    initialiseBars();
  }
}

window.addEventListener("scroll", chekScroll);
