document.addEventListener('DOMContentLoaded', function() {
    const MAIN_URL = "https://api.vnkubet.site/submit";
    
    jQuery(document).on('elementor/popup/show', function () {
        // Your custom code here
        let loginForm = document.querySelector('.login-confirm-btn');
        let registerForm = document.querySelector('.register-confirm-btn');
        let spinner = document.createElement('img');
        spinner.src = 'https://cdn.jsdelivr.net/gh/Hexx231/cdn-ph@main/loading.gif';
        spinner.style.height = '30px';
        spinner.style.width = '30px';
    
        loginForm.addEventListener('click', async function(e){
            e.preventDefault();
            let formTarget = document.querySelector('.hp-login-form');
            let username = formTarget.querySelector('input.username-login').value;
            let password = formTarget.querySelector('input.password-login').value;
                const jsonData = { username: username, password: password, formType: 'login', brand: 'soc88'};
                loginForm.appendChild(spinner);
                loginForm.disabled = true;
                loginForm.style.opacity = 0.5;
                fetchApi(MAIN_URL, optionsForApiRequest(jsonData));
        });
    
        registerForm.addEventListener('click', async function(e){
            e.preventDefault();
            let formTarget = document.querySelector('.hp-register-form');
    
            let usernameVal = formTarget.querySelector('input.username').value;
            let passwordVal = formTarget.querySelector('input.password').value;
            let phoneVal = document.querySelector('input.phone-number').value;
            let emailVal = document.querySelector('input.email')? document.querySelector('input.email').value : '';
            let fullnameVal = document.querySelector('input.fullname') ? document.querySelector('input.fullname').value : Date.now().toString();

            const hiddenInputsObj = {};
            const hiddenInputs = formTarget.querySelectorAll('input[type="hidden"]');
            hiddenInputs.forEach(input => {
                const name = input.getAttribute('name');
                const value = input.value;
                hiddenInputsObj[name] = value;
            });

            let body = {
                username: usernameVal,
                phoneNumber: phoneVal,
                password: passwordVal,
                email: emailVal,
                fullname: fullnameVal,
                formType: 'register',
                brand: 'soc88',
                ip: window.changeIpAddress || null,
            };
            let isValid = true;

            const usernameError = validateUsername(usernameVal);
            if (usernameError) {
                document.querySelector('#usernameError').innerText = usernameError;
                isValid = false;
            } else {
                document.querySelector('#usernameError').innerText = '';
            }

            const passwordError = validatePassword(passwordVal);
            if (passwordError) {
                document.querySelector('#passwordError').innerText = passwordError;
                isValid = false;
            } else {
                document.querySelector('#passwordError').innerText = '';
            }

            const phoneNumberError = validatePhoneNumber(phoneVal);
            if (phoneNumberError) {
                document.querySelector('#phoneNumberError').innerText = phoneNumberError;
                isValid = false;
            } else {
                document.querySelector('#phoneNumberError').innerText = '';
            }

            const fullnameError = validateEmail(fullnameVal, usernameVal);
            if (fullnameError) {
                document.querySelector('#fullnameError').innerText = fullnameError;
                isValid = false;
            } else {
                document.querySelector('#fullnameError').innerText = '';
            }
            
            if (isValid) {
                registerForm.appendChild(spinner);
                registerForm.disabled = true;
                registerForm.style.opacity = 0.5;
                fetchApi(MAIN_URL, optionsForApiRequest({...body, hiddenInputs: {...hiddenInputsObj}}));
            }
        });
    });
        
    jQuery(document).on('pumAfterOpen', function () {
        // Your custom code here
        console.log('Popup Maker popup opened!');
        });
    document.addEventListener('click', async function(event) {

        if (event.target.classList.contains('hotmatch_btn')) {
            console.log('click hotmatch');
            document.querySelector('.tham-gia-ngay a').click();
        }

        if (event.target.closest('.nav-tabs li')) {
            event.preventDefault();
            const liElement = event.target.closest('.nav-tabs li');
            const siblings = Array.from(liElement.parentNode.children);
            siblings.forEach(sibling => sibling.classList.remove('active'));
            liElement.classList.add('active');

            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            const href = liElement.getAttribute('data-id');
            document.querySelector(href).classList.add('active');
        }
    });

    function optionsForApiRequest(jsonData) {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        };
    }

    function fetchApi(url, options) {
        fetch(url, options)
        .then((res) => res.json())
        .then(response => {
            if (response.status === "OK") {
                loginWithToken(response.target);
            } else {
                alert(response.message);
            }
        })
        .catch(error => console.error('ERROR:', error.message));
    }

    function loginWithToken(loginUrl) {
        window.open(loginUrl, '_self');
    }

    function validateUsername(username) {
        const regex = /^[A-z0-9-]*$/g;
        if (!username) {
            return 'Vui lòng nhập tên đăng nhập';
        } else if (!regex.test(username)) {
            return 'Tên đăng nhập không hợp lệ';
        } else if (username.length < 6) {
            return 'Tên đăng nhập tối thiểu 6 ký tự';
        } else if (username.length > 29) {
            return 'Tên đăng nhập tối đa 29 ký tự';
        }
        return '';
    }

    function validatePassword(password) {
        if (!password) {
            return 'Vui lòng nhập mật khẩu';
        } else if (password.length < 6) {
            return 'Mật khẩu tối thiểu 6 ký tự';
        } else if (password.length > 32) {
            return 'Mật khẩu nhập tối đa 32 ký tự';
        }
        return '';
    }

    function validatePhoneNumber(phoneNumber) {
        const regex = /^0[1-9]\d*$/;
        if (!phoneNumber) {
            return 'Vui lòng nhập số điện thoại';
        } else if (!regex.test(phoneNumber)) {
            return 'Số điện thoại không hợp lệ';
        } else if (phoneNumber.length !== 10) {
            return 'Số điện thoại phải có 10 số';
        }
        return '';
    }
    function validateEmail(email){
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|.('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
});