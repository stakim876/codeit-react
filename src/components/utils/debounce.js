// ~/instagram-react/src/utils/debounce.js

export function debounce(Callback, delay) {
    let timer;

    return (...param) => {
      clearTimeout(timer);
      timer = setTimeout(() => Callback(...param), delay);   
    };
}