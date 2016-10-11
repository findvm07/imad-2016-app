var button = document.getElementById('counter');
button.onclick = function () {
   
   var request = new XMLHttpRequest();
   
   request.onreadystatechange = function (){
    if(request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    
   };    
  request.open('GET', 'http://findvm07.imad.hasura-app.io/counter', true);
  request.send(null);
};

var nameInput = getElementById('name');
var name = nameInput.value;
var submit = getElementById('submit_btn');
submit.onclick = function() {
  var names = request.responseText;
  var list = '';
  for(i=0; i<names.length; i++) {
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
  
};
request.open('GET', 'http://findvm07.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);