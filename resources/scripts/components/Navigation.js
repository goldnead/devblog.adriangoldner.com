import {
  disableBodyScroll,
  enableBodyScroll
} from "body-scroll-lock";
import {
  addClass,
  removeClass,
  hasClass,
  animateHeight
} from "../lib/utils";


export const initNavigation = () => {
  if (hasNavigation()) {
    start();
  }
};

/**
 * Checks if page has autocomplete component
 * @return {Boolean}
 */
const hasNavigation = () => {
  return document.getElementsByClassName("nav").length > 0;
};

const start = () => {
  window.navigation = () => {
    return {
      isOpen: false,
      showNavbar: true,
      lastScrollPosition: 0,
      shrinkNavbar: false,
      scrollThreshold: 300,
      init() {
        window.addEventListener("scroll", this.onScroll);
      },
      toggleMobileNav() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
          console.log({...this.$refs})
          disableBodyScroll(this.$refs.nav, {
            reserveScrollBarGap: true
          });
        } else {
          enableBodyScroll(this.$refs.nav);
        }
      },
      onScroll() {
        // Get the current scroll position
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollPosition > this.scrollThreshold) {
          this.shrinkNavbar = true;

          // Stop executing this function if the difference between
          // current scroll position and last scroll position is less than some offset
          if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
            return;
          }
          // Here we determine whether we need to show or hide the navbar
          this.showNavbar = currentScrollPosition < this.lastScrollPosition;
          // Set the current scroll position as the last scroll position
          this.lastScrollPosition = currentScrollPosition;
        } else {
          this.shrinkNavbar = false;
        }
      },
    }
  }
}
