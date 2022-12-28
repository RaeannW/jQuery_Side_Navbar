(function () {
    'use strict';

    $('.navbar-btn').click(function () {
        $('.nav-container').toggle();
    });

    $('ul li ul').hide();
    $('.menulink').click(function () {
        let thisMenu = $(this).next('ul');
        $('ul li ul').not(thisMenu).hide();
        thisMenu.toggle();
    });

})();

