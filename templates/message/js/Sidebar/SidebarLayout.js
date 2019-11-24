class SidebarLayout {

    init() {
        if (localStorage.getItem('token')) {
            this.logoutLoginToggle('login');
        }

        $('textarea').each(function(){
            $(this).val($(this).val().trim());
        });
    }

    showContactForm() {
        $('.contact-form-wrapper').removeClass('d-none');
    }

    hideContactForm() {
        $('.contact-form-wrapper').addClass('d-none');
    }

    showLoginForm() {
        $('#login-form').removeClass('d-none');
    }

    hideLoginForm() {
        $('#login-form').addClass('d-none');
    }

    logoutLoginToggle(status = 'login') {
        if (status === 'login') {
            $('#login-link').addClass('d-none');
            $('#logout-link').removeClass('d-none');
        }
        else {
            $('#logout-link').addClass('d-none');
            $('#login-link').removeClass('d-none');
        }
    }
}