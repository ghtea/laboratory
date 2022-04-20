import type { NextPage } from 'next'
import Link from 'next/link'
import styles from "./index.module.scss"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href={"/checkbox"}>checkbox</Link>
      <Link href={"/full-with-gap"}>full-with-gap</Link>
      <Link href={"/interval"}>interval</Link>
      <Link href={"/ref"}>ref</Link>
      <Link href={"/emotion"}>emotion</Link>
    </div>
  )
}

export default Home
