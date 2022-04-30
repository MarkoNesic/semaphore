const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");

const startVertical = (firstVertical, secondVertical) => {
  startSempahore(firstVertical);
  startSempahore(secondVertical);
};

const startHorizontal = (firstHorizontal, secondHorizontal) => {
  startSempahore(firstHorizontal);
  startSempahore(secondHorizontal);
};

const startSempahore = (semaphore) => {
  semaphore.children[0].classList.toggle("red");
  setTimeout(() => {
    semaphore.children[0].classList.toggle("red");
    semaphore.children[1].classList.toggle("yellow");
    setTimeout(() => {
      semaphore.children[1].classList.toggle("yellow");
      semaphore.children[2].classList.toggle("green");
      setTimeout(() => {
        semaphore.children[2].classList.toggle("green");
        semaphore.children[1].classList.toggle("yellow");
        setTimeout(() => {
          semaphore.children[1].classList.toggle("yellow");
        }, 1000);
      }, 5000);
    }, 1000);
  }, 5000);
  setTimeout(() => {
    startSempahore(semaphore);
  }, 12000);
};



function startAll(){
    startVertical(first, third);
    setTimeout(() => {
      startHorizontal(second, fourth);
    }, 6000);
}

stopAll = () => {

}

document.querySelector(".start").addEventListener("click", ()=> {
    startAll()
})