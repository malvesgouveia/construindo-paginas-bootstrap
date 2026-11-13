// Ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Fecha o menu no celular ao clicar em um link
document.querySelectorAll('#menu .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        var menu = document.getElementById('menu');
        if (menu.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

// Validação do formulário de contato (demonstração, não envia dados)
var form = document.getElementById('form-contato');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var aviso = document.getElementById('msg-enviado');
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        aviso.classList.add('d-none');
        return;
    }
    form.reset();
    form.classList.remove('was-validated');
    aviso.classList.remove('d-none');
});
