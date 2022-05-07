import React, { memo } from 'react'
import clsx from 'clsx'
import style from './information.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faCalendarDays, faEnvelope, faGear, faGraduationCap, faHouseChimney, faPhone, faQuoteLeftAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { } from "@fortawesome/free-brands-svg-icons"

function Infor() {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx("grid")}>
        <div className={clsx('row')}>
          <div className={clsx('col', 'l-7', 'c-12','m-6', style.user)}>
            <img src={process.env.PUBLIC_URL + '/logo/user.jpg'} className={clsx(style.img)} />
            <p className={clsx(style.name)}>trung bin</p>
            <p className={clsx(style.major)}>web developer</p>
            <FontAwesomeIcon icon={faQuoteLeftAlt} className={clsx(style.quote)} />
            <p className={clsx(style.des)}>with the knowledge of what's in the school and courses, I've always wanted to become a Web Developer. Having a solid knowledge of HTML, CSS, JAVASCRIPT, REACTJS plus kills I hone every day. I always want to give my best to help the company grow and achieve for myself</p>
          </div>
          <div className={clsx('col', 'l-5','c-12','m-6', style.aboutMe)}>
            <div className={clsx(style.infors)}>
              <div className={clsx(style.icon)}>
                <FontAwesomeIcon icon={faCalendarDays} />
                <FontAwesomeIcon icon={faPhone} />
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faHouseChimney} />
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={clsx(style.infor)}>
                <div className={clsx(style.date)}>
                  <h1 className={clsx(style.heading)}>date of birth</h1>
                  <p className={clsx(style.des)}>11/03/2002</p>
                </div>
                <div className={clsx(style.phone)}>
                  <h1 className={clsx(style.heading)}>phone</h1>
                  <p className={clsx(style.des)}>0866***861</p>
                </div>
                <div className={clsx(style.email)}>
                  <h1 className={clsx(style.heading)}>email</h1>
                  <p className={clsx(style.des, style.desEmail)}>trungbina3qo@gmail.com</p>
                </div>
                <div className={clsx(style.address)}>
                  <h1 className={clsx(style.heading)}>address</h1>
                  <p className={clsx(style.des)}>quốc oai, hà nội</p>
                </div>
                <div className={clsx(style.gender)}>
                  <h1 className={clsx(style.heading)}>gender</h1>
                  <p className={clsx(style.des)}>male</p>
                </div>
              </div>
            </div>
            <div className={clsx(style.educationSkill)}>
              <div className={clsx(style.educations)}>
                <div className={clsx(style.icon)}>
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className={clsx(style.education)}>
                  <h1 className={clsx(style.title)}>education</h1>
                  <p className={clsx(style.college)}>
                    <span className={clsx(style.heading)}>college:</span>
                    <span className={clsx(style.des)}>thủy lợi university</span>
                  </p>
                  <p className={clsx(style.major)}>
                    <span className={clsx(style.heading)}>mojor:</span>
                    <span className={clsx(style.des)}>information technology</span>
                  </p>
                </div>
              </div>
              <div className={clsx(style.skills)}>
                <div className={clsx(style.icon)}>
                  <FontAwesomeIcon icon={faGear} />
                </div>
                <div className={clsx(style.skill)}>
                  <h1 className={clsx(style.title)}>skill</h1>
                  <p className={clsx(style.frontEnd)}>
                    <span className={clsx(style.heading)}>front end:</span>
                    <span className={clsx(style.des)}>html, css, js, reactjs</span>
                  </p>
                  <p className={clsx(style.backEnd)}>
                    <span className={clsx(style.heading)}>back end:</span>
                    <span className={clsx(style.des)}>C#...</span>
                  </p>
                  <p className={clsx(style.framework)}>
                    <span className={clsx(style.heading)}>framework:</span>
                    <span className={clsx(style.des)}>reactjs, bootstrap</span>
                  </p>
                  <p className={clsx(style.data)}>
                    <span className={clsx(style.heading)}>data:</span>
                    <span className={clsx(style.des)}>sql server</span>
                  </p>
                </div>
              </div>
              <div className={clsx(style.cvs)}>
                <div className={clsx(style.icon)}>
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className={clsx(style.cv)}>
                  <h1 className={clsx(style.title)}>my cv</h1>
                  <a className={clsx(style.myCV)} href=''>mycv.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Infor)
