import Global from './../Global';

export function getCoches() {
    let request = "api/coches";
    return fetch(Global.urlApiCoches + request)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => data)  // Aquí, aseguramos que se devuelve el resultado como una promesa resuelta
        .catch(error => {
            console.error('Error:', error);
            throw error; // Deja que el error propague para que lo puedas manejar en el componente
        });
}

export async function insertcoche(data) {
    let request = "api/coches/insertcoche";
    let url = Global.urlApiCoches + request;
    // Opciones por defecto están marcadas con un *
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // cuerpo de la solicitud (body) debe coincidir con el tipo de contenido (Content-Type)
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  export function updateCar(car) {
    // Definimos la URL del endpoint (supongamos que el id del coche es car.id)
    let request = "api/coches/updatecoche";
    const url = Global.urlApiCoches + request;

    // Utilizamos fetch para hacer una solicitud PUT para actualizar los datos
    return fetch(url, {
      method: 'PUT',  // Usamos PUT ya que es para actualizar un recurso completo
      headers: {
        'Content-Type': 'application/json',  // Indicamos que los datos son JSON
      },
      body: JSON.stringify({
        idCoche: car.idCoche,
        marca: car.marca,
        modelo: car.modelo,
        conductor: car.conductor,
        imagen: car.imagen
      }),
    })
    .then(response => {
        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error al actualizar el coche: ${response.statusText}`);
        }
        return response.json();  // Convertimos la respuesta a JSON
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud de actualización:', error);
        throw error;  // Re-lanzamos el error para que pueda ser manejado en el componente
    });
}

  export function findCoche(id) {
    let request = "api/coches/findcoche/" + id;
    return fetch(Global.urlApiCoches + request)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => data)  // Aquí, aseguramos que se devuelve el resultado como una promesa resuelta
        .catch(error => {
            console.error('Error:', error);
            throw error; // Deja que el error propague para que lo puedas manejar en el componente
        });
}

export function deleteCar(id) {
    // Definimos la URL del endpoint para eliminar el coche (usamos el ID del coche)
    let request = "api/coches/deletecoche/" + id;
    const url = Global.urlApiCoches + request;
  
    // Utilizamos fetch para hacer una solicitud DELETE
    return fetch(url, {
      method: 'GET',  // Usamos DELETE para eliminar un recurso
      headers: {
        'Content-Type': 'application/json',  // Indicamos que los datos que recibimos son JSON
      },
    })
    .then(response => {
      // Verificamos si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error(`Error al eliminar el coche: ${response.statusText}`);
      }
      return response.json();  // Convertimos la respuesta a JSON
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud de eliminación:', error);
      throw error;  // Re-lanzamos el error para que pueda ser manejado en el componente
    });
  }
  
