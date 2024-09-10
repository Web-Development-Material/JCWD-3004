//bikin playlistnya dulu
//double linked list
class Playlist {
  constructor() {
    this.lagu = []; //sebagai penampung lagu
    this.laguTampung = []; //sebagai penampung lagu apabila backward ataupun nyari ketika foward
  }
  addSong(laguBwang) {
    //disini kita push lagu ke dalam array kemudian kita print setiap lagu masuk
    this.lagu.push(laguBwang);
    console.log("Playing song: ", laguBwang);
  }
  playBackward() {
    this.laguTampung.push(this.lagu[this.lagu.length - 1]); //disini tiap ada lagu yang kita backward, kita save dulu tuh lagu.
    this.lagu.pop(); //kemudian kita pop dari array
    console.log("Playing song", this.lagu[this.lagu.length - 1]); //selanjutnya print lagu terakhir yang ada di array tersebut
  }
  playFoward() {
    this.lagu.push(this.laguTampung[this.laguTampung.length - 1]); //kalao playfoward ambil lagu yang disimpan di laguTampung
    console.log("Playing song", this.lagu[this.lagu.length - 1]); //kemudian di push
  }
}

const myPlaylist = new Playlist();
myPlaylist.addSong("song1.mp3");
myPlaylist.addSong("song2.mp3");
myPlaylist.addSong("song3.mp3");

myPlaylist.playFoward();
myPlaylist.playBackward();
myPlaylist.playBackward();
myPlaylist.playFoward();
