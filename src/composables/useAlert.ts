import { ref } from "@vue/composition-api"


export default function useAlert(): {show: (message: string) => void} {
    const alertArray = ref<Array<string>>([])

    function show(message: string) {
        alert(message)
        alertArray.value.push(message)
    }

    return {
        show
    }
}
