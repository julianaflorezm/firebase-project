const actualizar = (id) => {
  document.getElementById(`cedula_${id}`).readOnly = false;
  document.getElementById(`nombre_${id}`).readOnly = false;
  document.getElementById(`apellido_${id}`).readOnly = false;
  document.getElementById(`correo_${id}`).readOnly = false;
  document.getElementById(`telefono_${id}`).readOnly = false;
  document.getElementById(`actualizar_${id}`).innerHTML = `save`;
  document
    .getElementById(`actualizar_${id}`)
    .setAttribute("onclick", `guardarCambios('${id}');`);
  document.getElementById(`actualizar_${id}`).title = `Guardar cambios`;
};

const guardarCambios = async (id) => {
  const sfDocRef = db.collection("usuarios").doc(id);
  try {
    await db.runTransaction((transaction) => {
      return transaction.get(sfDocRef).then((sfDoc) => {
        if (!sfDoc.exists) {
          alert("usuario no existe");
        }
        transaction.update(sfDocRef, {
          cedula: document.getElementById(`cedula_${id}`).value,
          nombre: document.getElementById(`nombre_${id}`).value,
          apellido: document.getElementById(`apellido_${id}`).value,
          correo: document.getElementById(`correo_${id}`).value,
          telefono: document.getElementById(`telefono_${id}`).value,
        });
        return "updated";
      });
    });
    alert("Usuario actualizado");
    notificacion(`correo_${id}`,`nombre_${id}`,`telefono_${id}`,"Has actualizado tu hoja de vida en Compucamello con éxito.");
    /*document.getElementById(`email`).value = document.getElementById(
      `correo_${id}`
    ).value;
    document.getElementById(`name`).value = document.getElementById(
      `nombre_${id}`
    ).value;
    document.getElementById(`message`).value =
      "Has actualizado tu hoja de vida en Compucamello con éxito.";
    document.getElementById(`phone`).value = document.getElementById(
      `telefono_${id}`
    ).value;
    document.getElementById('btncorreo').click();*/
    // sendNotificacion(
    //   "Usuario actualizado",
    //   "Has actualizado tu hoja de vida en Compucamello con éxito.",
    //   document.getElementById(`correo_${id}`).value
    // );
    Leer();
  } catch (error) {
    console.log(error);
    alert("error al actualizar");
  }
};
