import * as React from 'react'

import {AppContext} from 'appContext'
import {Card, Picture, Detail, Button} from 'components'
import {get, PRODUCTS_SERVICE, PRODUCT_SCHEMA} from 'utils'

import style from './products.module.scss'

function Products() {
  const [appState, setAppState] = React.useContext(AppContext)

  const [state, setState] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const addToBasketAction = data => {
    setAppState(prevState => ({
      ...prevState,
      products: [...prevState.products, data],
    }))
  }

  React.useEffect(() => {
    const abortController = new AbortController()

    setLoading(true)

    get({endpoint: PRODUCTS_SERVICE, abortController})
      .then(res => {
        setState(res)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.error(err)
      })

    return () => abortController.abort()
  }, [])

  return (
    <section itemScope itemType={PRODUCT_SCHEMA} className={style.container}>
      {loading ? (
        <div className={style.skeleton}>
          <div />
          <div />
          <div />
          <div />
        </div>
      ) : (
        state.map(product => {
          const isInBasket = appState.products.some(
            prod => prod.productId === product.productId,
          )

          return (
            <Card
              key={product.productId}
              img={
                product.image ? (
                  <Picture
                    src={product.image}
                    alt={product.sku}
                    itemProp="image"
                  />
                ) : (
                  <></>
                )
              }
              detail={
                product.title ? (
                  <Detail
                    title={product.title}
                    sku={product.sku}
                    price={product.price}
                    titleProps={{itemProp: 'name'}}
                    skuProps={{itemProp: 'sku'}}
                    priceProps={{itemProp: 'price'}}
                  />
                ) : (
                  <></>
                )
              }
              action={
                <Button
                  text={isInBasket ? 'Added' : 'Add to Basket'}
                  disabled={isInBasket}
                  onClick={() =>
                    isInBasket
                      ? console.error('Button is disabled!')
                      : addToBasketAction(product)
                  }
                />
              }
            />
          )
        })
      )}
    </section>
  )
}

export default Products
