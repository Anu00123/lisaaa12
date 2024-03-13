
$(".navbar-toggler").click(function(){
    $(this).toggleClass("collapsed");
    var ariaExpanded = $(this).attr("aria-expanded");
    if (ariaExpanded === "true") {
      $(this).find("i").removeClass("fa-times").addClass("fa-bars");
    } else {
      $(this).find("i").removeClass("fa-bars").addClass("fa-times");
    }
  });
