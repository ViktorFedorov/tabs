import React from 'react'
import styles from './tab.module.css'

const Tab = ({ num, activeTab, setActiveTab }) => {
  return (
    <div
      className={
        activeTab === num ? `${styles.tab} ${styles.active}` : styles.tab
      }
      onClick={() => setActiveTab(num)}
    >
      Tab {num + 1}
    </div>
  )
}

export default Tab
