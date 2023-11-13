import Head from 'next/head'

// Components
import HomeBanner from './components/home-banner/HomeBanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Raditya's Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBanner />
      <div style={{ display: 'grid', margin: 'auto', maxWidth: '1100px' }}>
        <section >
          This is About section
        </section>
        <section>
          This is Experience section
        </section>
        <section>
          This is To do list section
        </section>
        <section>
          Lorem ipsum dolor sit amet
        </section>
        <section>
          Lorem ipsum dolor sit amet
        </section>
        <section>
          Lorem ipsum dolor sit amet
        </section>
        <section>
          Lorem ipsum dolor sit amet
        </section>

      </div>
    </>
  )
}
