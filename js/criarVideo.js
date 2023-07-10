import { conectaAPI } from "./conectaAPI.js";

const form = document.querySelector("[data-formulario]");

async function criarVideo (evento){
    evento.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaAPI.criaVideo(titulo,descricao,url,imagem);
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }

}

form.addEventListener("submit", evento => criarVideo(evento));