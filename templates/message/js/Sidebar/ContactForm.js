
class ContactForm {
    // use ajax
    sendMessage(authorName, body) {
        var data = JSON.stringify({'body': body, 'authorName': authorName});
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
}