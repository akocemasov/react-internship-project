class FetchApiService {
  constructor(url, headers) {
    this.baseUrl = url;
    this.headers = headers;
  }

  request(method, url, headers = {}, body = null) {
    return fetch(this.baseUrl + url, {
      method: method,
      headers: { ...this.headers, headers },
      body: body,
    })
      .then((response) => response.json())
      .catch((err) => err);
  }
}

const getFetchApi = (jsonServerUrl) => {
  return new FetchApiService(jsonServerUrl, {
    "Content-Type": "application/json",
  });
};

export default getFetchApi;
