import { conectaAPI } from "./conectaAPI.js";
import { mostrarVideo } from "./mostrarVideos.js";
async function buscarVideo(evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

    mostrarVideo.lista.innerHTML = '';

    busca.forEach(elemento => mostrarVideo.lista.appendChild(
        mostrarVideo.constroiCard(elemento.titulo, elemento.descricao,elemento.url,elemento.imagem)
    ));
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));