$(document).ready(function(){

  // Déclaration de mes phrases automatiques
  var phraseBot = ["salut, moi c'est Elena, comment tu t'appelles ?", "Ravie de faire ta connaissace pseudo, comment t'as attéri sur le chat?", "Je vois... Et tu fais quoi dans la vie ? ", "génial", "hum, intéressant !", "M'en parle pas ! Tu as prévu quelque chose aujourd'hui?", "Wahou, c'est top", "désolé pseudo, je dois partir, on parle bientôt ! xx"];
  var indice = 0;
  var mySentence ="";
  var dernierP;


  phraseBot[indice] = "<p>"+ phraseBot[indice] + "</p>";
  $("#histo").append(phraseBot[indice]);
  indice++;

  $("#envoi").click(function(){

      if ($("#mySentence").val()!== "") {
        mySentence = "<p>"+ $("#mySentence").val() +"</p>";
        $("#histo").append(mySentence);
        $( "p" ).last().addClass( "user" );
        $("#mySentence").val("");
        $("#histo").animate({
          scrollTop: $("#histo").get(0).scrollHeight}, 1000);
      }
      dernierP = $("#histo p:last-of-type").attr("class");

      if (dernierP == "user") {
        alert("bien joué");
        phraseBot[indice] = "<p>"+ phraseBot[indice] + "</p>";
        $("#histo").append(phraseBot[indice]);
        indice++;

      }
  });

//  Ecrire que si last p contient la class "user", il faut ajouter une phrase du bot
//  après il faudra ajouter un laps de temps
//  ensuite mettre une anim (temps image et bruit)

});
