let audios = [
    {caminho:'Iframe A vida É Desafio - Nada Como Um Dia Após O Outro Dia (Chora Agora) [Wb3rvC6z5ao] (1).mp3', legenda:'A vida é desafio'},
    {caminho:'Iframe Dias De Luta, Dias De Gloria [OTEi45AFO7Y].mp3', legenda:'Dias de luta'},
    {caminho:'Iframe Jesus Chorou [jLfWZ0nhTAE].mp3', legenda:'Jesus chorou'},
    {caminho:'Iframe Quero Ser Feliz Também [W_tiWYt5YTI].mp3', legenda:'Quero ser feliz'},
    {caminho:'Iframe Só Os Loucos Sabem [xfyeyZ-u_dU].mp3', legenda:'Só os loucos sabem'},
    {caminho:'musica6.mp3', legenda:'Presente de um beija flor'},
    {caminho:'musica7.mp3', legenda:'Tordilho negro'},
    {caminho:'musica8.mp3', legenda:'Um bom lugar'},
    {caminho:'musica9.mp3', legenda:'eletronica'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
