function updatetime() {
  let LAElement = document.querySelector("#LA");
  if (LAElement) {
    let LAdateElement = LAElement.querySelector(".date");
    let LAtimeElement = LAElement.querySelector(".time");
    let LAtime = moment().tz("America/Los_Angeles");
    LAdateElement.innerHTML = LAtime.format("MMMM Do YYYY");
    LAtimeElement.innerHTML = LAtime.format("h:mm:ss [<small>]A[</small>]");
  }

  let SydneyElement = document.querySelector("#Sydney");
  if (SydneyElement) {
    let SydneydateElement = SydneyElement.querySelector(".date");
    let SydneytimeElement = SydneyElement.querySelector(".time");
    let Sydneytime = moment().tz("Australia/Sydney");
    SydneydateElement.innerHTML = Sydneytime.format("MMMM Do YYYY");
    SydneytimeElement.innerHTML = Sydneytime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let TokyoElement = document.querySelector("#Tokyo");
  if (TokyoElement) {
    let TokyodateElement = TokyoElement.querySelector(".date");
    let TokyotimeElement = TokyoElement.querySelector(".time");
    let Tokyotime = moment().tz("Asia/Tokyo");
    TokyodateElement.innerHTML = Tokyotime.format("MMMM Do YYYY");
    TokyotimeElement.innerHTML = Tokyotime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updatetime();
setInterval(updatetime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
