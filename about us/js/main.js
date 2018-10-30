$(window).load(function(){
  $('html,body').animate({scrillTop:0},200);
  $(".loading").fadeOut(1000,function(){
    $("#project-wrapper").animate({width:'100vw',opacity :'1'},600,function(){
      setTimeout($('body').css({'overflow':'auto'}),1000);
      $("#members-wrapper").css("display","block");
    });
  });
});

$(document).ready(function(){
  var arrow = $("#arrow-down img , #nav-items li:eq(0)"),
  scroll_bottom = $("body").height()+$(window).height(),
  button_project = $("#nav-items li:eq(1)"),
  $body = (window.opera) ? (document.compatMode =="CSS1Compat" ? $('html') : $('body')):$('html,body');

  // 導覽行動畫
  $("#OURPROJECT").click(function(){
    $("#OURPROJECT").css("color","#F9D53D");
    $("#TEAMMEMBERS").css("color","#ffffff");
    $("#pointer").stop().animate({right:'35px'},150);
    });
    $("#TEAMMEMBERS").click(function(){
    $("#TEAMMEMBERS").css("color","#F9D53D");
    $("#OURPROJECT").css("color","#ffffff");
    $("#pointer").stop().animate({right:'158px'},150);
    });
  window.onscroll = function() {ss()};
  function ss() {
  if (document.body.scrollTop < $("body").height()/2|| document.documentElement.scrollTop <$("body").height()/2){
    $("#OURPROJECT").css("color","#F9D53D");
    $("#TEAMMEMBERS").css("color","#ffffff");
    $("#pointer").stop().animate({right:'158px'},150);
  }
  if (document.body.scrollTop > $("body").height()/2|| document.documentElement.scrollTop >$("body").height()/2){
    $("#OURPROJECT").css("color","#ffffff");
    $("#TEAMMEMBERS").css("color","#F9D53D");
    $("#pointer").stop().animate({right:'35px'},150);
  }}

  // 箭頭點擊動畫
  arrow.click(function(){
    $body.stop().animate({
      scrollTop:scroll_bottom},850);
  });

  button_project.click(function(){
    $body.stop().animate({
      scrollTop:0},650);
  });

  $('.pic').mousemove((e)=>{
    e.target.style.transform = 'scale(1.4)';
    var x = e.pageX - 310;
    var y = e.pageY - 180;
    var element = '#d'+ e.target.alt;
    $(element).css({'display':'block','opacity':'1'});
    // $(element).css({'display':'block'});
    // setTimeout(()=>{$(element).css({'opacity':'1'});},300);
    $(element).css({'left':x,'top':y});
  })
  $('.pic').mouseout((e)=>{
    $('.pic').css({'transform':'scale(1)'});
    var element = '#d'+ e.target.alt;
    $(element).css({'display':'none','opacity':'0'});
    // $(element).css({'opacity':'0'});
    // setTimeout(()=>{$(element).css({'display':'none'});},300);
  })
  $(".member").click(function(){
    var member = this.id,
    current_display = 0 ;

    $("#member0_intro").stop().animate({opacity:'0'},550,function(){
      // document.getElementById("member0_intro").style.WebkitAnimationName = "pic_animate_in" ;
      //
   // $("#member0_intro").css({'display' : 'none' });
      //$("#member0_intro").stop().animate({top:'100px',opacity:'1'},500,)
        $("#member1_intro").stop().animate({/*top:'80px',*/opacity:'1'},500,)
    });

 /*   switch(member){
      case 'member0':
        if(current_display==0) break;
        else{
          $(".members-intro li:eq("+current_display+")").animate({opacity:'1'},500);
        }

        current_display = 0;
        break;


      case 'member1':
        if(current_display==1) break;
        else{
        };         
        current_display = 1;
        break;

      case 'member2':
        if(current_display==2) break;
        else{
          $(".members-intro li:eq("+current_display+")").animate({top:'-50px',opacity:'1'},500);
        }

        current_display = 2;
        break;
      case 'member3':
        if(current_display==3) break;
        else{
          $(".members-intro li:eq("+current_display+")").animate({opacity:'1'},500);
        }

        current_display = 3;
        break;
      case 'member4': 
        if(current_display==4) break;
        else{
          $(".members-intro li:eq("+current_display+")").animate({opacity:'1'},500);
        }

        current_display = 4;
        break;
    }*/

  });

});
