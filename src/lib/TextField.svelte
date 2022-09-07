<script>
    export let value = '',
        label = '',
        hasError = false,
        placeholder = '',
        margin = '0 0 44px 0',
        type = 'text';

    /**
     * @param {HTMLInputElement} node
     */
    function typeAction(node) {
        node.type = type;
    }
</script>

<div
    class={hasError ? 'textContainer errorWrapper' : 'textContainer'}
    style="margin: {margin}"
>
    {#if hasError}
        <div class="errorField">Required</div>
    {/if}
    <label>{label}</label>
    <input aria-label={label} use:typeAction {placeholder} bind:value />
</div>

<style>
    .textContainer {
        position: relative;
        background: var(--white);
        height: 64px;
        width: 100%;
        border: 1px solid var(--gray1);
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .errorWrapper {
        border: 1px solid var(--error);
    }

    input {
        height: 60px;
        color: var(--gray3);
        font-size: 22px;
        border: none;
        width: calc(100% - 13px);
    }

    label {
        color: var(--gray2);
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        background: var(--white);
        position: absolute;
        top: -15px;
        padding: 0 4px;
        left: 10px;
    }

    .errorField {
        color: var(--error);
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        background: var(--white);
        position: absolute;
        top: -15px;
        padding: 0 4px;
        right: 10px;
    }
</style>
