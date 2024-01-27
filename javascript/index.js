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
}

function updateCityTime(event) {
  let cityTImeZone = event.target.value;
  let citiNameElement = cityTImeZone.split("/")[1];
  let citiTime = moment().tz(cityTImeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${citiNameElement}</h2>
            <div class="date">${citiTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${citiTime.format(
            "h:mm:ss"
          )}<small>${citiTime.format("A")}</small></div>
        </div>`;
}

let cityTimeSearch = document.querySelector("#selectCities");
cityTimeSearch.addEventListener("change", updateCityTime);
timeUpdate();
setInterval(timeUpdate, 1000);
