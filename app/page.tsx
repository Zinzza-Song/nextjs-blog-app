import homeStyles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <section className={homeStyles.headingMd}>
        <p>[zinzza-Song Introduction]</p>
        <p>(This is a website)</p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  )
}
