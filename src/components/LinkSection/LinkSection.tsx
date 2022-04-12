import React from 'react'
import LinkList from './LinkList/LinkList'
import ShortLinkPanel from './ShortLinkPanel/ShortLinkPanel'

import styles from './styles.module.scss'

export default function LinkSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.linkPanel}>
          <ShortLinkPanel />
        </div>
        <div className={styles.linkList}>
          <LinkList />
        </div>
      </div>
    </div>
  )
}
