//= require_tree .
//
//

function pageHandler(page){

 // console.log(page);
  
  $('#nav').find('a').removeClass('active');
  $('#nav').find('a[href=#'+page+']').addClass('active');

  $('div.page').hide();
  $('#' + page).show();
}


function hashChange(href){

  if (!href){
    href = window.location.hash;
  }

  if (href === "#blog" || window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') === "page"){
    pageHandler('blog');
  } else if (href === "#contact") {
    pageHandler('contact');
  } else if (href === "#union") {
    pageHandler('union');
  } else {
    pageHandler('home');
  }
}

$(window).load(function(){

  hashChange();

});


$(document).ready(function(){

  $('#logo').find('a').click(function(){
    hashChange('home');
    window.location.hash = "";
    return false;
  });

  $("#nav").find('a').click(function(){
    hashChange($(this).attr('href'));
    window.location.hash = $(this).attr('href');
    window.scrollTo(0,0);
    return false;
  });

});
