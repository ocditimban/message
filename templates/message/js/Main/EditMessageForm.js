
class EditMessageForm {
    // use ajax
    sendMessage(messageId, authorName, body) {
        let token = localStorage.getItem('token');
        var data = JSON.stringify({'body': body, 'author_name': authorName});
        $.ajax({
            type: "PUT",
            contentType: 'application/json',
            dataType: 'json',
            url: "update/message?token=" + token + "&message_id=" + messageId,
            data: data
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
        let token = localStorage.getItem('token');

        $.ajax({
            type: "PUT",
            method: "DELETE",
            url: "delete/message?token=" + token + "&message_id=" + messageId,
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