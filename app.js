const clock = document.querySelector('.clock');
const dateToday = document.querySelector('.date');
const now = new Date();

const tick = () => {

  

  const hour = now.getHours();
  const min = now.getMinutes();
  const second = now.getSeconds();

  const html = `<span>${hour}</span> : <span>${min}</span> : <span>${second}</span>`;

  // html.style.color = white;

  clock.innerHTML = html;
}

setInterval(tick, 1000)

const dateNow = () => {
  
  const todayDate = dateFns.format(now, 'dddd, MMMM Do YYYY');

  console.log(todayDate);

  const html = `<span> ${todayDate} </span>`

  dateToday.innerHTML = html
};

setInterval(dateNow, 1000)
dateNow();