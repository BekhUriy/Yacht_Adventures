var mybutton = document.getElementById('myBtn');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
// Bind your button click, scroll direction and effect speed
document.getElementById('myBtn').onclick = function () {
  scrollTo(0, 600); // it will take 8 seconds to reach to top.
};

// Element to move, time in ms to animate
function scrollTo(element, duration) {
  var e = document.documentElement;
  if (e.scrollTop === 0) {
    var t = e.scrollTop;
    ++e.scrollTop;
    e = t + 1 === e.scrollTop-- ? e : document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
  if (duration <= 0) return;
  if (typeof from === 'object') from = from.offsetTop;
  if (typeof to === 'object') to = to.offsetTop;

  scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
  if (t01 < 0 || t01 > 1 || speed <= 0) {
    element.scrollTop = xTo;
    return;
  }
  element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
  t01 += speed * step;
  debugger;
  setTimeout(function () {
    scrollToX(element, xFrom, xTo, t01, speed, step, motion);
  }, step);
}

function easeOutCuaic(t) {
  t--;
  return t * t * t + 1;
}
