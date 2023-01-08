import {lazy} from 'react'

const Card = lazy(() => import('./card' /* webpackChunkName: "card" */))

export {Card}
