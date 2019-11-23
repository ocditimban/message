class MainLayout {

    constructor(element) {
        this.element = this;
    }

    showEditForm(messageWrapper) {
        messageWrapper.find('.message').addClass('.d-none');
        messageWrapper.find('.edit-message-form').removeClass('.d-none');
    }

    hideEditForm() {
        messageWrapper.find('.edit-message-form').addClass('.d-none');
        messageWrapper.find('.message').removeClass('.d-none');
    }
}