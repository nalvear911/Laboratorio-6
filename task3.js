import { getServerURL } from "./task1.js";

// Función para agregar un nuevo usuario
export async function addUser(first_name, last_name, email) {
  // Obtener la URL del servidor
  const url = getServerURL();

  // Hacer una solicitud GET para obtener la lista de usuarios
  const response = await fetch(url + "/users");

  // Convertir la respuesta en un array de usuarios
  const users = await response.json();

  // Encontrar el ID más alto actual en la lista de usuarios
  const maxId = users.reduce((max, user) => Math.max(max, Number(user.id)), 0);

  // Calcular el nuevo ID (el máximo actual + 1)
  const newId = maxId + 1;

  // Crear un objeto con el nuevo usuario
  const newUser = {
    id: newId, // ID como número
    first_name,
    last_name,
    email,
  };

  // Hacer una solicitud POST para agregar el nuevo usuario
  const postResponse = await fetch(url + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  // Convertir la respuesta en el objeto del usuario agregado
  const addedUser = await postResponse.json();

  // Imprimir en consola el usuario que se ha agregado en el formato exacto esperado
  console.log(
    `{\n  id: ${addedUser.id},\n  first_name: '${addedUser.first_name}',\n  last_name: '${addedUser.last_name}',\n  email: '${addedUser.email}'\n}`
  );

  return addedUser; // Retornar el objeto agregado si es necesario
}
