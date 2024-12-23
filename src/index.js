function updatetime() {
  let LAElement = document.querySelector("#LA");
  let LAdateElement = LAElement.querySelector(".date");
  let LAtimeElement = LAElement.querySelector(".time");
  let LAtime = moment().tz("America/Los_Angeles");
  LAdateElement.innerHTML = LAtime.format("MMMM Do YYYY");
  LAtimeElement.innerHTML = LAtime.format("h:mm:ss [<small>]A[</small>]");

  let SydneyElement = document.querySelector("#Sydney");
  let SydneydateElement = SydneyElement.querySelector(".date");
  let SydneytimeElement = SydneyElement.querySelector(".time");
  let Sydneytime = moment().tz("Australia/Sydney");
  SydneydateElement.innerHTML = Sydneytime.format("MMMM Do YYYY");
  SydneytimeElement.innerHTML = Sydneytime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let TokyoElement = document.querySelector("#Tokyo");
  let TokyodateElement = TokyoElement.querySelector(".date");
  let TokyotimeElement = TokyoElement.querySelector(".time");
  let Tokyotime = moment().tz("Asia/Tokyo");
  TokyodateElement.innerHTML = Tokyotime.format("MMMM Do YYYY");
  TokyotimeElement.innerHTML = Tokyotime.format("h:mm:ss [<small>]A[</small>]");
}

updatetime();
setInterval(updatetime, 1000);
