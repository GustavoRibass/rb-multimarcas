function validar(event) {
    event.preventDefault(); // impede envio do formulário

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone");
    let carro = document.getElementById("carro");
    let msg = document.getElementById("mensagem");

    let erro = false;

    function marcarErro(campo) {
        campo.style.border = "2px solid red";
        erro = true;
    }

    function limparErro(campo) {
        campo.style.border = "1px solid #ccc";
    }

    // Nome
    limparErro(nome);
    if (nome.value.trim().length < 3) {
        marcarErro(nome);
    }

    // Email
    limparErro(email);
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
        marcarErro(email);
    }

    // Telefone (apenas números, 8 a 15 dígitos)
    limparErro(telefone);
    let somenteNumeros = telefone.value.replace(/\D/g, "");
    let regexTel = /^\d{8,15}$/;
    if (!regexTel.test(somenteNumeros)) {
        marcarErro(telefone);
    }

    // Carro
    limparErro(carro);
    if (carro.value.trim().length < 2) {
        marcarErro(carro);
    }

    // Mensagem
    limparErro(msg);
    if (msg.value.trim().length < 5) {
        marcarErro(msg);
    }

    if (erro) {
        alert("Por favor, corrija os campos em vermelho antes de enviar.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}