// Smartsupp Live Chat — single place to update when you change accounts.
// Replace _smartsupp.key below with your new key, or replace this entire file
// with the script from your new Smartsupp dashboard (without <script> tags).
var _smartsupp = _smartsupp || {};
_smartsupp.key = '80d6418a3edc2522ab8492740e0780e8f05f1e13';
window.smartsupp || (function(d) {
  var s, c, o = function() { o._.push(arguments); };
  o._ = [];
  window.smartsupp = o;
  s = d.getElementsByTagName('script')[0];
  c = d.createElement('script');
  c.type = 'text/javascript';
  c.charset = 'utf-8';
  c.async = true;
  c.src = 'https://www.smartsuppchat.com/loader.js?';
  s.parentNode.insertBefore(c, s);
})(document);
