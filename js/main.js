$('body').toggleClass('loaded');
$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);

});
script>
// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}
</script>
