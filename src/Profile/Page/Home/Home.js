import React, { memo } from 'react'
import clsx from 'clsx'
import style from './home.module.scss'
import project from '../../../data'

function Home() {
  return (
    <footer className={clsx(style.contact)}>
      <h1 className={clsx(style.heading)}>my project</h1>
      <div className={clsx(style.form, "grid")}>
        {project.map((obj, index) => (
          <div className={clsx("row", style.project)} key={obj.id}>
            <div className={clsx("col", 'l-6', 'c-12', 'm-12')}>
              {0 === (obj.id % 2)
                ? <img src={obj.image} className={clsx(style.img)} />
                : <>
                  <h1 className={clsx(style.name)}>
                    <label className={clsx(style.label)}>name:</label>
                    <p className={clsx(style.des)}>{obj.name}</p>
                  </h1>
                  <h2 className={clsx(style.demo)}>
                    <label className={clsx(style.label)}>demo:</label>
                    <a className={clsx(style.des)}>{obj.demo}</a>
                  </h2>
                  <h2 className={clsx(style.descript)}>
                    <label className={clsx(style.label)}>description:</label>
                    <ul className={clsx(style.des)}>
                      {obj.des.map((ob, index) => (
                        <li key={index}>{ob}</li>
                      ))}
                    </ul>
                  </h2>
                  <h2 className={clsx(style.note)}>
                    <label className={clsx(style.label)}>language:</label>
                    <p className={clsx(style.des)}>{obj.language}</p>
                  </h2>
                  <h2 className={clsx(style.note)}>
                    <label className={clsx(style.label)}>note:</label>
                    <p className={clsx(style.des)}>{obj.note}</p>
                  </h2>
                </>
              }
            </div>
            <div className={clsx("col", 'l-6', 'c-12', 'm-12')}>
              {0 === (obj.id % 2)
                ? <>
                  <h1 className={clsx(style.name)}>
                    <label className={clsx(style.label)}>name:</label>
                    <p className={clsx(style.des)}>{obj.name}</p>
                  </h1>
                  <h2 className={clsx(style.demo)}>
                    <label className={clsx(style.label)}>demo:</label>
                    <a className={clsx(style.des)}>{obj.demo}</a>
                  </h2>
                  <h2 className={clsx(style.descript)}>
                    <label className={clsx(style.label)}>description:</label>
                    <ul className={clsx(style.des)}>
                      {obj.des.map((ob, index) => (
                        <li key={index}>{ob}</li>
                      ))}
                    </ul>
                  </h2>
                  <h2 className={clsx(style.note)}>
                    <label className={clsx(style.label)}>language:</label>
                    <p className={clsx(style.des)}>{obj.language}</p>
                  </h2>
                  <h2 className={clsx(style.note)}>
                    <label className={clsx(style.label)}>note:</label>
                    <p className={clsx(style.des)}>{obj.note}</p>
                  </h2>
                </>
                : <img src={obj.image} className={clsx(style.img)} />
              }
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default memo(Home)
