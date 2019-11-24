(function ($) {
    // jQuery
    
    jQuery(document).ready(function () {
        SidebarLayout = new SidebarLayout();
        ContactForm = new ContactForm();
        LoginForm = new LoginForm();

        SidebarLayout.init();

        $( "#add-message" ).click(function() {
            SidebarLayout.showContactForm();
        });

        $( "#contact-form" ).submit(function( event ) {
            event.preventDefault();
            var authorName = $(this).find("[name='author_name']").val();
            var body = $(this).find("[name='body']").val();
            ContactForm.sendMessage(authorName, body);
            Messages.refreshPage(0);
        });

        $( "#login-form" ).submit(function( event ) {
            event.preventDefault();
            let authorName = $(this).find("[name='author_name']").val();
            let password = $(this).find("[name='password']").val();

            let result = LoginForm.login(authorName, password);
            let ajaxResponse = jQuery.parseJSON(result.responseText);
            if (ajaxResponse.status == true) {
                // send message by popup
                SidebarLayout.hideLoginForm();
                SidebarLayout.logoutLoginToggle('login');
                MainLayout.showAdminControl();
            }
        });

        $("#login-link").click(function(event) {
            event.preventDefault();
            SidebarLayout.showLoginForm();
        });

        // case logout
        $( "#logout-link" ).click(function(event) {
            event.preventDefault();
            LoginForm.logout();
            SidebarLayout.logoutLoginToggle('logout');
            MainLayout.hideAdminControl();
        });
    });

}(jQuery));
