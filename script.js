function displayDate() {
  fetch("http://localhost:3000/year")
    .then((response) => response.json())
    .then((datatoto) => {
      console.log(datatoto);
      document.querySelector("#year").textContent = datatoto.year
    });
}

displayDate();
