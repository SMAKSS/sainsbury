import * as React from 'react'
import PropTypes from 'prop-types'

import style from './picture.module.scss'

/**
 *
 * @param {object} props
 * @param {string} props.src Image source
 * @param {string} props.alt Image alt
 *
 * @returns {ReactElement}
 */
function Picture({src, alt = 'image', ...rest}) {
  const pictureRef = React.useRef(null)

  React.useEffect(() => {
    const picture = pictureRef.current

    new Promise((resolve, reject) => {
      const img = new Image()

      img.onload = () => resolve(src)
      img.onerror = () => reject()

      img.src = `${src}&fmt=jpg`
      img.alt = alt
      img.className = style.img

      picture.append(img)
    })

    return () => {
      if (picture.lastChild instanceof HTMLImageElement)
        picture.removeChild(picture.lastChild)
    }
  }, [alt, src])

  return (
    <picture {...rest} ref={pictureRef}>
      <source type="image/webp" srcSet={`${src}&fmt=webp`} />
      <source type="image/jpeg" srcSet={`${src}&fmt=jpg`} />
    </picture>
  )
}

export default Picture

Picture.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}
