// Task 4: deleteUser()
export async function deleteUser(userId) {
    const url = getServerURL();
    
    try {
      const response = await fetch(url + `/users/${userId}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      console.log(`Usuario con ID ${userId} eliminado.`);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  }
  