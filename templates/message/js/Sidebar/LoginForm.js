class LoginForm {
    // use ajax
    login(authorName, password) {
        var data = JSON.stringify({'author_name': authorName, 'password': password});
        $.ajax({
            type: "POST",
            contentType: 'application/json',
            dataType: 'json',
            url: "login",
            data: data,
            cache: false
        })
        .done(function( msg ) {
            if (msg.status == true) {
                localStorage.setItem('token', msg.message.token);
                console.log('set');
            }
            return msg;
        })
        .fail(function() {
            return false;
        })
        return false;
    }

    logout() {
        localStorage.removeItem('token');
    }
}