// scripts de login e navegação

// acesso principal
const loginBtn = document.querySelector('.control_enter_btn')
const loginPage = document.querySelector('.home-login')

// Acesso ao dashboard Power-Bi
const enterBtn = document.querySelector('.enter_btn')
const cobertura = document.querySelector('.login_modal')
const ocultBtn = document.querySelector('#hide_btn')
const changeThemeBtn = document.querySelector('.theme_box')

// menu lateral
const latMenuBtn = document.querySelector('#hide_lat_menu_btn')

// Navegação páginas do controle
const opAssistBtn = document.querySelector('#opAssistNav')
const comercBtn = document.querySelector('#comercNav')
const operBtn = document.querySelector('#operNav')
const fiscBtn = document.querySelector('#fiscNav')
const cadBtn = document.querySelector('#cadNav')

// Navegação de cadastros
const pgClienteBtn = document.querySelector('#navCadClientBtn')
const pgVendedorBtn = document.querySelector('#navCadVendBtn')
const pgOperadorBtn = document.querySelector('#navCadOperBtn')
const pgVeiculoBtn = document.querySelector('#navCadVeicBtn')


// login inicial
loginBtn.addEventListener('click', ()=>{
    // Seleciona os elementos de entrada
    let codigoInput = document.querySelector('#control_user');
    let passwordInput = document.querySelector('#control_password');
    
    // Obtém os valores dos campos
    let codigo = codigoInput.value.trim(); // Remove espaços em branco
    let password = passwordInput.value.trim();
    
    if (codigo === "tarcisio" && password === "123") {
        loginPage.classList.add('hideHome-login'); // Esconde o modal se login for correto
    } else {
        alert("Usuário e/ou senha incorretos, tente novamente!"); // Exibe alerta
        codigoInput.value = ''; // Limpa o campo de nome de usuário
        passwordInput.value = ''; // Limpa o campo de senha
        codigoInput.focus(); // Retorna o foco ao campo de nome de usuário
    }
    
})

// login dashboard
enterBtn.addEventListener('click', ()=>{
    // Seleciona os elementos de entrada
    let codigoInput = document.querySelector('#user_name');
    let passwordInput = document.querySelector('#user_password');
    let hideBtn = document.querySelector('#hide_btn');

    // Obtém os valores dos campos
    let codigo = codigoInput.value.trim(); // Remove espaços em branco
    let password = passwordInput.value.trim();

    if (codigo === "41.507.924/0001-66" && password === "eduardo/igor") {
        cobertura.classList.add('hideModal'); // Esconde o modal se login for correto

        //exibe o botão de esconder o dashboard
        hideBtn.classList.add('visible')
    } else {
        alert("Usuário e/ou senha incorretos, tente novamente!"); // Exibe alerta
        codigoInput.value = ''; // Limpa o campo de nome de usuário
        passwordInput.value = ''; // Limpa o campo de senha
        codigoInput.focus(); // Retorna o foco ao campo de nome de usuário
    }

})

// ocultar menu lateral
latMenuBtn.addEventListener('click', ()=>{
    let latMenu = document.querySelector('.menu-lateral')
    let navLinks = document.querySelectorAll('.navLatLink')

    latMenu.classList.toggle('hidemenulat')
    navLinks.forEach(Element => {
        Element.classList.toggle('hideNavLatLink')
    });
    
})

// Navegar pelo controle

opAssistBtn.addEventListener('click', ()=>{
    let pgOpAssist = document.querySelector('#opAssist')
    let pgComerc = document.querySelector('#comercial')
    let pgOper = document.querySelector('#operacao')
    let pgFisc = document.querySelector('#fiscal')
    let pgCad = document.querySelector('#cadastros')

    pgOpAssistNav.classList.add('CurrentcadNav')
    pgOpAssist.classList.remove('off')

    pgVendedorBtn.classList.remove('CurrentcadNav')
    VendPg.classList.add('off')

    pgOperadorBtn.classList.remove('CurrentcadNav')
    OperPg.classList.add('off')

    pgVeiculoBtn.classList.remove('CurrentcadNav')
    VeicPg.classList.add('off')


})


// navegar pelo cadastro

pgClienteBtn.addEventListener('click', ()=>{
    let ClientPg = document.querySelector('#cadCliente')
    let VendPg = document.querySelector('#cadVendedor')
    let OperPg = document.querySelector('#cadOperador')
    let VeicPg = document.querySelector('#cadVeiculo')

    pgClienteBtn.classList.add('CurrentcadNav')
    ClientPg.classList.remove('off')

    pgVendedorBtn.classList.remove('CurrentcadNav')
    VendPg.classList.add('off')

    pgOperadorBtn.classList.remove('CurrentcadNav')
    OperPg.classList.add('off')

    pgVeiculoBtn.classList.remove('CurrentcadNav')
    VeicPg.classList.add('off')


})

pgVendedorBtn.addEventListener('click', ()=>{
    let ClientPg = document.querySelector('#cadCliente')
    let VendPg = document.querySelector('#cadVendedor')
    let OperPg = document.querySelector('#cadOperador')
    let VeicPg = document.querySelector('#cadVeiculo')


    pgClienteBtn.classList.remove('CurrentcadNav')
    ClientPg.classList.add('off')

    pgVendedorBtn.classList.add('CurrentcadNav')
    VendPg.classList.remove('off')

    pgOperadorBtn.classList.remove('CurrentcadNav')
    OperPg.classList.add('off')

    pgVeiculoBtn.classList.remove('CurrentcadNav')
    VeicPg.classList.add('off')


})

pgOperadorBtn.addEventListener('click', ()=>{
    let ClientPg = document.querySelector('#cadCliente')
    let VendPg = document.querySelector('#cadVendedor')
    let OperPg = document.querySelector('#cadOperador')
    let VeicPg = document.querySelector('#cadVeiculo')

    pgClienteBtn.classList.remove('CurrentcadNav')
    ClientPg.classList.add('off')

    pgVendedorBtn.classList.remove('CurrentcadNav')
    VendPg.classList.add('off')

    pgOperadorBtn.classList.add('CurrentcadNav')
    OperPg.classList.remove('off')

    pgVeiculoBtn.classList.remove('CurrentcadNav')
    VeicPg.classList.add('off')


})

pgVeiculoBtn.addEventListener('click', ()=>{
    let ClientPg = document.querySelector('#cadCliente')
    let VendPg = document.querySelector('#cadVendedor')
    let OperPg = document.querySelector('#cadOperador')
    let VeicPg = document.querySelector('#cadVeiculo')

    pgClienteBtn.classList.remove('CurrentcadNav')
    ClientPg.classList.add('off')

    pgVendedorBtn.classList.remove('CurrentcadNav')
    VendPg.classList.add('off')

    pgOperadorBtn.classList.remove('CurrentcadNav')
    OperPg.classList.add('off')

    pgVeiculoBtn.classList.add('CurrentcadNav')
    VeicPg.classList.remove('off')


})
