const clock = document.querySelector('.clock')


const tick = () => {

  const now = new Date();

  const hour = now.getHours();
  const min = now.getMinutes();
  const second = now.getSeconds();

  const html = `<span>${hour}</span> : <span>${min}</span> : <span>${second}</span>`;

  // html.style.color = white;

  clock.innerHTML = html;
}

setInterval(tick, 1000)