import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/reducers'

const loggerMiddleware = createLogger();

export default createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
)
