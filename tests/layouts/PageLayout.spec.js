import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  test('renders as a <div>', () => {
    shallow(<PageLayout />).should.have.tagName('div')
  })

  test('renders a project title', () => {
    shallow(<PageLayout />).find('h1').should.have.text('React Redux Starter Kit')
  })

  test('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )
      .find('.page-layout__viewport')
      .should.contain(<Child />)
  })
})
