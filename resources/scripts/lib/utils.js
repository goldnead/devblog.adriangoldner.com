/**
 * * Selection from https://github.com/CodyHouse/codyhouse-framework/blob/master/main/assets/js/util.js
 *
 *	class manipulation functions
 */
export const hasClass = (el, className) => {
  if (el.classList) return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};

export const addClass = (el, className) => {
  var classList = className.split(" ");
  if (el.classList) el.classList.add(classList[0]);
  else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
  if (classList.length > 1) addClass(el, classList.slice(1).join(" "));
};

export const removeClass = (el, className) => {
  var classList = className.split(" ");
  if (el.classList) el.classList.remove(classList[0]);
  else if (hasClass(el, classList[0])) {
    var reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
  if (classList.length > 1) removeClass(el, classList.slice(1).join(" "));
};

export const toggleClass = (el, className, bool) => {
  if (bool) addClass(el, className);
  else removeClass(el, className);
};

/*
	Smooth Scroll
*/
export const scrollTo = (final, duration, cb, scrollEl) => {
  var element = scrollEl || window;
  var start = element.scrollTop || document.documentElement.scrollTop,
    currentTime = null;

  if (!scrollEl) start = window.scrollY || document.documentElement.scrollTop;

  var animateScroll = timestamp => {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    if (progress > duration) progress = duration;
    var val = Math.easeInOutQuad(progress, start, final - start, duration);
    element.scrollTo(0, val);
    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      cb && cb();
    }
  };

  window.requestAnimationFrame(animateScroll);
};

/*
	Animate height of an element
*/
export const animateHeight = function(start, to, element, duration, cb) {
  var change = to - start,
    currentTime = null;

  var animateHeight = function(timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    if (progress > duration) progress = duration;
    //var val = parseInt((progress / duration) * change + start);
    var val = Math.easeInOutQuad(progress, start, change, duration);
    element.style.height = val + "px";
    if (progress < duration) {
      window.requestAnimationFrame(animateHeight);
    } else {
      if (cb) cb();
    }
  };

  //set the height of the element before starting animation -> fix bug on Safari
  element.style.height = start + "px";
  window.requestAnimationFrame(animateHeight);
};

export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

export const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

/*
	Animation curves
*/
Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
