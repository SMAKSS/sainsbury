import {lazy} from 'react'

const BasketCard = lazy(() =>
  import('./basketCard' /* webpackChunkName: "basket-card" */),
)

export {BasketCard}
