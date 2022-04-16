import Provider from "@/components/Provider"
import { shallowMount } from '@vue/test-utils'

describe('Header.vue', () => {
    it('renders props.msg when passed', () => {
    const provider = [{"last_name":"Harris","first_name":"Mike","email_address":"mharris@updox.com","specialty":"Pediatrics","practice_name":"Harris Pediatrics"},{"last_name":"Carlson","first_name":"Mike","email_address":"mcarlson@updox.com","specialty":"Orthopedics","practice_name":"Carlson Orthopedics"},{"last_name":"Juday","first_name":"Tobin","email_address":"tjuday@updox.com","specialty":"General Medicine","practice_name":"Juday Family Practice"}]
      const wrapper = shallowMount(Provider, {
        propsData : {
                provider: provider
        }
      })

      expect(wrapper.isVisible()).toBeTruthy(); 
    })

    test('renders the correct Title name', () => {
      const titleName = "Practice Name";
      const provider = [{"last_name":"Harris","first_name":"Mike","email_address":"mharris@updox.com","specialty":"Pediatrics","practice_name":"Harris Pediatrics"},{"last_name":"Carlson","first_name":"Mike","email_address":"mcarlson@updox.com","specialty":"Orthopedics","practice_name":"Carlson Orthopedics"},{"last_name":"Juday","first_name":"Tobin","email_address":"tjuday@updox.com","specialty":"General Medicine","practice_name":"Juday Family Practice"}]
      const wrapper = shallowMount(Provider, {
        propsData : {
            provider: provider
    }
  })


      expect(wrapper.html()).toContain(titleName);
  })
  })