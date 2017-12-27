
// var M={
//     init:function(){
//         this.mask_show;
//
//
//     },
//     mask_show:function () {
//         $('.mask').fadeIn(1000)
//     }
// }
// $(function(){M.init();});

$(function(){
	 $('.mask').fadeIn(1000);
	 $('.mask').find('.close_icon').on('click',function () {
         $('.mask').fadeOut(1000);
     })
});