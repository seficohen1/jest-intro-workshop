export function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 100);
}

export function fetchUserConditional(id, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`User ${id} not found`);
      }

      resolve({ id: id, name: "Alex" });
    }, 0);
  });
}

export function fetchUserOK(id) {
  return fetchUserConditional(id, false);
}

export function fetchUserFail(id) {
  return fetchUserConditional(id, true);
}
