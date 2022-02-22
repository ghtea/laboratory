import type { NextPage } from 'next'
import { ChangeEventHandler, MouseEventHandler, useCallback, useState } from 'react'
import styles from './index.module.scss'

const CheckboxFirstPage: NextPage = () => {
  const onClickC: MouseEventHandler<HTMLInputElement> = useCallback((event)=>{
    console.log(event.currentTarget.checked)
  },[])

  const [checkedD, setCheckedD] = useState(false)
  const onClickD: MouseEventHandler<HTMLInputElement> = useCallback((event)=>{
    console.log(event.currentTarget.checked)
    setCheckedD(event.currentTarget.checked)
  },[])

  const [checkedE, setCheckedE] = useState(false)
  const onClickE: MouseEventHandler<HTMLInputElement> = useCallback((event)=>{
    console.log(event.currentTarget.checked)
    setCheckedE(event.currentTarget.checked)
  },[])


  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <input type="checkbox"/>
        <span className={styles.text}> a. basic </span>
      </div>

      <div className={styles.container}>
        <input type="checkbox" checked/>
        <span className={styles.text}> b. checked </span>
      </div>

      <div className={styles.container}>
        <input type="checkbox" onClick={onClickC} checked={false}/>
        <span className={styles.text}> c. onClick </span>
      </div>

      <div className={styles.container}>
        <input type="checkbox" onClick={onClickD} checked={checkedD}/>
        <span className={styles.text}> d. onClick with checked </span>
      </div>

      <div className={styles.container}>
        <input type="checkbox" onClick={onClickE} checked={checkedE}/>
        <span className={styles.text}> e. onClick with checked </span>
      </div>
    </div>
  )
}

export default CheckboxFirstPage