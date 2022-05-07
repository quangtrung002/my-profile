import clsx from 'clsx'
import style from './Content.module.scss'
import Contact from './Contact'
import Information from './Information'

export default function Content() {
  return (
    <main className={clsx(style.content)}>
      <Information />
      <Contact />
    </main>
  )
}
