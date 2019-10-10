$(document).ready(function(){
//Handle button clicks and displays
  $(".next").css("display", "block");
  $(".prev").css("display", "none");
  $(".send").css("display", "none");

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
            $(".next").css("display", "block");
            $(".prev").css("display", "block");
            break;
          default:
          $(".one").removeClass("slideInLeft");
          $(".one").addClass("slideOutLeft");
          $(".next").css("display", "block");
          $(".prev").css("display", "block");
        }
        $(".two").removeClass("slideOutRight");
        $(".two").addClass("slideInRight");
        $(".next").css("display", "block");
        $(".prev").css("display", "block");
        break;
      case 1:
        page = 2;
        $(".three").removeClass("slideOutRight");
        $(".three").addClass("slideInRight");
        $(".two").removeClass("slideInRight");
        $(".two").removeClass("slideInLeft");
        $(".two").addClass("slideOutLeft");
        $(".next").css("display", "none");
        $(".prev").css("display", "block");
        $(".send").css("display", "block");
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
            $(".next").css("display", "block");
            $(".prev").css("display", "none");
            break;
          default:
          $(".one").removeClass("slideOutLeft");
          $(".one").addClass("slideInLeft");
          $(".next").css("display", "block");
          $(".prev").css("display", "none");
        }
        $(".two").removeClass("slideInRight");
        $(".two").addClass("slideOutRight");
        $(".next").css("display", "block");
        $(".prev").css("display", "none");
        break;
      case 2:
        page = 1;
        $(".three").removeClass("slideInRight");
        $(".three").addClass("slideOutRight");
        $(".two").removeClass("slideOutLeft");
        $(".two").addClass("slideInLeft");
        $(".next").css("display", "block");
        $(".prev").css("display", "block");
        $(".send").css("display", "block");
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
