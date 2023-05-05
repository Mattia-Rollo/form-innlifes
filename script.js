$(document).ready(function () {
    if ($(window).width() < 560) {
        $('.step:not(:first)').hide();
    }
});