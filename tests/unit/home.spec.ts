import {createLocalVue, mount, shallowMount, Wrapper} from '@vue/test-utils'
import CompositionApi from "@vue/composition-api";
import Home from "@/views/Home.vue";
import {BootstrapVue} from "bootstrap-vue";
import Vue from "vue";
import useAlert from "@/composables/useAlert";


describe('Home.vue', () => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    localVue.use(CompositionApi)

    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
        wrapper = shallowMount(Home, {
            localVue,
        })


    })

    afterEach(() => wrapper.destroy())

    test('renders button', () => {
        const button = wrapper.find('#test-alert-button')

        expect(button).toBeDefined()
    })
})
