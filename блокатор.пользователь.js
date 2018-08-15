// ==Юзерскрипта==
// @имя Смотерть аниме добавить блокатор
// @имен http://tampermonkey.net/
// @версия 0.1
// @описание выключится смотреть-аниме добавляет
// @Автор Gjmrd
// @матча https://smotret-anime.ru/*
// @включить https://smotret-anime.ru/*
// @включить https://shikimori.org/*
// @Грант нет
// ==/Телефон==

(функция() {
    вар watchedVideoToday = getCookieItem("watchedVideoToday");
    вар expireTime = (новая Дата()).setTime((новая Дата()).методов gettime() + (1000 * 60 * 60)); /* время в мс */
    setCookieItem('watchedVideoToday', +watchedVideoToday+1, '/');
    setCookieItem('watchedPromoVideo', (новая Дата()).методов gettime(), expireTime, '/');
})();
