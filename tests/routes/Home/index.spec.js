import HomeRoute from 'routes/Home'

describe('(Route) Home', () => {
  let _component

  beforeEach(() => {
    _component = HomeRoute.component()
  })

  test('Should return a route configuration object', () => {
    expect(typeof HomeRoute).to.equal('object')
  })

  test('Should define a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
