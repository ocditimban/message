class SidebarLayout {

    constructor(element) {
        this.element = this;
    }

    showContactForm() {
        $('#add-message').addClass('.d-none');
        $('.contact-form-wrapper').removeClass('.d-none');
        // hide post a message
        // show form create ajax
    }

    hideContactForm() {
        // hide form create ajax
        // show post a message
        $('.contact-form-wrapper').addClass('.d-none');
        $('#add-message').removeClass('.d-none');
    }

    showLoginForm() {
        $('.login-form-wrapper').removeClass('.d-none');
    }

    hideLoginForm() {
        // hide login form
        // show post a message
        // save localStorage
        $('.login-form-wrapper').addClass('.d-none');
    }

    logoutLoginToggle(status = 'login') {
        if (status === 'login') {
            $('#login-link').addClass('.d-none');
            $('#logout-link').removeClass('.d-none');
        }
        else {
            $('#logout-link').addClass('.d-none');
            $('#login-link').removeClass('.d-none');
        }
    }
}