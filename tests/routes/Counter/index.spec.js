import CounterRoute from 'routes/Counter'

describe('(Route) Counter', () => {
  it('returns a route configuration object', () => {
    expect(typeof CounterRoute({})).toEqual('object')
  })

  it('has a path \'counter\'', () => {
    expect(CounterRoute({}).path).toEqual('counter')
  })
})
