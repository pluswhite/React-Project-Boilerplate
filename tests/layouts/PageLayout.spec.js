import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<PageLayout />)
    expect(wrapper.find('.container')).to.have.lengthOf(1)
  })

  // it('renders a project title', () => {
  //   shallow(<PageLayout />).find('h1').to.have.text('React Redux Starter Kit')
  // })

  // it('renders its children inside of the viewport', () => {
  //   const Child = () => <h2>child</h2>
  //   shallow(
  //     <PageLayout>
  //       <Child />
  //     </PageLayout>
  //   )
  //     .find('.page-layout__viewport')
  //     .to.contain(<Child />)
  // })
})
