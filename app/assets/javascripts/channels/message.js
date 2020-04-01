$(function(){
  function buildHTML(message){
    if (message.image){
      var html =
      `<div class="message">
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
        <div class="upper-message__date">
            ${message.created_at}
        </div>
       <img src=${message.image} > 
      </div>`
    return html;
    }else{
      var html =
        `<div class="message">
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
              ${message.content}
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
$('.chat-messages').append(html);
    $("form")[0].reset();
    $('.chat-messages').animate({ scrollTop: $('.chat-messages')[0].scrollHeight});
    $('.form__btn').prop("disabled",false);
  })
    .fail(function() {
     alert("メッセージ送信に失敗しました");
    })
  });
});
