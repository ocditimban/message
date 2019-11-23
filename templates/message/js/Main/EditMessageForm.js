
class EditMessageForm {
    // use ajax
    sendMessage(messageId, authorName, body) {
        var data = JSON.stringify({'body': body, 'authorName': authorName});
        $.ajax({
            type: "PUT",
            contentType: 'application/json',
            dataType: 'json',
            url: "update/message?token=4367ed45&message_id=" + messageId,
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
        $.ajax({
            type: "PUT",
            method: "DELETE",
            url: "delete/message?token=4367ed45&message_id=" + messageId,
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