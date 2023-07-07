async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao}`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(busca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${busca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaAPI ={
    listaVideos,
    criaVideo,
    buscaVideo
}