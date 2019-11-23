

(function ($) {
    // jQuery
    
    jQuery(document).ready(function () {
        SidebarLayout = new SidebarLayout();
        ContactForm = new ContactForm();

        $( "#add-message" ).click(function() {
            SidebarLayout.showContactForm();
        });

        $( "#contact-form" ).submit(function( event ) {
            event.preventDefault();
            // authorName = $("input[name=authorName]").value();
            // body = $("input[name=body]").value();
            result = ContactForm.sendMessage(authorName = 'something' , body = 'something');
            if (result) {
                // send message by popup
                SidebarLayout.hideContactForm();
                Messages.refreshPage(1);
                // refresh message to message list at page
            }
        });

        // case login
        $( "#login-link" ).click(function() {
            SidebarLayout.showLoginForm();
            SidebarLayout.logoutLoginToggle('login');
        });

        $( "#login-form" ).submit(function( event ) {
            event.preventDefault();
            
            authorName = $("input[name=authorName]").value();
            password = $("input[name=password]").value();
            result = LoginForm.login(authorName, password);
            if (result) {
                // send message by popup
                SidebarLayout.hideLoginForm();
                SidebarLayout.logoutLoginToggle('logout');
                Messages.showAdminControl();
            }
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
