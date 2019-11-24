class LoginForm {
    // use ajax
    login(authorName, password) {
        var data = JSON.stringify({'author_name': authorName, 'password': password});
        return $.ajax({
            type: "POST",
            contentType: 'application/json',
            dataType: 'json',
            url: "login",
            data: data,
            cache: false,
            async: !1,
        })
        .done(function( msg ) {
            if (msg.status == true) {
                localStorage.setItem('token', msg.message.token);
                localStorage.setItem('author_name', authorName);
            }
            return msg;
        })
        .fail(function() {
            return false;
        })
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('author_name');
    }
}