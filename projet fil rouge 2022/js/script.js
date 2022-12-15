function change() {
    var filterimg = document.querySelectorAll(".boss-img");
    const elements = document.querySelectorAll(".sdld");
    for (const element of elements) {
      element.classList.toggle("transformed-state");
      element.classList.toggle("filteredstate");
    }
  }
  
  const changeButton = document.querySelector("#change");
  changeButton.addEventListener("click", change);

// ----------------------------------------------------------

function change1() {
    var filterimg = document.querySelectorAll(".boss-img");
    const elements = document.querySelectorAll(".mlp");
    for (const element of elements) {
      element.classList.toggle("transformed-state");
      element.classList.toggle("filteredstate");
    }
  }
  
  const changeButton1 = document.querySelector("#change1");
  changeButton1.addEventListener("click", change1);

//   ======================================================

function change2() {
    var filterimg = document.querySelectorAll(".boss-img");
    const elements = document.querySelectorAll(".cdi");
    for (const element of elements) {
      element.classList.toggle("transformed-state");
      element.classList.toggle("filteredstate");
    }
  }
  
  const changeButton2 = document.querySelector("#change2");
  changeButton2.addEventListener("click", change2);

//   =======================================================
function change3() {
    var filterimg = document.querySelectorAll(".boss-img");
    const elements = document.querySelectorAll(".nel");
    for (const element of elements) {
      element.classList.toggle("transformed-state");
      element.classList.toggle("filteredstate");
    }
  }
  
  const changeButton3 = document.querySelector("#change3");
  changeButton3.addEventListener("click", change3);
  