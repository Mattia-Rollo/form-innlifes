(function ($) {
  "use strict";

// funzione che conta caratteri nel textarea
// function countChar(val) {
//   var len = val.value.length;
//   //   console.log(len);

//   if (len >= 600) {
//     val.value = val.value.substring(0, 600);
//   } else {
//     $("#charNum").text(600 - len);
//     $("#charNum-text").text("Caratteri rimanenti");
//   }
// }

$(document).ready(function () {
  let step = 1;
  var current;
  let submit = false;
  $("#step-icon-mobile").text(step);

  $("html, body").scrollTop(0);

  function setHeaderMobileMenu() {
    switch (step) {
      case 1:
        $("#step-title-mobile").text("Informazioni");
        break;
      case 2:
        $("#step-title-mobile").text("Headquartes");
        break;
      case 3:
        $("#step-title-mobile").text("Founders");
        break;
      case 4:
        $("#step-title-mobile").text("Other info");
        break;
      case 5:
        $("#step-title-mobile").text("Documents");
        break;
      case 6:
        $("#step-title-mobile").text("Conferma");
        break;
      default:
        break;
    }
  }

  $(".slide:not(:nth(0))").hide();
  $("#prev").hide();

  $("#prev").click(handleButtonClickPrev);
  //pulsante indietro slide 5
  $("#prev-last").click(handleButtonClickPrev);

  // funzione per gestire il bottone INDIETRO
  function handleButtonClickPrev() {
    step--;
    $("#step-icon-mobile").text(step);

    setHeaderMobileMenu();

    //torna in alto al click del pulsante avanti

    //seleziono la slide visibile
    current = $(".slide:visible");

    //seleziono la slide precedente <--
    var prev = current.prev(".slide");

    // nascondo quella visibile
    current.hide();
    //mostro quella precedente <--
    prev.fadeIn("slow");

    $("html, body").scrollTop(0);
    //rimposto la slide visibile con quella corrente
    current = $(".slide:visible");

    //seleziono la slide successiva per poi togliere lo sfondo blu sui numeri dei vari step
    var next = current.next(".slide");
    //cambio il colore dei vari step solo se il tasto invio non è stato schiacciato almeno una volta
    if (!submit) {
      // tolgo lo sfondo blu ai numeri
      if (current.index() == 3) {
        $(".step-icon:nth(4)").removeClass("bg-blue-mr");
        $(".step-icon:nth(4)").addClass("bg-light-grey");
        $(".bar:nth(3)").removeClass("bg-blue-mr");
        $(".bar:nth(3)").addClass("bg-light-grey");
      }
      if (current.index() == 2) {
        $(".step-icon:nth(3)").removeClass("bg-blue-mr");
        $(".step-icon:nth(3)").addClass("bg-light-grey");
        $(".bar:nth(2)").removeClass("bg-blue-mr");
        $(".bar:nth(2)").addClass("bg-light-grey");
      }
      if (current.index() == 1) {
        $(".step-icon:nth(2)").removeClass("bg-blue-mr");
        $(".step-icon:nth(2)").addClass("bg-light-grey");
        $(".bar:nth(1)").removeClass("bg-blue-mr");
        $(".bar:nth(1)").addClass("bg-light-grey");
      }
      if (current.index() == 0) {
        $(".step-icon:nth(1)").removeClass("bg-blue-mr");
        $(".step-icon:nth(1)").addClass("bg-light-grey");
        $(".bar:nth(0)").removeClass("bg-blue-mr");
        $(".bar:nth(0)").addClass("bg-light-grey");
      }
    }
    //nascondo il pulsante indietro alla prima slide
    if (current.index() === 0) {
      $("#prev").hide();
    }else{
      $("#prev").show();
      //mostro il pulsante avanti se è nascosto
      $("#next").show();
    }

  }

  $("#next").click(handleButtonClickNext);
  $("#submit").on("click", function (event) {

  event.preventDefault();
  // console.log($("#myForm"));
  // confirm("invio");

  $("#myForm").submit();
    
    
    

    // $("#myForm").validate({
    //   // Personalizza i messaggi di errore
    //   errorPlacement: function (error, element) {
    //     // Non fare nulla
    //   },
    // });

    // if ($("#myForm").valid()) {
    //   // console.log("inviato");
    //   handleButtonClickNext();
    //   setTimeout(function () {
    //     $("#myForm").submit();
    //   }, 2000);
    // } else {
    //   $(".slide").hide();
    //   $(".slide:first").show();
    //   $("#next").show();
    //   step = 1;
    //   submit = true;
    //   $("form").addClass("was-validated");
    // }

    // Swal.fire({
    //   title: "Sicuro di voler inviare i dati?",
    //   text: "",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#00528c",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Confermo",
    //   cancelButtonText: "No, aspetta!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     // Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //     handleButtonClickNext();
    //     setTimeout(function () {
    //       console.log("invio");
    //       $("#myForm").submit();
    //     }, 2000);
    //   }
    // });
  });

  // funzione per gestire bottone AVANTI
  function handleButtonClickNext() {
    step++;

    //seleziono slide visibile / corrente
    current = $(".slide:visible");
    //seleziono quella successiva
    var next = current.next(".slide");

    //switcho
    current.hide();
    next.fadeIn("slow");
    $("html, body").scrollTop(0);

    //riseleziono quella visibile dopo che è cambiata
    current = $(".slide:visible");

    // console.log(current);

    $("#step-icon-mobile").text(step);

    setHeaderMobileMenu();
    // applico lo sfondo blu ai numeri step
    if (current.index() == 1) {
      //   console.log(current.index());

      $(".bar:nth(0)").removeClass("bg-light-grey");
      $(".bar:nth(0)").addClass("bg-blue-mr");
      $(".step-icon:nth(1)").removeClass("bg-light-grey");
      $(".step-icon:nth(1)").addClass("bg-blue-mr");
    }
    if (current.index() == 2) {
      $(".bar:nth(1)").removeClass("bg-light-grey");
      $(".bar:nth(1)").addClass("bg-blue-mr");
      $(".step-icon:nth(2)").removeClass("bg-light-grey");
      $(".step-icon:nth(2)").addClass("bg-blue-mr");
    }
    if (current.index() == 3) {
      $(".step-icon:nth(3)").removeClass("bg-light-grey");
      $(".step-icon:nth(3)").addClass("bg-blue-mr");
      $(".bar:nth(2)").removeClass("bg-light-grey");
      $(".bar:nth(2)").addClass("bg-blue-mr");
    }
    if (current.index() == 4) {
      $(".step-icon:nth(4)").removeClass("bg-light-grey");
      $(".step-icon:nth(4)").addClass("bg-blue-mr");
      $(".bar:nth(3)").removeClass("bg-light-grey");
      $(".bar:nth(3)").addClass("bg-blue-mr");
    }
    if (current.index() == 5) {
      $(".step-icon:nth(5)").removeClass("bg-light-grey");
      $(".step-icon:nth(5)").addClass("bg-blue-mr");
      $(".bar:nth(4)").removeClass("bg-light-grey");
      $(".bar:nth(4)").addClass("bg-blue-mr");
    }
    if (current.index() == 6) {
      $("#header-mobile").hide();
    }

    //nascondo i pulsanti nelle seguenti condizioni
    if (current.index() === 0) {
      $("#prev").hide();
    }

    if (current.index() !== 0) {
      $("#prev").show();
    }

    if (next.next(".slide").length === 0) {
      $("#next").hide();
    }
    if (current.index() >= 4) {
      $("#next").hide();
      $("#prev").hide();
    }
  }

  // variabili e funzioni per l'aggiunta di un nuovo founder al click del pulsante
  let id_founder = 2;
  const btn_aggiungi = $("#btn_aggiungi");
  const btn_rimuovi = $("#btn_rimuovi");

  btn_rimuovi.hide();

  $("#btn_aggiungi").click(function () {
    console.log(btn_aggiungi);

    let template = `
    <div class="founder row"><div class="col">
    <h3 class="text-center p-3">Founder aggiungivo ${id_founder}</h3>
    <!-- nome e cognome  -->
      <div class="row">
        <div class="col">
          <!-- via -->
          <label for="nome_founder_${id_founder}" class="form-label fw-bold">Nome*</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" nome="nome_founder_${id_founder}" placeholder="Nome" />
          </div>
        </div>
        <div class="col">
          <!-- città -->
          <label for="cognome_founder" class="form-label fw-bold">Cognome*</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" nome="cognome_founder_${id_founder}" placeholder="Cognome" />
          </div>
        </div>
      </div>

      <!-- nome di telefono email  -->
      <div class="row">
        <div class="col">
          <label for="tel_founder" class="form-label fw-bold">
            Numero di telefono*
          </label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" name="tel_founder_${id_founder}" placeholder="Numero" />
          </div>
        </div>

        <div class="col">
          <label for="email_founder" class="form-label fw-bold">Email *</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" name="email_founder_${id_founder}" placeholder="CAP" />
          </div>
        </div>
      </div>
      </div></div>`;
    $(template).hide().insertBefore("#aggiungi_rimuovi").fadeIn();
    btn_rimuovi.show();
    id_founder++;
  });

  // let founder = $("#founder");

  btn_rimuovi.click(function () {
    let div = $(".founder:last").slideUp();
    div.remove();
    id_founder--;
    $(".founder").length == 1 ? btn_rimuovi.hide() : null;
  });
});

})(jQuery);