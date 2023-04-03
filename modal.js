$(document).ready(function () {
    /*Almacenar como variable la URL (valor del atributo src del elemento iframe) del video*/
    var url = $("#videocuentos").attr("src");
  
    /*Valor vacío para el atributo src de iframe cuando se cierra la ventana modal, con lo cual se detiene la reproducción del video*/
    $("#myModal").on("hide.bs.modal", function () {
      $("#videocuentos").attr("src", "");
    });
  
    /*Volver a asignar la url almaceneda*/
    $("#myModal").on("show.bs.modal", function () {
      $("#videocuentos").attr("src", url);
    });
  });
  