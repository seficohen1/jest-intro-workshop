export function multiplyNums(nums = []) {
  return nums.map((n) => n * 2);
}

export function sanitizeUserData(user) {
  const { password, role, ...rest } = user;

  return rest;
}

export function createUserObject(firstName = "", lastName = "", email = "") {
  return {
    firstName,
    lastName,
    email,
  };
}

export function createCorporateEmailAddress(username = "") {
  return `${username}@company.com`;
}

export function generateRandomNumberFrom1to10() {
  return Math.floor(Math.random() * 10) + 1;
}

export function addItemToList(prevList = [], item = "") {
  return [...prevList, item];
}

export function addUser(users = [], newUser = "") {
  return [...users, { name: newUser }];
}

export function getWeekDays() {
  return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
}

export function makeAdminUser(user = {}) {
  return { ...user, role: "ADMIN" };
}

export function getUserInfo(user = {}) {
  const { postalCode, city, streetName, ...rest } = user;

  return rest;
}
