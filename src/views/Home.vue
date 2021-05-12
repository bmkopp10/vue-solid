<template>
    <div class="home">
        <b-button id="test-alert-button" @click="() => show('this is an alert')">Alert!</b-button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import useAlert from "@/composables/useAlert"; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {},
    setup() {

        const { show } = useAlert()

        return {
            show
        }
    }
});
</script>
