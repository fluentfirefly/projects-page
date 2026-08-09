const sets = [...document.querySelectorAll(".link-set")];
const previousButton = document.querySelector(".arrow-previous");
const nextButton = document.querySelector(".arrow-next");
const pagination = document.querySelector(".pagination");
const panel = document.querySelector(".panel");
const domainName = document.querySelector("#domain-name");

let currentIndex = 0;
let touchStartX = 0;

if (!["", "localhost", "127.0.0.1"].includes(window.location.hostname)) {
  domainName.textContent = window.location.hostname;
  document.title = window.location.hostname;
}

const dots = sets.map((set, index) => {
  const dot = document.createElement("button");
  const title = set.querySelector("h1").textContent;

  dot.className = "dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Show ${title}`);
  dot.addEventListener("click", () => showSet(index));
  pagination.append(dot);

  return dot;
});

function showSet(index) {
  if (index < 0 || index >= sets.length || index === currentIndex) return;

  sets[currentIndex].hidden = true;
  sets[currentIndex].classList.remove("is-active");
  currentIndex = index;
  sets[currentIndex].hidden = false;
  sets[currentIndex].classList.add("is-active");
  sets[currentIndex].scrollTop = 0;

  updateControls();
}

function updateControls() {
  previousButton.hidden = currentIndex === 0;
  nextButton.hidden = currentIndex === sets.length - 1;

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
}

previousButton.addEventListener("click", () => showSet(currentIndex - 1));
nextButton.addEventListener("click", () => showSet(currentIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showSet(currentIndex - 1);
  if (event.key === "ArrowRight") showSet(currentIndex + 1);
});

panel.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

panel.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;

  if (Math.abs(distance) < 55) return;
  showSet(currentIndex + (distance < 0 ? 1 : -1));
}, { passive: true });

updateControls();
