$(document).ready(function(){

  // Déclaration de mes phrases automatiques
  var phraseBot = ["salut, moi c'est Elena, comment tu t'appelles ?", "Ravie de faire ta connaissace pseudo, comment t'as attéri sur le chat?", "génial"];
  var phraseBot2 = ["hum, intéressant !", "Je vois... Et tu fais quoi dans la vie ? ", "M'en parle pas ! Tu as prévu quelque chose aujourd'hui", "Wahou"];
  var phraseBotFinal = "désolé pseudo, je dois partir, on parle bientôt ! xx"
  var mySentence ="";
  phraseBot[0] = "<p>"+ phraseBot[0] + "</p>";
  $("#histo").append(phraseBot[0]);

  $("#envoi").click(function(){

      if ($("#mySentence").val()!== "") {
        mySentence = "<p>"+ $("#mySentence").val() +"</p>";
        $("#histo").append(mySentence);
        $( "p" ).last().addClass( "user" );
        $("#mySentence").val("");
        $("#histo").animate({
          scrollTop: $("#histo").get(0).scrollHeight}, 1000);
      }
  });

//  Ecrire que si last p contient la class "user", il faut ajouter une phrase du bot
//  après il faudra ajouter un laps de temps
//  ensuite mettre une anim (temps image et bruit)

});
