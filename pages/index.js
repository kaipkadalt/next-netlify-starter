import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta name="title" content="Naujienos, Žinios, Straipsniai">
<meta name="description" content="Naujienos Lietuvoje, bei pasaulyje. Straipsniai įvairiomis temomis: technologijos, psichologija, dizainas, pasidaryk pats ir kita">
<meta name="keywords" content="Naujienos, Žinios, Orai, TV programa, Straipsniai, Receptai">
<meta name="robots" content="index, follow">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="author" content="Darius">
        <link rel="icon" href="/favicon.ico" />
    
      </Head>

      <main>
        <Header title="NAUJIENOS, ŽINIOS, ORAI, TV PROGRAMA" />
    
        <p className="description">
          Naujienos Lietuvoje, bei pasaulyje. Straipsniai įvairiomis temomis: technologijos, psichologija, dizainas, pasidaryk pats ir kita. Patiekalų receptai.
    <a href="https://www.zin.lt" target="_blank" title="Žinios ir Naujienos">Žinios</a> and <a href="https://www.kaipkada.lt" target="_blank" title="Naujienos, Straipsniai ir TV programa">Naujienos</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
