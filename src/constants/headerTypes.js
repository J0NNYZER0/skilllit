export const HEADERS = {
  JSON: {
    GET: () => ({
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Origin': HOST
      },
      credentials: 'include',
    }),
    POST: (data) => ({
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Origin': HOST
      },
      body: JSON.stringify(data)
    }),
    DELETE: {
      method: 'DELETE'
    },
    PUT: {}
  },
  URL_ENCODED: {
    GET: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'x-www-form-urlencoded',
      'Origin': HOST
    }
  }
};
