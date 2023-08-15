import React, { useState } from 'react'
import Tab from '../tab/tab'
import styles from './tab-list.module.css'
import Content from '../content/content'

const content = [
  {
    summary: 'React is a library for building UIs',
    details:
      'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    summary: 'State management is like giving state a home',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    summary: 'We can think of props as the component API',
    details:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
]

const TabList = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className={styles.list}>
        <Tab num={0} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab num={1} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab num={2} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab num={3} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab >= 0 && <Content content={content[activeTab]} />}
    </div>
  )
}

export default TabList
