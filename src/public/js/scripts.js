// Acesso ao dashboard Power-Bi
const enterBtn = document.querySelector('.enter_btn')
const cobertura = document.querySelector('.login_modal')
const ocultBtn = document.querySelector('#hide_btn')
const changeThemeBtn = document.querySelector('.theme_box')

enterBtn.addEventListener('click', ()=>{
// Seleciona os elementos de entrada
const codigoInput = document.querySelector('#user_name');
const passwordInput = document.querySelector('#user_password');

// Obtém os valores dos campos
const codigo = codigoInput.value.trim(); // Remove espaços em branco
const password = passwordInput.value.trim();

if (codigo === "41.507.924/0001-66" && password === "eduardo/igor") {
    cobertura.classList.add('hideModal'); // Esconde o modal se login for correto
} else {
    alert("Usuário e/ou senha incorretos, tente novamente!"); // Exibe alerta
    codigoInput.value = ''; // Limpa o campo de nome de usuário
    passwordInput.value = ''; // Limpa o campo de senha
    codigoInput.focus(); // Retorna o foco ao campo de nome de usuário
}

})

// ocultar dashboard
ocultBtn.addEventListener('click', ()=>{
    let passwordInput = document.querySelector('#user_password');
    cobertura.classList.remove('hideModal')
    // passwordInput.value = ''
    
})

// alterar plano de fundo

changeThemeBtn.addEventListener('click', ()=>{

    changeThemeBtn.classList.toggle('background_padrao')
    changeThemeBtn.classList.toggle('background_alt-1')
    cobertura.classList.toggle('background_padrao')
    cobertura.classList.toggle('background_alt-1')


})