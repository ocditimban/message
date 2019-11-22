
class EditMessageForm {
    // use ajax
    sendMessage(authorName, body) {
        $.ajax({
            method: "PUT",
            url: "update.php",
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

    deleteMessage(messageId) {
        $.ajax({
            method: "DELETE",
            url: "delete.php/" . messageId
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