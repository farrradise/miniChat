$(document).ready(function(){

  // Déclaration de mes phrases automatiques
  var phraseBot = ["salut, moi c'est Elena, comment tu t'appelles ?", "Ravie de faire ta connaissace pseudo, comment t'as atteri sur le chat?", "Je vois... Et tu fais quoi dans la vie ? ", "hum, intéressant ! ça te plait ?", "génial, moi je suis bot pro", "M'en parle pas ! Tu as prévu quelque chose aujourd'hui?", "Wahou, c'est top !", "désolé pseudo, je dois partir, on parle bientôt ! xx"];
  var indice = 0;
  var mySentence ="";
  var dernierP;
  var name="";

  $("#writting").css("display", "none");
  phraseBot[indice] = "<p>"+ phraseBot[indice] + "</p>";
  $("#histo").append(phraseBot[indice]);
  indice++;

  $("#envoi").click(function(){ laFonction();});
  $('input').bind('keypress', function(key) {
    if (key.which == 13) {
      laFonction();
    }
  });

  function laFonction() {
    if (name == "") {
      name = $("#mySentence").val();
      for (i=0; i<phraseBot.length; i++) {
        phraseBot[i] = phraseBot[i].replace(/pseudo/gi, name);
      }
    }

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
      setTimeout(function() {$("#writting").css("display", "block");}, 500);
      // $("#writting").css("display", "block");
      setTimeout(reponseBot,3000);
    }
  }

function reponseBot() {
  if (indice!== phraseBot.length) {
    $("#writting").css("display", "none");
    phraseBot[indice] = "<p>"+ phraseBot[indice] + "</p>";
    $("#histo").append(phraseBot[indice]);
    indice++;

  }
}

});
