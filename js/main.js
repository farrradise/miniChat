$(document).ready(function(){

  // Déclaration de mes phrases automatiques
  var phraseBot = ["salut, moi c'est Elena, comment tu t'appelles ?", "Ravie de faire ta connaissace pseudo, comment t'as attéri sur le chat?", "génial"];
  var phraseBot2 = ["hum, intéressant !", "Je vois... Et tu fais quoi dans la vie ? ", "M'en parle pas ! Tu as prévu quelque chose aujourd'hui", "Wahou"];
  var phraseBotFinal = "désolé pseudo, je dois partir, on parle bientôt ! xx"

  phraseBot[0] = "<p>"+ phraseBot[0] + "</p>";
$("#histo").append(phraseBot[0]);
// mettre un bruit, un temps et une image à l'écriture d'élena
//

  $("#envoi").click(function(){
      var mySentence = "<p>"+ $("#mySentence").val() +"</p>";
      $("#histo").append(mySentence);
  });

});
