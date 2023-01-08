import PropTypes from 'prop-types'

import {BasketIcon} from 'assets'

import style from './basket.module.scss'

function Basket({count, action, countProps, ...rest}) {
  return (
    <div className={style.icon} onClick={action} {...rest}>
      {count ? (
        <span className={style.count} {...countProps}>
          {count}
        </span>
      ) : null}
      <BasketIcon />
      <span>{'Basket'}</span>
    </div>
  )
}

export default Basket

Basket.propTypes = {
  count: PropTypes.number,
  action: PropTypes.func,
  countProps: PropTypes.object,
}
