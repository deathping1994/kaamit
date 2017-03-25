// this is a default yellow theme color you can customize color code from js/theme/style.changer.js
// // this is automatic click slider which clicks one of the option in the services section after some time. 
// // but this is just for demo purpose you can delete it . it won't hurt the layout

  function demo3(){
    $('#majic').trigger("click");
  }

  setTimeout(demo3,1000);
  

  // this code will work when you click one of the options of the services section . it will active the current item

  $('#majic').on('click',function(){
     $(this).children('a').css({
        'color':'#eab000 '
     }).children('h4').css({
        'color':'#eab000'
     });
     $('#pie').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
     $('#umberella').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
     $('#case').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
  });
  $('#pie').on('click',function(){
     $(this).children('a').css({
        'color':'#eab000 '
     }).children('h4').css({
        'color':'#eab000'
     });
     $('#majic').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
     $('#umberella').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
     $('#case').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
  });

  $('#umberella').on('click',function(){
     $(this).children('a').css({
        'color':'#eab000 '
     }).children('h4').css({
        'color':'#eab000'
     });
     $('#pie').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
     $('#majic').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
     $('#case').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
  });

   $('#case').on('click',function(){
     $(this).children('a').css({
        'color':'#eab000 '
     }).children('h4').css({
        'color':'#eab000'
     });
     $('#pie').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
     $('#majic').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
     $('#umberella').children('a').css({
        'color':'#404040 '
     }).children('h4').css({
        'color':'#404040'
     });
  });


  // for social icons hover effect

  $('.itemTeam ul li').on('mouseover',function(){
    $(this).css({
      'border-color':'#fff'
    }).children('a').css({
      'color':'#fff'
    });
  })
   $('.itemTeam ul li').on('mouseout',function(){
    $(this).css({
      'border-color':'#eab000'
    }).children('a').css({
      'color':'#eab000'
    });
  });

    // team section hover effect

  $('.itemTeam').on('mouseover',function(){
    $(this).css({
      'background-color':'#181818'
    }).find('h3').css({
      'color':'#eab000'
    }).next('h4').css({
      'color':'#eab000'
    });
  });

   $('.itemTeam').on('mouseout',function(){
    $(this).css({
      'background-color':'#fff'
    }).find('h3').css({
      'color':'#404040'
    }).next('h4').css({
      'color':'#707070'
    });
  });

    // fun facts hover effect u can customize it

   $('.itemFunFacts').on('mouseover',function(){
      $(this).css({
        'background-color':'#eab000',
        'border':'none',
        'border-radius':'0px'
      }).find('h2').css({
        'color':'#181818'
      }).next('h4').css({
        'color':'#181818'
      })
   });

    $('.itemFunFacts').on('mouseout',function(){
      $(this).css({
        'background-color':'transparent',
        'border-left':'1px solid #fff',
        'border-right':'1px solid #fff',
        'border-radius':'40px'
      }).find('h2').css({
        'color':'#fff'
      }).next('h4').css({
        'color':'#fff'
      })
   });