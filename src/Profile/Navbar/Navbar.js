
import clsx from 'clsx'
import { useEffect, useState, memo } from 'react';
import style from './Navbar.module.scss'

function Navbar() {
  const [time, setTime ] = useState(new Date().toLocaleString())
  useEffect(()=>{
    const timeDate = setTimeout(()=>{
      setTime(new Date().toLocaleString())
    }, 1000)
    return ()=> clearTimeout(timeDate)
  }, [time])

  return (
    <nav className={clsx(style.navbar)}>
      <div className={clsx(style.dotsNav)}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div className={clsx(style.dot)}></div>
        ))}
      </div>
      <div className={clsx(style.dateTime)}>
        {time}
      </div>
    </nav>
  )
}

export default memo(Navbar)