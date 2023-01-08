import PropTypes from 'prop-types'

import {RemoveIcon} from 'assets'

import style from './basketCard.module.scss'

/**
 *
 * @param {object} props
 * @param {ReactElement} props.img
 * @param {ReactElement|string} props.detail
 * @param {function} props.remove
 *
 * @returns {ReactElement}
 */
function BasketCard({img, detail, remove, ...rest}) {
  return (
    <article className={style.container} {...rest}>
      <header className={style.image}>{img}</header>
      <>{detail}</>
      {remove ? (
        <span className={style.remove} onClick={remove}>
          <RemoveIcon />
        </span>
      ) : null}
    </article>
  )
}

export default BasketCard

BasketCard.propTypes = {
  img: PropTypes.node,
  detail: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  remove: PropTypes.func,
}
