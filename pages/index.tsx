import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from 'components/Layout'
import Hero from 'components/Hero'
import TechStack from 'components/TechStack'
import About from 'components/About'
import Skills from 'components/Skills'
import Projects from 'components/Projects'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Milinkov Nikita | Presonal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <TechStack />
        <About />
        <Skills />
        <Projects />
      </Layout>
    </>
  )
}

export default Home