const getCookie = (name) => {
    const value = ' ' + document.cookie;
    console.log('value', `==${value}==`);
    const parts = value.split(' ' + name + '=');
    return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};

const setCookie = function (name, value, exparyDays, domain, path, secure) {
    const exdate = new Date();
    exdate.setHours(
        exdate.getHours() + (typeof exparyDays !== 'number' ? 365 : exparyDays) * 24
    );
    document.cookie = 
    name +
    '=' +
    value +
    ';expires=' +
    exdate.toUTCString() +
    ';path=' +
    (path || '/') +
    (domain ? ';domain=' + domain : '') +
    (secure ? ';secure' : '')
};

(() => {
    const $cookieBanner = document.querySelector('.cookie_eu_banner');
    const $cookieBannerAgreeButton = $cookieBanner.querySelector('.agree_button');
    const $cookieBannerDeclineButton = $cookieBanner.querySelector('.decline_button');
    const cookieName = 'cookiesBanner';

    const hasCookie = getCookie(cookieName);

    if(!hasCookie) {
        $cookieBanner.classList.remove('hidden');
    };

    $cookieBannerAgreeButton.addEventListener('click', () => {
        // console.log('agree clicked');
        setCookie(cookieName, 'closed');
        $cookieBanner.remove();
    });

    $cookieBannerDeclineButton.addEventListener('click', () => {
        // console.log('decline clicked');
        $cookieBanner.remove();
    });
})();

// https://www.youtube.com/watch?v=htJ8o_yzRDw&ab_channel=MonsterlessonsAcademy

// https://www.privacypolicies.com/blog/cookie-notification-messages-examples/
// https://www.privacypolicies.com/cookie-consent/

// https://app.privacypolicies.com/