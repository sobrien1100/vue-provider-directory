import AddProvider from "@/components/AddProvider"
import { shallowMount } from '@vue/test-utils'

describe('AddProvider.vue', () => {
    it('renders props.msg when passed', () => {
      const wrapper = shallowMount(AddProvider, {
        propsData : {
            first_name: 'Mike',
            last_name: '',
            email_address: '',
            specialty: '',
            practice_name: ''
        }
      })

      expect(wrapper.isVisible()).toBeTruthy(); 
    })

    test('renders the correct First name', () => {
        const firstName = "Mike";
        const wrapper = shallowMount(AddProvider, {
            propsData : {
                first_name: 'Mike',
                last_name: '',
                email_address: '',
                specialty: '',
                practice_name: ''
            }
          })


        expect(wrapper.html()).toContain(firstName);
    })
  })