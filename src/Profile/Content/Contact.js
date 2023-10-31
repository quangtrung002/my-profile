import React, { memo } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import clsx from 'clsx'
import style from './Content.module.scss'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className={clsx(style.contact)}>
      <ul className={clsx(style.list , style.listHome)}>
        <li className={clsx(style.item)}>
          <Link to = "/" className={clsx(style.home)}><FontAwesomeIcon icon={faHome} /></Link>
        </li>
        <li className={clsx(style.item)}>
          <Link to = "/cv" className={clsx(style.cv)}><FontAwesomeIcon icon={faCircleUser} /></Link>
        </li>
      </ul>
      <ul className={clsx(style.list)}>
        <li className={clsx(style.item)}>
          <a href='https://www.facebook.com/chunbin02/' className={clsx(style.facebook)}><FontAwesomeIcon icon={faFacebookF} /></a>
        </li>
        <li className={clsx(style.item)}>
          <a href='https://www.youtube.com/channel/UCOEqMcwNov5s1779JT-QCRA' className={clsx(style.youtube)}><FontAwesomeIcon icon={faYoutube} /></a>
        </li>
        <li className={clsx(style.item)}>
          <a href='' className={clsx(style.gmail)}><FontAwesomeIcon icon={faEnvelope} /></a>
        </li>
        <li className={clsx(style.item)}>
          <a href='https://github.com/quangtrung002' className={clsx(style.github)}><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li className={clsx(style.item)}>
          <a href='https://www.instagram.com/enqiti.11/' className={clsx(style.instagram)}><FontAwesomeIcon icon={faInstagram} /></a>
        </li>
      </ul>
    </div>
  )
}

export default memo(Contact)
