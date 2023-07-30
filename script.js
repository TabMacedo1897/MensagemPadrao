

function nomePais() {
    var nomes = document.querySelector("#nomesP").value;
    if (nomes.trim() !== "") {
        document.querySelector("#resposta").textContent = `Olá, ${nomes}, estou enviando mensagem para dizer que na próxima aula teremos uma pequena reunião de pais nos 10 minutos iniciais da aula para que eu possa explicar os próximos conteúdos que serão vistos, e também para caso haja alguma dúvida sobre o desenvolvimento dos alunos durante as aulas. Além disso, preenchi o boletim que fica localizado na parte esquerda na aba 'meus boletins'. Tenham um ótimo dia.`;
    }
}

