class Messages {
    
    // use ajax
    refreshPage(pageNumber) {
        var myClass = this;    
        $.ajax({
            method: "GET",
            url: "get/messages?page=" + pageNumber + "&split=2",
            cache: false
        })
        .done(function( msg ) {
            myClass.renderMessage(msg.message.messages);
            myClass.renderPage(msg.message.total_page);
            return msg;
        })
        .fail(function() {
            return false;
        })
        return false;
    }

    // edit page


    init() {
        var myClass = this;
        $.ajax({
            method: "GET",
            url: "get/messages?page=0&split=2",
            cache: false
        })
        .done(function( msg ) {
            myClass.renderMessage(msg.message.messages);
            myClass.renderPage(msg.message.total_page);
            return msg;
        })
        .fail(function() {
            return false;
        })
        
        return false;
    }

    renderPage = (total_page) => {
        var html = '';
        for(var i = 1; i <= total_page; i++) {
            html += `<span class="page page-${i}">${i}</span>`;
        }
        $('#pages-wrapper').html(html);
    }

    sendMessageToEditForm = (messageWrapper) => {
        let body = messageWrapper.find('.message .content').text();
        let authorName = messageWrapper.find('.message .author-name').text();
        messageWrapper.find(".edit-message-form [name='author_name']").val(authorName);
        messageWrapper.find(".edit-message-form [name='content']").val(body);
    }

    renderMessage = (messages) => {
        var html = '';
        html += '<div class="container"><div class="row">';
        $.each(messages, function(index, obj) {
            html +=
                `
                <div class="col-lg-6 col-md-6 col-sm-12 message-${obj.id}">
                    <div class="message-wrapper">
                        <div class="message">
                            <p class="content"> ${obj.body}</p>
                            <div class="row">
                                <p class="author-name"> ${obj.author_name} </p>
                                <p class="created"> ${obj.created} </p>
                                <div class="admin-control">
                                    <div class="edit">Edit</div>
                                    <div class="delete">Delete</div>
                                </div>
                            </div>
                        </div>
                        <div id="edit-message-form-${obj.id}" class="edit-message-form">
                            <!-- Contact form -->
                            <form class ='edit-message-form'>
                                <div class="message-id">
                                    ${obj.id}
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg" placeholder="Author Name" name="author_name">
                                    </div>
                                            
                                    <div class="form-group">
                                        <textarea class="form-control form-control-lg" name="content">
                                            
                                        </textarea>
                                    </div>
                                    <input type="submit" class="btn btn-secondary btn-block" value="Send" name="submit">
                                    <button id="cancel-edit-message" class="btn btn-secondary btn-block">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    
                    
                    if has user session
                        show edit message form
                    else 
                        delete message form
                </div>`
        });

        html += '</div></div>';
        $('.messages-wrapper').html(html);
    }

    showAdminControl() {
        if (localStorage.getItem('user')) {
            $('.admin-control').removeClass('.d-none');
        }
    }

    hideAdminControl() {
        if (!localStorage.getItem('user')) {
            $('.admin-control').addClass('.d-none');
        }   
    }
}