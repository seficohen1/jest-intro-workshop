import axios from "axios";

export async function getUserData(url) {
  const response = await axios.get(url);

  return response.data;
}
