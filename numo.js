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

function numo_linkblock_fix()
{
    services_list = document.querySelector('.services-tiles-list');
    for (let isl=0; isl<services_list.length; isl++) {
        services_list[isl].innerHTML = '<div class="services-tiles-list-item" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0%);" onlick="location.href='/'"> \
                    <div class="services-tiles-item" href="/skills"> \
                        <span class="services-tiles-item-image"> \
                            <img class="services-tiles-item-i" src="./themes/numo/assets/images/service-img-1.jpg" alt="" loading="lazy" width="472" height="320"> \
                        </span> \
                        <span class="services-tiles-item-wrap"> \
                            <h2 class="services-tiles-item-title">Навички дошкільняти</h2> \
                            <span class="services-tiles-item-text">Розвивайте дитину комплексно та гармонійно. Прості поради, цікаві вправи й ігри для всебічного розвитку дітей 2–6 років, що допоможуть їм опанувати навички, важливі для їхнього віку.</span> \
                            <a class="services-tiles-item-more" href="/">Детальніше →</a> \
                        </span> \
                    </div> \
                </div>' + services_list[isl].innerHTML;
    }
}

function numo_fixes() {
    numo_linkblock_fix();
}

numo_fixes();
window.alert('Fixed');