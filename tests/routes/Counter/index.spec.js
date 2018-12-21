import CounterRoute from 'routes/Counter'

describe('(Route) Counter', () => {
  test('returns a route configuration object', () => {
    expect(typeof CounterRoute({})).to.equal('object')
  })

  test('has a path \'counter\'', () => {
    expect(CounterRoute({}).path).to.equal('counter')
  })
})
