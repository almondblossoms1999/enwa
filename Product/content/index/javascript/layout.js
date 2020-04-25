function navigate(site) {	
    window.location.href = site;
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$("#input_search").on("focus", function () {
  $(this).parent("label").addClass("active");
});

$("#input_search").on("blur", function () {
  if ($(this).val().length == 0)
    $(this).parent("label").removeClass("active");
});