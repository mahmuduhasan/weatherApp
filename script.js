document.querySelector("#search").addEventListener("click", showWeather);

function showWeather() {
  let xhr = new XMLHttpRequest();
  let cityName = document.querySelector("#city").value;
  if (cityName === "") {
    alert("Please insert city name!");
  } else {
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f319b3534147db533681aa16dc4936d2`,
      true
    );
    xhr.onload = function () {
      if (this.status === 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
        let temp = data.main.temp;
        let celsius = temp - 273;
        document.getElementById('output').innerHTML = `<h2>${Math.floor(celsius)}&deg C</h2>`;
      } else {
        document.getElementById('output').innerHTML = `<h2>No Data Found!</h2>`;
      }
    };
    xhr.send();
  }
}
