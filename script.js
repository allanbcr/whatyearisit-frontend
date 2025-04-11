function displayDate() {
  fetch("https://whatyearisit-backend-theta-three.vercel.app/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#year").textContent = data.year;
    });
}

displayDate();
