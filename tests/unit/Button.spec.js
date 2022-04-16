import Button from "@/components/Button"
import { shallowMount } from '@vue/test-utils'

describe('Button.vue', () => {
    it('renders props.msg when passed', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                text: "Add Provider",
                color: "String"
            }
        })

        expect(wrapper.isVisible()).toBeTruthy();
    })

    test('renders the correct Button name', () => {
        const buttonName = "Add Provider";
        const wrapper = shallowMount(Button, {
            propsData: {
                text: "Add Provider",
                color: "String"
            }
        })


        expect(wrapper.html()).toContain(buttonName);
    })
})