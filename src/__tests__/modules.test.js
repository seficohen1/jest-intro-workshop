import axios from "axios";
import { getUserData } from "../utils/modules";

jest.mock("axios");

test("returns user data", async () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/users/1";
  const userData = {
    data: { firstName: "Alex", lastName: "Marks" },
  };

  axios.get.mockResolvedValue(userData);
  const result = await getUserData(BASE_URL);

  expect(result).toEqual(userData.data);
  expect(axios.get).toHaveBeenCalledWith(BASE_URL);
});
