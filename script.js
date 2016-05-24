document.getElementById("playsong").addEventListener("click", function(){
  jukebox.play();
})

document.getElementById("pausesong").addEventListener("click", function(){
  jukebox.pause();
})

document.getElementById("stopsong").addEventListener("click", function(){
  jukebox.stop();
})
document.getElementById("playnext").addEventListener("click", function(){
  jukebox.next();
})

document.getElementById("playprew").addEventListener("click", function(){
  jukebox.prew();
})

function NewSong(title, artist, url) {
	this.title = document.getElementById("tSong").value;
	this.artist = document.getElementById("aSong").value;
	this.url = document.getElementById("uSong").value;
}

function Song(title, artist, url){
 this.title = title;
 this.artist = artist;
 this.url = url;
}

var Jukebox = function(){
	var player = document.getElementById("player")
	var currentNum = 0;

	this.songs = [];

	this.preload = function(song){
  	this.songs.push(song);
  }

  this.load = function(){
   player.setAttribute('src', this.songs[currentNum].url)
   
  }


	this.play = function(){
		document.getElementById('player').play();
	}

	this.pause = function(){
		document.getElementById('player').pause();
  }
  this.stop = function(){
		document.getElementById('player').pause();
		document.getElementById('player').currentTime=0;
	}

  this.next = function(){
		if(currentNum < this.songs.length){
		currentNum++
	  player.setAttribute('src', this.songs[currentNum].url)
	  player.play();
	 }
	}

  this.prew = function(){
  	if(currentNum > 0){
  		currentNum--;
  		player.setAttribute('src', this.songs[currentNum].url)
	    player.play();
  	}
  }

	this.addSong = function(song) {
		console.log(song);
		NewSong.apply(this, arguments)
		song = new NewSong();
		this.songs.push(song);

		currentNum = this.songs.length - 1;


		player.pause();
		player.setAttribute('src', this.songs[currentNum].url)
		player.play();
		console.log(this.songs);
	}

  this.song = function() {
  	document.getElementById(this.song[currentNum]).add
  }
}

var jukebox = new Jukebox();
var song1 = new Song("Time", "Miles", "./mp3/Time.mp3");
var song2 = new Song("Rouge", "Miles", "./mp3/Rouge.mp3");

jukebox.preload(song1);
jukebox.preload(song2);

jukebox.load()











