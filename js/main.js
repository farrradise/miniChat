$(document).ready(function(){

  // Déclaration de mes phrases automatiques
  var phraseBot = ["salut, moi c'est Elena, comment tu t'appelles ?", "Ravie de faire ta connaissace pseudo, comment t'as attéri sur le chat?", "génial"];
  var phraseBot2 = ["hum, intéressant !", "Je vois... Et tu fais quoi dans la vie ? ", "M'en parle pas ! Tu as prévu quelque chose aujourd'hui", "Wahou"];
  var phraseBotFinal = "désolé pseudo, je dois partir, on parle bientôt ! xx"
  var mySentence ="";
  phraseBot[0] = "<p>"+ phraseBot[0] + "</p>";
$("#histo").append(phraseBot[0]);

// mettre un bruit, un temps et une image à l'écriture d'élena
//

  $("#envoi").click(function(){
      mySentence = "<p>"+ $("#mySentence").val() +"</p>";
      $("#histo").append(mySentence);
      $('#histo').animate({
       scrollTop: $('#histo').get(0).scrollHeight}, 1000);
  });

});

$(document).ready(function(){
  // $('#histo').animate({
  // var myDiv = $("#histo");
  // myDiv[0].scrollHeight;
    // $("#histo").prop("scrollHeight");
  // scrollTop: $('#histo').get(0).scrollHeight}, 2000);
});
