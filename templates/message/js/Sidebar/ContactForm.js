
class ContactForm {
    // use ajax
    sendMessage(authorName, body) {
        var data = JSON.stringify({'body': body, 'author_name': authorName});
        $.ajax({
            type: "POST",
            contentType: 'application/json',
            dataType: 'json',
            url: "add/message",
            data: data,
            cache: false
        })
        .done(function( msg ) {
            return msg;
        })
        .fail(function() {
            return false;
        })
        return false;
    }

    addAuthorNameDefault() {
        if (!localStorage.getItem('token') || !localStorage.getItem('author_name')) {
            return ;
        }

        let authorName =localStorage.getItem('author_name');
        $('#contact-form').find("[name='author_name']").val(authorName);
        $('#contact-form').find("[name='author_name']").prop('readonly', true);
    }
}