function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img"); // Seleciona a imagem dentro de #profile
  html.classList.toggle("light");

  // Altera o src da imagem dependendo do modo
  if (html.classList.contains("light")) {
    img.src = "./claroS.webp"; // Imagem para o modo claro
  } else {
    img.src = "./escuroS.webp"; // Imagem para o modo escuro
  }
}
