export async function getUsers() {
  const response = await fetch(`${process.env.API_URL}/user`);
  return response.json();
}
