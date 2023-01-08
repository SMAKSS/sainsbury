import {lazy} from 'react'

const Basket = lazy(() => import('./basket' /* webpackChunkName: "basket" */))

export {Basket}
