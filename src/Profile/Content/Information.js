import React, { memo } from 'react'
import clsx from 'clsx'
import style from './Content.module.scss'

function Information() {
  return (
    <div className={clsx(style.infor)}>
      <img src={process.env.PUBLIC_URL + "/logo/user.avif"} alt='' className={clsx(style.userImg)}></img>
      <h1 className={clsx(style.name)}>trung bin</h1>
      <p className={clsx(style.des)}>web developer</p>
      <p className={clsx(style.maxim, 'maxims')}>"The only way to do great work is to love what you do.”</p>
      <p className={clsx(style.author)}> - steve jobs - </p>
    </div>
  )
}

export default memo(Information)
