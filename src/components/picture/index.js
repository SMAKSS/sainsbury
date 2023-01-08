import {lazy} from 'react'

const Picture = lazy(() =>
  import('./picture' /* webpackChunkName: "picture" */),
)

export {Picture}
