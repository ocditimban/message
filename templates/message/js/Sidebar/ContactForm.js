
class ContactForm {
    // use ajax
    sendMessage(authorName, body) {
        var data = JSON.stringify({'body': body, 'author_name': authorName});
        return $.ajax({
            type: "POST",
            contentType: 'application/json',
            dataType: 'json',
            url: "add/message",
            data: data,
            cache: false,
            async: !1,
        })
        .done(function( msg ) {
            return msg;
        })
        .fail(function() {
            return false;
        })
    }

    addAuthorNameDefault() {
        if (!localStorage.getItem('token') || !localStorage.getItem('author_name')) {
            console.log('removed token');
            $('#contact-form').find("[name='author_name']").prop('readonly', false);
            return ;
        }

        let authorName =localStorage.getItem('author_name');
        $('#contact-form').find("[name='author_name']").val(authorName);
        $('#contact-form').find("[name='author_name']").prop('readonly', true);
    }

    clearForm() {
        if (!localStorage.getItem('token')) { 
            $('#contact-form').find("[name='author_name']").val('');
        }
        $('#contact-form').find("[name='body']").val('');
    }
}