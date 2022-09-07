<script>
    import Button from './Button.svelte';
    import { count } from '../store/store';

    function increment() {
        count.update((n) => n + 1);
    }
</script>

<Button on:click={increment}>
    count is {$count}
</Button>
