import Counter from './Counter.svelte';
import Header from './Header.svelte';

window.Counter = function (options) {
    return new Counter(options);
};
window.Header = function (options) {
    return new Header(options);
};
