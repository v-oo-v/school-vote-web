let timer;
export default function debounce(cb, wait) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    cb.call();
  }, wait);
}