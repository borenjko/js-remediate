function numo_messgr_fix() {
    submess = document.querySelectorAll('.header-messengers > *');
    for (let ies=0; ies<submess.length; ies++) {
        submess[ies].style.display = 'inline';
    }
}

function numo_fixes() {
    numo_messgr_fix();
}

numo_fixes();