import Header from "@/components/Header"
import { shallowMount } from '@vue/test-utils'

describe('Header.vue', () => {
    it('renders props.msg when passed', () => {
      const wrapper = shallowMount(Header, {
        propsData : {
            title: "String",
            showAddProvider: true    
        }
      })

      expect(wrapper.isVisible()).toBeTruthy(); 
    })

    test('renders the correct Title name', () => {
      const titleName = "Provider";
      const wrapper = shallowMount(Header, {
        propsData : {
            title: "Provider",
            showAddProvider: true    
        }
      })


      expect(wrapper.html()).toContain(titleName);
  })
  })