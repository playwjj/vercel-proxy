export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const backend = "http://145.239.69.111:20169";

  const url = new URL(request.url);
  const targetUrl = backend + url.pathname + url.search;

  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });

  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}
