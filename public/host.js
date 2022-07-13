const socket = io()
const active = document.querySelector('.js-active')
const buzzList = document.querySelector('.js-buzzes')
const clear = document.querySelector('.js-clear')
document.body.style.backgroundColor = "white";


var cleaned = false;

socket.on('active', (numberActive) => {
  active.innerText = `${numberActive} joined`
})

socket.on('buzzes', (buzzes) => {
  buzzList.innerHTML = buzzes
    .map(buzz => {
      const p = buzz.split('-')
      return { name: p[0], team: p[1] }
    })
    .map(user => `<li>${user.name} on Team ${user.team}</li>`)
    .join('')
    // const element = document.getElementsByClassName("body")
    //element[0].style["background-color"] = "yellow";


    if (cleaned === false){
    document.body.style.backgroundColor = "red";
    }
    // This seems to be needed, but I'm very confused
    cleaned = false;

})



clear.addEventListener('click', () => {
  document.body.style.backgroundColor = "white";
  cleaned = true;
  socket.emit('clear')
})
