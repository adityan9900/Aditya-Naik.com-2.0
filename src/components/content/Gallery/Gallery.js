import React, { useState, useRef } from 'react'
import classes from './Gallery.module.css'
import DecryptedText from '../../hoc/DecryptedText/DecryptedText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import vertical from './Vertical.JPG'
import horizontal from './Horizontal.JPG'

const Gallery = () => {
  const imageList = [vertical, horizontal]
  const [imageIndex, setImageIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const imageRef = useRef(null)
  const pendingIndexRef = useRef(null)

  const handleImageLoad = () => {
    // Only fade in if this is the current image we're waiting for
    if (pendingIndexRef.current === null || imageIndex === pendingIndexRef.current) {
      setFade(true)
      pendingIndexRef.current = null
    }
  }

  const handleTransitionEnd = (e) => {
    // When fade-out transition completes, switch to the new image
    if (e.propertyName === 'opacity' && !fade && pendingIndexRef.current !== null) {
      setImageIndex(pendingIndexRef.current)
    }
  }

  const changeImage = (newIndex) => {
    if (fade) {
      // Start fade out
      setFade(false)
      pendingIndexRef.current = newIndex
    }
  }

  const nextImage = () => {
    changeImage((imageIndex + 1) % imageList.length)
  }

  const previousImage = () => {
    const newIndex = imageIndex - 1 < 0 ? imageList.length - 1 : imageIndex - 1
    changeImage(newIndex)
  }

  return (
    <div className={classes.wrapper}>
      <DecryptedText
        text={'GALLERY'}
        className={classes.header}
        encryptedClassName={classes.header}
      />
      <div className={classes.galleryWrapper}>
        <div className={classes.imageContainer}>
          <img
            ref={imageRef}
            key={imageIndex}
            src={imageList[imageIndex]}
            onLoad={handleImageLoad}
            onTransitionEnd={handleTransitionEnd}
            className={fade ? classes.fadeIn : classes.fadeOut}
          />
        </div>
      </div>
      <div className={classes.buttonsContainer}>
        <div className={classes.galleryButton} onClick={previousImage}>
          <div className={classes.galleryButtonInner}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </div>
        </div>
        <div className={classes.galleryButton} onClick={nextImage}>
          <div className={classes.galleryButtonInner}>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
