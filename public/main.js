console.log('testing 123');


var button = document.querySelector('.button');
var body = document.querySelector('body');

var makeNote = function() {
    var div = document.createElement('div');
    body.appendChild(div);
    div.setAttribute('class', 'sheet note');
    document.querySelector('.note').classList.add('sheet');
    var span = document.createElement('span');
    span.setAttribute('class','remove');
    span.textContent = 'X';
    span.addEventListener('click', remSpan);
    div.appendChild(span);
    var p = document.createElement('p');
    p.setAttribute('contenteditable', 'true');
    p.textContent = 'enter text';
    div.appendChild(p);

    // var d = new date();
    // var date = document.createElement('h4');
    // date.setAttribute('id', 'date');
    // date.textContent = d;
    // div.appendChild(date);

    noteCount();
}

button.addEventListener("click", makeNote);

var noteCount = function() {
  var totalNotes = document.querySelectorAll('.note').length;
  document.getElementById('notes').innerHTML = totalNotes;
}

var remSpan = function () {
  this.parentNode.remove();
  noteCount();
}



