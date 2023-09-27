const handlePasswordSwitcher = function () {
    const passwordOptions = ['password', 'text'];
    const passwordInput = document.querySelector('.js-password-input');
    const passwordToggle = document.querySelector('.js-password-toggle-checkbox');
    const show = document.querySelector(".c-password-toggle__symbol--show");
    const hide = document.querySelector(".c-password-toggle__symbol--hide");

    passwordToggle.addEventListener('change', function () {
        passwordInput.type = passwordOptions[+this.checked];
        if(this.checked){
            show.style.display = 'none';
            hide.style.display = 'block';
        }else{
            show.style.display = 'block';
            hide.style.display = 'none';
        }
    });
    console.log("handlePasswordSwitcher executed");
}

const init = function () {
    console.log('Script loaded!');

    // init password switcher
    handlePasswordSwitcher();

    // Other init functions here
}

init();