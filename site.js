// Mobile menu toggle
(function(){
  var nav=document.querySelector('nav'),btn=document.querySelector('.nav-toggle');
  if(!nav||!btn)return;
  function set(open){nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');}
  btn.addEventListener('click',function(){set(!nav.classList.contains('open'));});
  nav.querySelectorAll('.nav-links a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
})();
