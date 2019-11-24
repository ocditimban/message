class MainLayout {

    showEditForm(messageWrapper) {
        messageWrapper.find('.message').addClass('d-none');
        messageWrapper.find('.edit-message-form').removeClass('d-none');
    }

    hideEditForm(messageWrapper) {
        messageWrapper.find('.edit-message-form').addClass('d-none');
        messageWrapper.find('.message').removeClass('d-none');
    }

    showAdminControl() {
        $('.admin-control').removeClass('d-none');
    }

    hideAdminControl() {
        $('.admin-control').addClass( "d-none" );
    }
}