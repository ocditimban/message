
(function ($) {
    jQuery(document).ready(function () {
        MainLayout = new MainLayout();
        EditMessageForm = new EditMessageForm();
        Messages = new Messages();

        Messages.init();

        $('.messages-wrapper').delegate('.admin-control .edit','click',function() {
            var messageWrapper = $(this).closest(".message-wrapper");
            var messageId = messageWrapper.find('.message-id');
            
            // will be removed later than
            // MainLayout.showEditForm(messageId);
            Messages.sendMessageToEditForm(messageWrapper);
        });

        $('.messages-wrapper').delegate('.admin-control .delete','click',function() {
            var messageWrapper = $(this).closest(".message-wrapper");
            let messageId = $.trim(messageWrapper.find('.message-id').text());
            EditMessageForm.deleteMessage(messageId);
            Messages.refreshPage(pageId = 0);
        });


        // detach form
        $('.messages-wrapper').delegate('.edit-message-form :input','change',function( event) {
            $(this).closest('.edit-message-form').data('changed', true);
        });

        // find the form detech
        $('.messages-wrapper').delegate('.edit-message-form','submit',function( event) {
            event.preventDefault();
            if($(this).closest('.edit-message-form').data('changed')) {
                var messageWrapper = $(this).closest(".message-wrapper");
                let messageId = $.trim(messageWrapper.find('.message-id').text());
                let authorName = messageWrapper.find(".edit-message-form [name='author_name']").val();
                let content = messageWrapper.find(".edit-message-form [name='content']").val();
                // EditMessageForm.up
                EditMessageForm.sendMessage(messageId, authorName, content);
                Messages.refreshPage();
                // if (result) {
                //     // send message by popup
                //     MainLayout.hideEditForm();
                //     Messages.refreshPage(1);
                //     // refresh message to message list at page
                // }
             }
            
        });

        $('#pages-wrapper').delegate('.page','click',function() {
            $(this).closest(".page-item").addClass('active');
            var pageId = $.trim($(this).text());
            sessionStorage.setItem('page', pageId);
            Messages.refreshPage(pageId - 1);
        });
    });

}(jQuery));
