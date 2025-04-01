import homeStyles from './Home.module.css'
import { getSortedPostsData } from '../lib/post'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div>
      <section className={homeStyles.headingMd}>
        <p>[zinzza-Song Introduction]</p>
        <p>(This is a website)</p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li
              className={homeStyles.listItem}
              key={id}>
              <a>{title}</a>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
