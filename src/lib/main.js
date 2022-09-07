import Counter from './Counter.svelte';
import Header from './Header.svelte';
import Button from './Button.svelte';
import TextField from './TextField.svelte';

window.Counter = function (options) {
    return new Counter(options);
};
window.Header = function (options) {
    return new Header(options);
};
window.Button = function (options) {
    return new Button(options);
};

window.TextField = function (options) {
    return new TextField(options);
};
