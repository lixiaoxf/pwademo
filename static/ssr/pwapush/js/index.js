import $ from 'jquery';
var msg = $('.pwapush-form span');
var val = $('.pwapush-form input')
var btn = $('.pwapush-form p');
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
      var c = ca[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
  }
btn.on('click',function(){
    $.ajax({
        url:'/pwapush/push',
        type: 'POST',
        data: JSON.stringify({
            msg:val.val()
        }),
        headers: {
            'x-csrf-token': getCookie('csrfToken'),
            'content-type': 'application/json'
        },
        success:function(res){
            msg.html(res.data)
        }
    })
})