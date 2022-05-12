function AutoPlay() {}
AutoPlay.prototype.run= function(player){
    player.botonmuted();
    player.play();
}
export default AutoPlay;