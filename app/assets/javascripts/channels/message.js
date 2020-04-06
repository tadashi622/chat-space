$(function(){
  function buildHTML(message){
    if (message.image){
      var html =
      `<div class="message" data-message-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
        <div class="upper-message__date">
            ${message.created_at}
        </div>
      </div>
        <div class=".lower-message__content">
              ${message.content}
          </div>
        <img src=${message.image} > 
      `
    return html;
    }else{
      var html =
        `<div class="message" data-message-id=${message.id}>
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
    var reloadMessages = function() {
      var last_message_id = $('.message:last').data("message-id");
      $.ajax({
        //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
        url: "api/messages",
        //ルーティングで設定した通りhttpメソッドをgetに指定
        type: 'get',
        dataType: 'json',
        //dataオプションでリクエストに値を含める
        data: {id: last_message_id}
      })
      .done(function(messages) {
        if (messages.length !== 0) {
              //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      //メッセージが入ったHTMLに、入れ物ごと追加
      $('.chat-messages').append(insertHTML);
      $('.chat-messages').animate({ scrollTop: $('.chat-messages')[0].scrollHeight});
      }
    })
      .fail(function() {
        alert('error');
      });
    };
    if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
    };
});
