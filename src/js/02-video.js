
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function savedCurrentTime({seconds}) {
  console.log("start", seconds);
  localStorage.setItem(STORAGE_TIME, JSON.stringify(seconds));
  console.log(STORAGE_TIME)
}

const currentTime =localStorage.getItem(STORAGE_TIME) || 0;
player.setCurrentTime(JSON.parse(currentTime));


player.on('timeupdate', throttle(savedCurrentTime));



// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }