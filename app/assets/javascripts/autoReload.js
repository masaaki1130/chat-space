$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="messagefile" data-message-id=${message.id}>
          <div class="messageview">
            <div class="messageview__name">
              ${message.user_name}
            </div>
            <div class="messageview__time">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message__content">
              ${message.content}
            </p>
            <img class="message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="messagefile" data-message-id=${message.id}>
        <div class="messageview">
          <div class="messageview__name">
            ${message.user_name}
          </div>
          <div class="messageview__time">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  let reloadMessages = function() {
    let last_message_id = $('.messagefile:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messagelist').append(insertHTML);
        $('.messagelist').animate({ scrollTop: $('.messagelist')[0].scrollHeight});
    }
  })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});