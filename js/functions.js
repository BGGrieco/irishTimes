$(document).ready(function(){
//Handle button clicks and displays
  $(".one").addClass("slideInLeft");
  $(".two").addClass("slideOutRight");
  $(".three").addClass("slideOutRight");

  var page = 0;
  var whichClass = $(".one").hasClass("slideInRight");

  $(".next").click(function(){
    switch(page){
      case 0:
        page = 1;
        switch(whichClass){
          case true:
            $(".one").removeClass("slideInLeft");
            $(".one").addClass("slideOutLeft");
            break;
          default:
          $(".one").removeClass("slideInLeft");
          $(".one").addClass("slideOutLeft");
        }
        $(".two").removeClass("slideOutRight");
        $(".two").addClass("slideInRight");
        break;
      case 1:
        page = 2;
        $(".three").removeClass("slideOutRight");
        $(".three").addClass("slideInRight");
        $(".two").removeClass("slideInRight");
        $(".two").removeClass("slideInLeft");
        $(".two").addClass("slideOutLeft");
        break;
      default:
      console.log("Page is: " + page);
    }
  });

  $(".prev").click(function(){
    switch(page){
      case 1:
        page = 0;
        switch(whichClass){
          case true:
            $(".one").removeClass("slideOutLeft");
            $(".one").addClass("slideInLeft");
            break;
          default:
          $(".one").removeClass("slideOutLeft");
          $(".one").addClass("slideInLeft");
        }
        $(".two").removeClass("slideInRight");
        $(".two").addClass("slideOutRight");
        break;
      case 2:
        page = 1;
        $(".three").removeClass("slideInRight");
        $(".three").addClass("slideOutRight");
        $(".two").removeClass("slideOutLeft");
        $(".two").addClass("slideInLeft");
        break;
      default:
      console.log("Page is: " + page);
    }
  });

  //Grow text area with content
  function textAreaAdjust(o){
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
  }
});
