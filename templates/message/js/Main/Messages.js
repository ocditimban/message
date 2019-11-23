class Messages {
    
    getPage = () => {
        var page = sessionStorage.getItem('page');
        return (page) ? page - 1 : 0;
    }

    // use ajax
    refreshPage() {
        let page = this.getPage();
        
        var myClass = this;    
        $.ajax({
            method: "GET",
            url: "get/messages?page=" + page + "&split=6",
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
        let page = this.getPage();
        var myClass = this;
        $.ajax({
            method: "GET",
            url: "get/messages?page=" + page + "&split=6",
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
        let page = this.getPage();
        for(var i = 1; i <= total_page; i++) {
            let activeClass = 'page-item';
            if ((page + 1) == i) {
                activeClass += ' active';
            }
            html += `<li class="${activeClass}"><a class="page-link page page-${i} mx-2" href="#">${i}</a></li>`;
        }
        $('#pages-wrapper .pagination').html(html);
    }

    sendMessageToEditForm = (messageWrapper) => {
        let body = messageWrapper.find('.message .content').text();
        let authorName = messageWrapper.find('.message .author-name').text();
        messageWrapper.find(".edit-message-form [name='author_name']").val(authorName);
        messageWrapper.find(".edit-message-form [name='content']").val(body);
    }

    renderMessage = (messages) => {
        var html = '';
        html += '<div class="container"><div class="row no-gutters">';
        $.each(messages, function(index, obj) {
            html +=
                `
                <div class="col-lg-6 col-md-12 col-sm-12 message-${obj.id}">
                    <div class="message-wrapper">
                        <div class="message">
                            <p class="content mb-4">
                                <i class="start-quote fas fa-quote-left"></i>
                                ${obj.body}
                            </p>
                            <div class="row no-gutters">
                                <div class="author-name-created-wrapper col-10 row no-gutters">
                                    <span class="author-name col-12 mb-2"> ${obj.author_name} </span>
                                    <span class="created col-12"> ${obj.created} </span>
                                </div>
                                <div class="admin-control col-2">
                                    <i class="edit mx-1 far fa-edit"></i>
                                    <i class="delete far fa-trash-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div id="edit-message-form-${obj.id}" class="edit-message-form d-none">
                            <!-- Contact form -->
                            <form class ='edit-message-form'>
                                <div class="message-id d-none">
                                    ${obj.id}
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg" placeholder="Author Name" name="author_name">
                                    </div>
                                            
                                    <div class="form-group">
                                        <textarea class="form-control" name="content" rows="3">
                                            
                                        </textarea>
                                    </div>
                                    <input type="submit" class="btn btn-secondary btn-block" value="Send" name="submit">
                                    <button id="cancel-edit-message" class="btn btn-secondary btn-block">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
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