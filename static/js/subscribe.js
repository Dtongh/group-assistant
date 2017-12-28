$(function(){


    $('input.check').on('blur',function () {
        var that=this;
             var act=$(this).attr('act');
             var val=$(this).val().replace(/\s/g, "");
             if(val!=''){
                 check(act,val,function (data) {
                     $(that).val(data)
                 })
             }
    })
});


function check(act,val,fun) {
    var val = val.trim();
    if(act=='name'){
        var role = /^[\u4E00-\u9FA5]{2,4}$/;
        if (role.test(val) == false) {
            showToast({
                title: '姓名应为中文'
            })
        }else {
            fun(val)
        };
    } else if (act=='email'){
        var role = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (role.test(val) == false) {
            showToast({
                title: '邮箱格式有误'
            })
        }else {
            fun(val)
        };
    } else if(act=='tel'){
        var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
        var isMob = /^((\+?86)|())?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
        if (isMob.test(val) || isPhone.test(val)){
          fun(val)
        }else{
           showToast({
               title: '电话格式有误'
            })
        }
    }else if(act=='url'){
        var role = /((https|http|ftp|rtsp|mms):\/\/)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/g;


        if (role.test(val) == false) {
           showToast({
               title: '网址格式有误'
            })
        }else {
            fun(val)
        };
    }else if(act=='text'){
        var str = "[@/'\"#~`$%&+^！!S=*]+";
        var reg = new RegExp(str);
        if (reg.test(val)) {
            showToast({
                title: '不能含有特殊字符'
            })
        }else {
            fun(val)
        }
    }else if(act=='qq'){

        var str = RegExp(/^[1-9][0-9]{4,9}$/);

        if (!str.test(val)) {
           showToast({
                title: 'QQ格式有误'
            })
        }else {
            fun(val)
        }
    }
}

function  showToast( data) {
    $('.mask').find('.layer_box').text(data.title)
    $('.mask').fadeIn(500);
    setTimeout(function () {
        $('.mask').fadeOut(500);
    },1000)
}
