document.querySelector(".first").addEventListener("click", widthFirstModify);
document.querySelector(".second").addEventListener("click", widthSecondModify);
document.querySelector(".third").addEventListener("click", widthThirdModify);
document.querySelector(".fourth").addEventListener("click", widthFourthModify);
document.querySelector(".fifth").addEventListener("click", widthFifthModify);
document.querySelector(".sixth").addEventListener("click", widthSixthModify);

document.querySelector(".btn").addEventListener("click", allAtOnce);

class Starter {
  constructor(start, length, figure) {
    this.widthMax = length;
    this.widthCounter = start;
    this.rectFirst = document.querySelector(`.${figure}`);
    this.rectWrap = document.querySelector(`.${figure}-wrap`);
    this.smothIncrement();
    this.widthIncrement = this.widthIncrement.bind(this);
  }
  
  widthIncrement() {
    this.rectangleWidth = this.rectFirst.getBoundingClientRect().width;
    if (this.rectangleWidth <= this.widthMax) {
      this.rectangleWidth = this.rectangleWidth + this.widthCounter;
      this.rectFirst.style.width = `${this.rectangleWidth}px`;
      this.widthCounter++;
    } else if (this.rectangleWidth > 623) {
      clearInterval(this.startWidthIncrement);
      if (this.rectWrap.classList.contains("to-right")) {
        this.rectWrap.classList.remove("to-right");
      } else {
        this.rectWrap.classList.add("to-right");
      }
      this.smothDecrement();
    }
  }
  
  smothIncrement() {
    this.startWidthIncrement = setInterval(() => this.widthIncrement(), 35);
  }
  
  widthDecrement() {
    if (this.rectangleWidth > 100) {
      this.rectangleWidth = this.rectangleWidth - this.widthCounter;
      this.rectFirst.style.width = `${this.rectangleWidth}px`;
      this.widthCounter--;
      this.smothDecrement();
    } else {
      return this.rectangleWidth;
    }
  }
  
  smothDecrement() {
    this.startWidthDecrement = setInterval(() => this.widthDecrement(), 35);
  }
}


function widthFirstModify() {
  let firstWidth = new Starter(1, 623, "first");
}

function widthSecondModify() {
  let secondWidth = new Starter(1, 623, "second");
}

function widthThirdModify() {
  let thirdWidth = new Starter(1, 623, "third");
}

function widthFourthModify() {
  let fourthWidth = new Starter(1, 623, "fourth");
}

function widthFifthModify() {
  let fifthWidth = new Starter(1, 623, "fifth");
}

function widthSixthModify() {
  let sixthWidth = new Starter(1, 623, "sixth");
}

function allAtOnce() {
  setTimeout(() => widthFirstModify(), 1000);
  setTimeout(() => widthSecondModify(), 4000);
  setTimeout(() => widthThirdModify(), 3000);
  setTimeout(() => widthFourthModify(), 1000);
  setTimeout(() => widthFifthModify(), 6000);
  setTimeout(() => widthSixthModify(), 2000);
}