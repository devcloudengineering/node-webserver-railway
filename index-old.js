const http = require("http");
const servidor = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
  //   res.writeHead(200, { "Content-Type": "application/csv" });

  //   res.write("id; nombre\n");
  //   res.write("1; Gustavo\n");
  //   res.write("2; Benjamin\n");
  //   res.write("3; Creado\n");

  res.write("Hola mundo");
  res.end();
});

servidor.listen(8080, () => {
  console.log("Servidor escuchando puerto: ", 8080);
});
