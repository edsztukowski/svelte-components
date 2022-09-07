<script>
    export let btnType = 'primary';
    export let type = 'button';
    export let disabled = false;
    export let width = '100%';
</script>

<button {disabled} on:click {type} class={btnType} style="width: {width}"
    ><slot /></button
>

<style>
    button {
        height: 53px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        line-height: 21px;
        border-radius: 8px;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .primary {
        background: var(--gray3);
        color: var(--white);
        border: 2px solid var(--gray3);
    }

    .secondary {
        background: var(--white);
        color: var(--gray3);
        border: 2px solid var(--gray3);
    }

    button:hover {
        cursor: pointer;
    }

    .primary:hover {
        background: var(--gray2);
        color: var(--white);
        border: 2px solid var(--gray2);
    }

    .secondary:hover {
        background: var(--gray0);
        color: var(--gray3);
        border: 2px solid var(--gray3);
    }

    .primary:active,
    .secondary:active {
        background: var(--gray3);
        color: var(--white);
        border: 2px solid var(--gray3);
    }
    .primary:disabled,
    .secondary:disabled {
        opacity: 0.4;
        background: var(--gray1);
        color: var(--gray3);
        border: none;
        cursor: not-allowed;
    }
</style>
