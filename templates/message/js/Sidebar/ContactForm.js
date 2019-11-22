
class ContactForm {
    // use ajax
    sendMessage(authorName, body) {
        $.ajax({
            method: "POST",
            url: "some.php",
            data: { authorName: authorName, body: body }
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