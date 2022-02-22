import type { NextPage } from 'next'
import React from 'react'
import styles from './index.module.scss'

const FullWithGapPage: NextPage = () => {


  return (
    <div className={styles.screen}>
      <div className={`${styles.container} ${styles.a}`}>
        <div className={styles.child}> a </div>
      </div>

      <div className={`${styles.container} ${styles.b}`}>
        <div className={styles.child}> b </div>
      </div>
    </div>
  )
}

export default FullWithGapPage