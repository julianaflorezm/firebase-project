const findUser = async () => {
  const cedula = document.getElementById(
    "searchByCedula"
  ).value;
  try {
    const query = await db
      .collection("usuarios")
      .where("cedula", "==", cedula)
      .get();
    let user = undefined;
    query.forEach((doc) => (user = doc.data()));
    if (user) {
      document.getElementById("nombre").value = user.nombre;
      document.getElementById("apellido").value = user.apellido;
      document.getElementById("tipo_id").value =
        user.identificationType;
      document.getElementById("id").value = user.cedula;
      document.getElementById("fecha_nacimiento").value = user.fecha_nacimiento;
      document.getElementById("direccion").value = user.direccion;
      document.getElementById("telefono").value = user.telefono;
      document.getElementById("correo").value = user.correo;
    } else {
      document.getElementById("message").value =
        "El usuario no se encuentra registrado, regístrese.";
    }
    document.getElementById("searchByIdentificaction").value = "";
  } catch (error) {
    alert("error al encontrar el usuario con esa identiciación");
    console.log(error);
  }
};

const Leer = () => {
  const taskContainer = document.getElementById("tasks-container");
  taskContainer.innerHTML = "";
  db.collection("usuarios")
    .get()
    .then((querySnapshot) => {
      let contador = 0;
      querySnapshot.forEach((doc) => {
        const id = `'${doc.id}'`;
        const task = doc.data();
        contador++;
        taskContainer.innerHTML += `
                <tr>
                <td>${contador}</td>
                <td><input type="text" class="form-control notificacion" id="cedula_${doc.id}" value="${task.cedula}"
                required readonly></td>
                <td><input type="text" class="form-control notificacion" id="nombre_${doc.id}" value="${task.nombre}"
                required readonly></td>
                <td><input type="text" class="form-control notificacion" id="apellido_${doc.id}" value="${task.apellido}"
                required readonly></td>
                <td><input type="text" class="form-control notificacion" id="correo_${doc.id}" value="${task.correo}"
                required readonly></td>
                <td><input type="text" class="form-control notificacion" id="telefono_${doc.id}" value="${task.telefono}"
                required readonly></td>
                <td><i class="material-icons" id="actualizar_${doc.id}" title="Actualizar" onclick="actualizar(${id});">edit</i></td>
                <td><i class="material-icons" onclick="eliminar(${id});" title="Eliminar">delete</i></td>
                </tr>
              `;
      });
    });
};
