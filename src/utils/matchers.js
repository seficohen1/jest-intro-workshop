export function multiplyNums(nums = []) {
  return nums.map((n) => n * 2);
}

export function sanitizeUserData(user) {
  const { password, role, ...rest } = user;

  return rest;
}
