const notificacion = (correo, nombre, telefono, mensaje) => {
  document.getElementById(`email`).value =
    document.getElementById(correo).value;
  document.getElementById(`name`).value = document.getElementById(nombre).value;
  document.getElementById(`message`).value = mensaje;
  document.getElementById(`phone`).value =
    document.getElementById(telefono).value;
  document.getElementById("btncorreo").click();
  document.getElementById(`email`).value = "";
  document.getElementById(`name`).value = "";
  document.getElementById(`message`).value = "";
  document.getElementById(`phone`).value = "";
};
