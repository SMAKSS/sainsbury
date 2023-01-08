import {lazy} from 'react'

const BasketIcon = lazy(() =>
  import('./basket' /* webpackChunkName: "basket-icon" */),
)

export {BasketIcon}
