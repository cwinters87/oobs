import * as React from 'react'
import Button from 'react-bootstrap/Button'
import * as styles from './trustedBanner.module.css'
// import MainGif from '../images/hero/hero-main.gif'


const TrustedBanner = () => {
  return (
    <div class={styles.container}>
      <div class={styles.icon}>
        <img src="/public/assets/svg/b-tasksuite-icon.svg" onload="SVGInject(this)" />
      </div>
      <div class={styles.title}>
        <h3 class={styles.header}>Trusted by Businesses<br />Worldwide</h3>
      </div>
      <div class={styles.items}>
        <div class={styles.item}>
          <div class={styles.count}>500%</div>
          <div class={styles.text}>Increase in Originations</div>
        </div>
        <div class={styles.item}>
          <div class={styles.count}>30%</div>
          <div class={styles.text}>Reduction in Software Cost</div>
        </div>
        <div class={styles.item}>
          <div class={styles.count}>5,000+</div>
          <div class={styles.text}>Users</div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBanner