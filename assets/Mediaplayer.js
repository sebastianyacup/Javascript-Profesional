      function MediaPlayer(config){
        this.media  = config.el
        this.plugins = config.plugins ||  [];

        this._initPlugins();
      }
      MediaPlayer.prototype._initPlugins = function(){
          this.plugins.forEach(plugins => {
              plugins.run(this);
          });
      };
      MediaPlayer.prototype.play= function(){
        this.media.play();
      };
      MediaPlayer.prototype.pause=function(){
       this.media.pause();
      };
      MediaPlayer.prototype.botonmuted= function(){
        this.media.muted = !this.media.muted
      }
export default MediaPlayer;