$(document).ready(function(){
  // Handle button clicks and displays
  // sessionStorage.name = $("#name").val();
  // sessionStorage.story = $("#story").val();

  // Do not change slide unless name field returns a value
  // $(".next").click(function(){
  //   if (name == '') {
  //     console.log(name);
  //   }
  //   else {
  //     handleClick();
  //   }
  // });

  // Do not submit unless textarea returns a value
  // $(".send").click(function(){
  //   if (story == '') {
  //     console.log(name);
  //   }
  //   else {
  //     $(".notification").css("display", "block");
  //   }
  // });

  // Set initial buttons to be displayed
  $(".next").css("display", "block");
  $(".prev").css("display", "none");
  $(".send").css("display", "none");

  // Set page display
  $(".one").addClass("slideInLeft");
  $(".two").addClass("slideOutRight");
  $(".three").addClass("slideOutRight");

  var page = 0;
  var whichClass = $(".one").hasClass("slideInRight");

  // Handle "Next" click
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
            $(".send").css("display", "none");
            break;
          default:
          $(".one").removeClass("slideInLeft");
          $(".one").addClass("slideOutLeft");
          $(".next").css("display", "block");
          $(".prev").css("display", "block");
          $(".send").css("display", "none");
        }
        $(".two").removeClass("slideOutRight");
        $(".two").addClass("slideInRight");
        $(".next").css("display", "block");
        $(".prev").css("display", "block");
        $(".send").css("display", "none");
        $("#ovalTwo").addClass("active");
        $("#ovalThree").removeClass("active");
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
        $("#ovalTwo").addClass("active");
        $("#ovalThree").addClass("active");
        break;
      default:
      console.log("Page is: " + page);
    }
  });

  // Handle "Previous" click
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
            $(".send").css("display", "none");
            break;
          default:
          $(".one").removeClass("slideOutLeft");
          $(".one").addClass("slideInLeft");
          $(".next").css("display", "block");
          $(".prev").css("display", "none");
          $(".send").css("display", "none");
        }
        $(".two").removeClass("slideInRight");
        $(".two").addClass("slideOutRight");
        $(".next").css("display", "block");
        $(".prev").css("display", "none");
        $(".send").css("display", "none");
        $("#ovalTwo").removeClass("active");
        $("#ovalThree").removeClass("active");
        break;
      case 2:
        page = 1;
        $(".three").removeClass("slideInRight");
        $(".three").addClass("slideOutRight");
        $(".two").removeClass("slideOutLeft");
        $(".two").addClass("slideInLeft");
        $(".next").css("display", "block");
        $(".prev").css("display", "block");
        $(".send").css("display", "none");
        $("#ovalTwo").addClass("active");
        $("#ovalThree").removeClass("active");
        break;
      default:
      console.log("Page is: " + page);
    }
  });
});
