function numo_messgr_fix() {
    mess = document.querySelectorAll('.header-messengers');
    for (let ies=0; ies<mess.length; ies++) {
        mess[ies].style.display = 'block';
    }
    svgs = document.querySelectorAll('.header-messengers svg');
    for (let ies=0; ies<svgs.length; ies++) {
        svgs[ies].tabindex = '-1';
        svgs[ies].role = 'none';
        svgs[ies].ariaHidden = 'true';
    }
    submess = document.querySelectorAll('.header-messengers > *');
    for (let ies=0; ies<submess.length; ies++) {
        submess[ies].style.display = 'inline';
    }
}

function numo_fixes() {
    numo_messgr_fix();
}

numo_fixes();
window.alert('Fixed');