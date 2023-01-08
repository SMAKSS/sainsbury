import PropTypes from 'prop-types'

import style from './card.module.scss'

/**
 *
 * @param {object} props
 * @param {ReactElement} props.img
 * @param {ReactElement|string} props.detail
 * @param {ReactElement|string} props.action
 *
 * @returns {ReactElement}
 */
function Card({img, detail, action, ...rest}) {
  return (
    <article className={style.container} {...rest}>
      <header className={style.image}>{img}</header>
      <>{detail}</>
      <>{action}</>
    </article>
  )
}

export default Card

Card.propTypes = {
  img: PropTypes.node,
  detail: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  action: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}
