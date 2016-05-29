document.addEventListener("DOMContentLoaded", function() {


var parseNote = function(input){
  var notes = input.split("*");

  if (notes[1]) {
    var newNotes = {
      pitch: notes[0],
      beats: notes[1]
    };
  }
  else {
    var newNotes = {
      pitch: notes[0],
      beats: 1
    };
  }

return (newNotes)
};

// PARSE SONG FUNCTION

var parseSong = function(string){
  var array = []
  var notes = string.split(" ");

  for (var i = 0; i < notes.length; i++){
    array.push(parseNote(notes[i]));
  }
  return(array)
}

// console.log(parseSong("C Ab*2"))
var input = prompt("Give me a song string: ")
var song = parseSong(input)

// var notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
// Play the song at 400 beats per minute.

playSong(song, 400);

});
