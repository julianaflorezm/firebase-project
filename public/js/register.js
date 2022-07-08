const Guardar = async () => {
  try {
    await db.collection("usuarios").add({
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      correo: document.getElementById("correo").value,
      direccion: document.getElementById("direccion").value,
      fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
      tipo_id: document.getElementById("tipo_id").value,
      cedula: document.getElementById("id").value,
      telefono: document.getElementById("telefono").value,
      perfil: document.getElementById("perfil").value,
      educacion: document.getElementById("formacion").value,
      experiencia: document.getElementById("experiencia").value,
      nom_ref1: document.getElementById("nom_ref1").value,
      nom_ref2: document.getElementById("nom_ref2").value,
      nom_ref3: document.getElementById("nom_ref3").value,
      tel_ref1: document.getElementById("tel_ref1").value,
      tel_ref2: document.getElementById("tel_ref2").value,
      tel_ref3: document.getElementById("tel_ref3").value,
      cargo_ref1: document.getElementById("cargo_ref1").value,
      cargo_ref2: document.getElementById("cargo_ref2").value,
      cargo_ref3: document.getElementById("cargo_ref3").value
  });
  alert("Registro exitoso");
  notificacion("correo","nombre","telefono","Bienvenido!! Te has registrado con éxito en Compucamello.");
  } catch(error) {
    console.log(error);
    alert("Error");
  }
}