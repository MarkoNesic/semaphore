const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");

let play = true;

const startVertical = (firstVertical, secondVertical) => {
  startSempahore(firstVertical);
  startSempahore(secondVertical);
};

const startHorizontal = (firstHorizontal, secondHorizontal) => {
  startSempahore(firstHorizontal);
  startSempahore(secondHorizontal);
};
const startSempahore = (semaphore) => {
  if(!!play) {
    semaphore.children[0].classList.toggle("red");
    setTimeout(() => {
      if(!!play) {
      semaphore.children[0].classList.toggle("red");
      semaphore.children[1].classList.toggle("yellow");
      }else return
      setTimeout(() => {
        if(!!play) {
        semaphore.children[1].classList.toggle("yellow");
        semaphore.children[2].classList.toggle("green");
        } else return
        setTimeout(() => {
          if(!!play) {
          semaphore.children[2].classList.toggle("green");
          semaphore.children[1].classList.toggle("yellow");
          } else return
          setTimeout(() => {
            if(!!play) {
            semaphore.children[1].classList.toggle("yellow");
            } else return
          }, 1000);
        }, 5000);
      }, 1000);
    }, 5000);
    setTimeout(() => {
      if(!!play) {
        startSempahore(semaphore);
      } else return
    }, 12000);
  } else stopAll(first, second, third, fourth); 
};



function startAll(){
    startVertical(first, third);
    setTimeout(() => {
      startHorizontal(second, fourth);
    }, 6000);
}



const stopAll = (first, second, third, fourth) => {
  first.children[0].classList.remove("red");
  first.children[1].classList.remove("yellow");
  first.children[2].classList.remove("green");
  
  second.children[0].classList.remove("red");
  second.children[1].classList.remove("yellow");
  second.children[2].classList.remove("green");
  
  third.children[0].classList.remove("red");
  third.children[1].classList.remove("yellow");
  third.children[2].classList.remove("green");

  fourth.children[0].classList.remove("red");
  fourth.children[1].classList.remove("yellow");
  fourth.children[2].classList.remove("green");
};


   

document.querySelector(".start").addEventListener("click", ()=> {
    play = true;
    startAll()
})

 // this should turn off all the lights

document.querySelector(".stop").addEventListener("click", ()=> {
    play = false;
    stopAll(first, second, third, fourth);
})
