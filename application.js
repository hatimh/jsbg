$(document).ready(function(){
   
});

function startgame(){
  $(this).hide();
  $('#balance').text(100);
  $('#status').show();
  $('#result').html('');
  $('#answer').val(""); 
  $('#bet').val(""); 
};

function play(){
  var ans = +$('#answer').val();  
  var balance =+$('#balance').html();
  var change = +$('#bet').val();
  var num = Math.floor((Math.random() * 10) + 1);
  switch (Math.abs(ans - num)) {
    case 0:
      $('#balance').text(balance += change);
      $('#result').html('<p>You win!</p>');
      $('#result').append('<p>Winning number was ' + num + '</p>');
      break;
    case 1:
      $('#result').html('<p>Close, no gain/deductions!</p>');
      $('#result').append('<p>Winning number was ' + num + '</p>');
      break;
    default:
      $('#balance').text(balance -= change);      
      $('#result').html('<p>You lose!</p>');
      if (balance <= 0) {
        $('#result').append('<p>Game Over!</p>');
        $('#status').hide();
        $('#start').show();
      }
      $('#result').append('<p>Winning number was ' + num + '</p>');
      break;    
  };  
};