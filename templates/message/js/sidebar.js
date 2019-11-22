(function ($) {

    class SampleClass {

        constructor(element) {
            this.element = this;
        }

        showContactForm() {
            // hide post a message
            // show form create ajax
        }

        hideContactForm() {
            // hide form create ajax
            // show post a message
        }

        showLoginForm() {

        }

        hideLoginForm() {
            // hide login form
            // show post a message
            // save localStorage
        }

        logoutLoginToggle(state = 'login') {

        }

    }

    class ContactForm {
        // use ajax
        sendMessage() {
            return 'successful';
        }
    }

    class LoginForm {
        // use ajax
        login() {
            // save localStorage
            return 'successful';
        }

        logout() {
            // clear localStorage
        }
    }


    jQuery(document).ready(function () {
        $a = new SampleClass();
        $( "#button" ).click(function() {
            $a.showContactForm();
        });

        // $("#contact-form").submit() {
            $a = new ContactForm();
            result = $a.sendMessage();
            if (!result) {
                // send message by popup
                $a.hideContactForm();
                // refresh message to message list
            }
        // }
        
        // case login
        $( "#login-link" ).click(function() {
            $a.showLoginForm();
        });

        $login = new LoginForm();
        // $("#login-form").submit() {
            result = $login.login();
            if (result) {
                // send message by popup
                $a.hideLoginForm();
                $a.logoutLoginToggle('login');
                // refresh message to message list
            }
        // }

        // case logout
        $( "#logout-link" ).click(function() {
            // clear user in localStorage
            $login.logout();
            $a.logoutLoginToggle('logout');
            // show logout link
        });


    });

}(jQuery));
