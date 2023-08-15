import React, { useContext, useState } from 'react'
import Tab from '../tab/tab'
import Content from '../content/content'
import { DataContext } from '../data-context'
import styles from './tab-list.module.css'

const TabList = () => {
  const [activeTab, setActiveTab] = useState(0)
  const content = useContext(DataContext)

  return (
    <div>
      <div className={styles.list}>
        <Tab num={0} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab num={1} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab num={2} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab num={3} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab <= 2 ? (
        <Content
          content={content[activeTab]}
          key={content[activeTab].summary}
        />
      ) : (
        <p>WTF?</p>
      )}
    </div>
  )
}

export default TabList
