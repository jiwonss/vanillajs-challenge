const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector(".js-title");

function getTime() {
  const date = new Date();
  // const year = date.getFullYear();
  // const month = date.getMonth();
  // const date = date.getDate();
  // const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  // clockTitle.innerText = `${year}.${month}.${date}.${day}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
