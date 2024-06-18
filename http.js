const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome");
    res.end(); // Asegúrate de finalizar la respuesta
  } else if (req.url === "/about") {
    res.write("welcome to about");
    res.end(); // Asegúrate de finalizar la respuesta
  } else {
    res.write(`
      <h1>La pagina no existe</h1>
      <a href="https://www.megamind.ec">Marisol</a>
    `);
    res.end(); // Asegúrate de finalizar la respuesta
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
