// Botões de Registro, Login e Saída
const registerButton = document.querySelector(".signin");
const loginButton = document.querySelector(".login");
const exitButton = document.querySelector(".exit");

// Função para mostrar a página 5 ao clicar no botão "Registrar"
registerButton.addEventListener("click", () => {
    // Esconde todas as páginas
    Object.values(pages).forEach((page) => (page.style.display = "none"));

    // Mostra a página 5
    pages["page5"].style.display = "block";

    // Desabilita os botões de Registro e Login
    registerButton.style.display = "none";
    loginButton.style.display = "none";
});

// Função para mostrar a página 6 ao clicar no botão "Entrar"
loginButton.addEventListener("click", () => {
    // Esconde todas as páginas
    Object.values(pages).forEach((page) => (page.style.display = "none"));

    // Mostra a página 6
    pages["page6"].style.display = "block";

    // Desabilita os botões de Registro e Login
    registerButton.style.display = "none";
    loginButton.style.display = "none";
});

// Função para redirecionar para a página 4 após o registro na página 5
function redirectToPage4() {
    // Esconde todas as páginas
    Object.values(pages).forEach((page) => (page.style.display = "none"));

    // Mostra a página 4
    pages["page4"].style.display = "block";

    // Desabilita os botões de Registro e Login
    registerButton.style.display = "none";
    loginButton.style.display = "none";

    // Habilita o botão de Saída
    exitButton.style.display = "block";
}

// Função para redirecionar para a página 4 após o login na página 6
function redirectToPage4AfterLogin() {
    // Esconde todas as páginas
    Object.values(pages).forEach((page) => (page.style.display = "none"));

    // Mostra a página 4
    pages["page4"].style.display = "block";

    // Desabilita os botões de Registro e Login
    registerButton.style.display = "none";
    loginButton.style.display = "none";

    // Habilita o botão de Saída
    exitButton.style.display = "block";
}

// Função para fazer o logout
function logout() {
    // Esconde a página 4
    pages["page4"].style.display = "none";

    // Habilita os botões de Registro e Login
    registerButton.style.display = "block";
    loginButton.style.display = "block";

    // Desabilita o botão de Saída
    exitButton.style.display = "none";
}

// Define o evento de clique para o botão "Sair"
exitButton.addEventListener("click", logout);
