class MainLayout {

    constructor(element) {
        this.element = this;
    }

    showEditForm() {
        $('.message-wrapper').addClass('.d-none');
        $('.edit-message-form').removeClass('.d-none');
    }

    hideEditForm() {
        $('.edit-message-form').addClass('.d-none');
        $('.message-wrapper').removeClass('.d-none');
    }


    

}