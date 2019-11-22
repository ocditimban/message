class Messages {
    // use ajax
    refreshPage(pageNumber) {
        $.ajax({
            method: "GET",
            url: "message.php/" . pageNumber
        })
        .done(function( msg ) {
            // pre render page message
            $('messages').prerender();// call page htlm and args inside
            return msg;
        })
        .fail(function() {
            return false;
        })
        return false;
    }

    showAdminControl() {
        if (localStorage.getItem('user')) {
            $('.admin-control').removeClass('.d-none');
        }
    }

    hideAdminControl() {
        if (!localStorage.getItem('user')) {
            $('.admin-control').addClass('.d-none');
        }   
    }
}

export default ContactForm;