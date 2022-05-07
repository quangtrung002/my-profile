import clsx from 'clsx'
import style from './Profile.module.scss'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import Page from './Page/Page'

export default function Profile() {
  return (
    <div className={clsx(style.profile)}>
      <Navbar />
      <Content />
      <Page />
    </div>
  )
}
