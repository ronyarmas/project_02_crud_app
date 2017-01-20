console.log('testing 123');

var button = document.querySelector('.button');
var body = document.querySelector('body');

function makeNote() {
  var template = $('template').html();
  var reading = $('input').val();
  var render = Handlebars.compile(template);
  var html = render({reading: reading});
  $(".container").append(html);
  $.post('/insert', {reading: reading}, function(res){
    noteCount();
  })
    // appendTime();
}


var remove = function() {

}

//button for remove

// function appendTime() {
//     var date = Date();
//     var time = $('.time');
//     var totalNotes = $('.note');
//     // console.log(totalNotes);
//     // totalNotes.forEach(function(evt) {
//     //   time.append(date);
//     // })
// }


button.addEventListener("click", makeNote);

var noteCount = function() {
  var totalNotes = document.querySelectorAll('.note').length;
  document.getElementById('notes').innerHTML = totalNotes;
}

var remSpan = function () {
  this.parentNode.remove();
  noteCount();
}


