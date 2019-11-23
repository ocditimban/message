class LoginForm {
    // use ajax
    login(authorName, password) {
        $.ajax({
            method: "POST",
            url: "login.php",
            data: { authorName: authorName, password: password }
        })
        .done(function( msg ) {
            // save localStorage
            localStorage.addItem('user');
            return msg;
        })
        .fail(function() {
            return false;
        })
        return false;
    }

    logout() {
        localStorage.removeItem('user');
        // clear localStorage
    }
}