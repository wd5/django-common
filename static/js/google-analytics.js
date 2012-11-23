var _gaq = _gaq || [];
_gaq.push(['_setAccount','UA-15254139-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();  

window.onerror = function(msg, url, line) {
    var preventErrorAlert = true;
    _gaq.push(['_trackEvent', 'JS Error', msg, navigator.userAgent + ' -> ' + url + " : " + line]);
    return preventErrorAlert;
};
jQuery.error = function (message) {
    _gaq.push(['_trackEvent', 'jQuery Error', message, navigator.userAgent]);
}