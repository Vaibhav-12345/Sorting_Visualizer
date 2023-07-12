let arr = [10, 40, 30, 20, 10, 60, 80, 5];
let parentDiv = document.getElementById("barsContainer");
let btn = document.getElementsByClassName("startbtn");

let i = 0;
arr.forEach((element) => {
  let innerdiv = document.createElement("div");

  innerdiv.style.height = element * 5 + "px";
  // random backgroundColor
  innerdiv.style.backgroundColor ="#" + Math.floor(Math.random() * 16777215).toString(16);
  // innerdiv.style.backgroundColor = "red";

  innerdiv.setAttribute("id", "element" + i);
  i++;
  innerdiv.classList.add("bar");
  parentDiv.appendChild(innerdiv);
});

btn[0].addEventListener("click", () => myfunction(arr));

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function myfunction(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      await sleep(500);

      if (arr[j] > arr[j + 1]) {
        swapNumber(arr, j);
        swapColorHeight(j);
      }
    }
  }
}

function swapNumber(arr, j) {
  let temp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp;
}

function swapColorHeight(j) {
  let a = "element" + j;
  let b = "element" + (j + 1);

  let e1 = document.getElementById(a);
  let e2 = document.getElementById(b);

  let bg1 = e1.style.backgroundColor;
  let bg2 = e2.style.backgroundColor;

  let h1 = e1.style.height;
  let h2 = e2.style.height;

  e1.style.backgroundColor = bg2;
  e2.style.backgroundColor = bg1;

  e1.style.height = h2;
  e2.style.height = h1;
}