
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function savedCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const throttleSavedCurrentime = throttle(savedCurrentTime, 1000);
player.on('timeupdate', throttleSavedCurrentime);

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);