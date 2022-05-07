import React, { memo } from 'react'
import clsx from 'clsx'
import style from './home.module.scss'

function Home() {
  return (
    <footer className={clsx(style.contact)}>
      <h1 className={clsx(style.heading)}>my project</h1>
      <div className={clsx(style.form ,"grid")}>
        <div className={clsx("row")}>
          
        </div>
      </div>

    </footer>
  )
}

export default memo(Home)
