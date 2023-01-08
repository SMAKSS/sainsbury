import PropTypes from 'prop-types'

import style from './detail.module.scss'

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.sku
 * @param {string} props.price
 * @param {object} props.titleProps
 * @param {object} props.skuProps
 * @param {object} props.priceProps
 *
 * @returns {ReactElement}
 */
function Detail({
  title,
  sku,
  price,
  titleProps,
  skuProps,
  priceProps,
  ...rest
}) {
  return (
    <div className={style.container} {...rest}>
      <p {...titleProps}>
        {title}
        {','} <span {...skuProps}>{sku}</span>
      </p>
      <p {...priceProps}>{`£${price}`}</p>
    </div>
  )
}

export default Detail

Detail.propTypes = {
  title: PropTypes.string,
  sku: PropTypes.string,
  price: PropTypes.number,
  titleProps: PropTypes.object,
  skuProps: PropTypes.object,
  priceProps: PropTypes.object,
}
