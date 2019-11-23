

(function ($) {
    // jQuery
    
    jQuery(document).ready(function () {
        SidebarLayout = new SidebarLayout();
        ContactForm = new ContactForm();
        LoginForm = new LoginForm();

        $( "#add-message" ).click(function() {
            SidebarLayout.showContactForm();
        });

        $( "#contact-form" ).submit(function( event ) {
            event.preventDefault();
            var authorName = $(this).find("[name='author_name']").val();
            var body = $(this).find("[name='body']").val();
            ContactForm.sendMessage(authorName, body);
            Messages.refreshPage(0);
            // SidebarLayout.hideContactForm();
        });

        // case login
        $( "#login-link" ).click(function() {
            SidebarLayout.showLoginForm();
            SidebarLayout.logoutLoginToggle('login');
        });

        $( "#login-form" ).submit(function( event ) {
            event.preventDefault();
            var authorName = $(this).find("[name='author_name']").val();
            var password = $(this).find("[name='password']").val();

            LoginForm.login(authorName, password);
            // send message by popup
            //SidebarLayout.hideLoginForm();
            //SidebarLayout.logoutLoginToggle('logout');
            //Messages.showAdminControl();
        });

        // case logout
        $( "#logout-link" ).click(function() {
            // clear user in localStorage
            LoginForm.logout();
            SidebarLayout.logoutLoginToggle('logout');
            Messages.hideAdminControl();
            // show logout link
        });
    });

}(jQuery));
