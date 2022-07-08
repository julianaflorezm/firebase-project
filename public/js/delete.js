const eliminar = async (id) => {
  try {
    await db
      .collection("usuarios")
      .doc(id)
      .delete();
    alert('Usuario eliminado');
    notificacion(`correo_${id}`,`nombre_${id}`,`telefono_${id}`,"Has eliminado tu hoja de vida en Compucamello con éxito. Esperamos tenerte pronto nuevamente.");
    /*document.getElementById(`email`).value = document.getElementById(
      `correo_${id}`
    ).value;
    document.getElementById(`name`).value = document.getElementById(
      `nombre_${id}`
    ).value;
    document.getElementById(`message`).value =
      "Has eliminado tu hoja de vida en Compucamello con éxito. Esperamos tenerte pronto nuevamente.";
    document.getElementById(`phone`).value = document.getElementById(
      `telefono_${id}`
    ).value;
    document.getElementById('btncorreo').click();*/
    Leer();
  } catch (error) {
      console.log(error);
      alert('Error al eliminar el usuario');
  }
};
