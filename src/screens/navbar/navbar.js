import * as React from 'react'

import {AppContext} from 'appContext'
import {CloseIcon} from 'assets'
import {BasketCard, Picture, Detail, Basket} from 'components'
import {PRODUCT_SCHEMA} from 'utils'

import style from './navbar.module.scss'

function Navbar() {
  const [appState, setAppState] = React.useContext(AppContext)

  const [listStatus, setListStatus] = React.useState(false)

  function removeFromBasket(productId) {
    setAppState(prevState => ({
      ...prevState,
      products: [
        ...prevState.products.filter(
          product => product.productId !== productId,
        ),
      ],
    }))
  }

  return (
    <header className={style.container} role="heading" aria-level="1">
      <Basket
        count={appState.products.length}
        action={() => setListStatus(prevState => !prevState)}
      />
      <React.Suspense fallback={<></>}>
        {listStatus ? (
          <div
            className={style.list}
            role="list"
            itemScope
            itemType={PRODUCT_SCHEMA}
          >
            <div
              className={style.overlay}
              onClick={() => setListStatus(false)}
            />
            <header className={style.header} role="heading" aria-level="2">
              <h3>{'Your basket'}</h3>
              <CloseIcon onClick={() => setListStatus(false)} />
            </header>
            {!appState.products.length ? (
              <p role="listitem">{'Your basket is currently empty'}</p>
            ) : (
              appState.products.map(product => (
                <BasketCard
                  key={product.productId}
                  role="listitem"
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
                        style={{flexDirection: 'initial', alignItems: 'center'}}
                        titleProps={{itemProp: 'name'}}
                        skuProps={{itemProp: 'sku'}}
                        priceProps={{itemProp: 'price'}}
                      />
                    ) : (
                      <></>
                    )
                  }
                  remove={() => removeFromBasket(product.productId)}
                />
              ))
            )}
          </div>
        ) : null}
      </React.Suspense>
    </header>
  )
}

export default Navbar
