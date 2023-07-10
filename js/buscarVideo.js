import { conectaAPI } from "./conectaAPI.js";
import { mostrarVideo } from "./mostrarVideos.js";
async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

    while (mostrarVideo.lista.firstChild) {
        mostrarVideo.lista.removeChild(mostrarVideo.lista.firstChild);
    }

    busca.forEach(elemento => mostrarVideo.lista.appendChild(
        mostrarVideo.constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ));

    if(busca.length == 0){
        mostrarVideo.lista.innerHTML = "<h2 class=\"mensagem__titulo\">Não foi Encontrado nenhum vídeo com esse termo</h2>"
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));