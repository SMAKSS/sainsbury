import {lazy} from 'react'

const Products = lazy(() =>
  import('./products' /* webpackChunkName: "products" */),
)

export {Products}
