$('body').toggleClass('loaded');
$(document).ready(function() {
}
 window.alert("NEW DOMAIN YES!!!"); 
 window.hasOwnProperty('alert'); // false
window.alert = null;
window.hasOwnProperty('alert'); // true
delete window.alert;
window.hasOwnProperty('alert'); // false