import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './CustomBtn.module.css'

const CustomBtn = ({text, variant}) => {
  return (
   <Button 
   variant={variant}
   className={`${styles.customBtn} px-3 py-2 fw-bold`}>{text}</Button>
  )
}

export default CustomBtn
