function timeUpdate() {
  let newyorkElement = document.querySelector("#new-york");

  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
  let newyorkTime = moment().tz("EST");
  newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
  newyorkTimeElement.innerHTML = `${newyorkTime.format(
    "h:mm:ss"
  )} <small>${newyorkTime.format("A")}</small>`;
  let sydneyElement = document.querySelector("#sydney");

  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss"
  )} <small>${sydneyTime.format("A")}</small>`;
}
timeUpdate();
setInterval(timeUpdate, 1000);
