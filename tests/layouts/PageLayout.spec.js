import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<PageLayout />)
    expect(wrapper.is('div.container')).toBe(true)
  })

  it('renders a project title', () => {
    expect(shallow(<PageLayout />).find('h1').text()).toEqual('React Redux Starter Kit')
  })

  it('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    expect(shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )
      .find('.page-layout__viewport').contains(<Child />)).toBe(true)
  })
})
