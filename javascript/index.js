function timeUpdate() {
  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("EST");
    newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = `${newyorkTime.format(
      "h:mm:ss"
    )} <small>${newyorkTime.format("A")}</small>`;
  }
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = `${sydneyTime.format(
      "h:mm:ss"
    )} <small>${sydneyTime.format("A")}</small>`;
  }
  let veniceElement = document.querySelector("#venice");
  if (veniceElement) {
    let veniceDateElement = veniceElement.querySelector(".date");
    let veniceTimeElement = veniceElement.querySelector(".time");
    let veniceTime = moment().tz("Europe/Rome");
    veniceDateElement.innerHTML = veniceTime.format("MMMM Do YYYY");
    veniceTimeElement.innerHTML = `${veniceTime.format(
      "h:mm:ss"
    )} <small>${veniceTime.format("A")}</small>`;
  }
}

function updateCityTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone == "currentLocation") {
    cityTimeZone = moment.tz.guess();
  }
  let citiNameElement = cityTimeZone.replaceAll("_", " ").split("/")[1];

  let citiTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${citiNameElement}</h2>
            <div class="date">${citiTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${citiTime.format(
            "h:mm:ss"
          )}<small>${citiTime.format("A")}</small></div>
        </div>
        <a href='javascript:;' onclick='updateAllCities();'>All Cities</a>
        `;
}
function updateAllCities(event) {
  let citiesElement = document.querySelector("#cities");
  document.getElementById("selectCities").selectedIndex = 0;
  citiesElement.innerHTML = `<div class="city" id="new-york">
          <div>
            <h2>New york</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
        <div class="city" id="sydney">
          <div>
            <h2>Sydney</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
        <div class="city" id="venice">
          <div>
            <h2>Venice</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>`;
}

let cityTimeSearch = document.querySelector("#selectCities");
cityTimeSearch.addEventListener("change", updateCityTime);
timeUpdate();
setInterval(timeUpdate, 1000);
