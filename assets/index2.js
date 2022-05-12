import MediaPlayer from './Mediaplayer.js';
import AutoPlay from './plugins/AutoPlay.js'
      const video = document.querySelector("video");
      const button = document.querySelector("button");      
      const buttonm= document.querySelector("#sonidoboton");
      const player = new MediaPlayer({el: video, plugins:  [//new AutoPlay()
      ]});

      buttonm.onclick = () => player.botonmuted();

      button.onclick = () => player.play();
      button.onclick = function () {(player.media.paused)
      ? player.play()
      : player.pause()
      }