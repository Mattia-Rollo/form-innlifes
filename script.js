// funzione che conta caratteri nel textarea
function countChar(val) {
  var len = val.value.length;
  //   console.log(len);

  if (len >= 600) {
    val.value = val.value.substring(0, 600);
  } else {
    $("#charNum").text(600 - len);
    $("#charNum-text").text("Caratteri rimanenti");
  }
}

$(document).ready(function () {
  let step = 1;
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
      default:
        break;
    }
  }

  $(".slide:not(:nth(3))").hide();
  $("#prev").hide();

  // inizializzo la slide corrrente
  var current;

  $("#prev").click(function () {
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
    //ora la slide precedente diventa quella corrente
    current = $(".slide:visible");

    //seleziono la slide successiva per poi togliere lo sfondo blu sui numeri dei vari step
    var next = current.next(".slide");

    // tolgo lo sfondo blu ai numeri
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

    //se non ci sono slide prima di quella corrente nascondo il pulsante indietro
    if (current.prev(".slide").length === 0) {
      $("#prev").hide();
    }

    //se ci sono slide successive a quella corrente mostro il pulsante next
    if (current.next(".slide").length !== 0) {
      $("#next").show();
    }
  });

  $("#step-icon-mobile").text(step);

  $("#next").click(function () {
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
    step++;

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

    // non mi ricordo cosa fanno queste funzioni ma funzionano
    if (next.length === 0) {
      next = $(".slide:first");

      $("#prev").hide();
    }

    if (next.prev(".slide").length !== 0) {
      $("#prev").show();
    }

    if (next.next(".slide").length === 0) {
      $("#next").hide();
    }
  });

  //   funzione per l'aggiunta di un nuovo founder al click del pulsante
  let id_founder = 1;
  const btn_aggiungi = $("#btn_aggiungi");
  $("#btn_aggiungi").click(function () {
    console.log(btn_aggiungi);

    let template = `
    <h3>id founder: ${id_founder}</h3>
    <!-- nome e cognome  -->
      <div class="row">
        <div class="col">
          <!-- via -->
          <label for="nome_founder" class="form-label">Nome*</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" nome="nome_founder_${id_founder}" placeholder="Nome" />
          </div>
        </div>
        <div class="col">
          <!-- città -->
          <label for="cognome_founder" class="form-label">Cognome*</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" nome="cognome_founder_${id_founder}" placeholder="Cognome" />
          </div>
        </div>
      </div>

      <!-- nome di telefono email  -->
      <div class="row">
        <div class="col">
          <label for="tel_founder" class="form-label">
            Numero di telefono*
          </label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" name="tel_founder_${id_founder}" placeholder="Numero" />
          </div>
        </div>

        <div class="col">
          <label for="email_founder" class="form-label">Email *</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" name="email_founder_${id_founder}" placeholder="CAP" />
          </div>
        </div>
      </div>`;
    id_founder++;

    $(template).insertBefore("#btn_aggiungi");
  });
});
