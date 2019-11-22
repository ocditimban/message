
(function ($) {
    jQuery(document).ready(function () {
        MainLayout = new MainLayout();
        EditMessageForm = new EditMessageForm();
        Messages = new Messages();

        $( ".admin-control .edit" ).click(function() {
            MainLayout.showEditForm();
        });

        $( ".admin-control .delete" ).click(function() {
            messageId = $("input[name=messageId]").value();
            EditMessageForm.deleteMessage(messageId);
            Messages.refreshPage(1);
        });

        $( "#edit-message-form" ).submit(function( event ) {
            event.preventDefault();
            // messageId = $("input[name=messageId]").value();
            // authorName = $("input[name=authorName]").value();
            // body = $("input[name=body]").value();
            result = EditMessageForm.sendMessage(messageId, authorName = 'something' , body = 'something');
            if (result) {
                // send message by popup
                MainLayout.hideEditForm();
                Messages.refreshPage(1);
                // refresh message to message list at page
            }
        });
        
        // case change pager
        $( ".pager" ).click(function() {
            pager = $("input[name=messageId]").value();
            Messages.refreshPage(pager);
        });
    });

}(jQuery));
