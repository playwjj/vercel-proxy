export default async function handler(req, res) {
  const target = "http://145.239.69.111:20169" + req.url;

  const response = await fetch(target, {
    method: req.method,
    headers: req.headers
  });

  const data = await response.arrayBuffer();

  res.status(response.status);

  response.headers.forEach((v, k) => {
    res.setHeader(k, v);
  });

  res.send(Buffer.from(data));
}
