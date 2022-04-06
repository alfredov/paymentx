
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { fetchOrdersEpic } from './index'
import action, { TSuccess } from '../../actions/fetchOrders'
import { testEpic } from '../../core-app'

const fetchOrdersServerResponse: TSuccess = [{
  checked: false,
  disabled: true,
  due: '2022-04-05',
  id: 'x-id',
  interest: '500',
  name: 'Order test name',
  price: '5000.00',
  priceCurrency: 'MXN',
  status: 'PAID'
}]

const server = setupServer(
  rest.get('/api/orders', (_req, res, ctx) => {
    return res(ctx.json(fetchOrdersServerResponse))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.restoreHandlers())

describe('epics::fetchOrdersEpic', () => {
  it('should get data', (done) => {
    const expectedActions = [{
      ...action.success(fetchOrdersServerResponse)
    }]

    testEpic(
      fetchOrdersEpic,
      expectedActions.length,
      action.request(),
      {},
      (resultOfActions) => {
        expect(expectedActions).toStrictEqual(resultOfActions)
        done()
      }
    )
  })
})
