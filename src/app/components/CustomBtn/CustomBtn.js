import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './CustomBtn.module.css'

const CustomBtn = ({text, variant, fullWidth, thickerPadding}) => {
  return (
   <Button 
   variant={variant}
   className={`${styles.customBtn} ${thickerPadding ? 'thickerWideBTN' : 'px-3 py-2'} fw-bold ${fullWidth && 'w100BTN'}`}>{text}</Button>
  )
}

export default CustomBtn
