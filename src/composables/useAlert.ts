import { ref } from "@vue/composition-api"

const alertArray = ref<Array<string>>([])

export default function useAlert(): {show: (message: string) => void} {

    function show(message: string) {
        alert(message)
        alertArray.value.push(message)
    }

    return {
        show
    }
}
