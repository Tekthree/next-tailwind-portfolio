import Head from "next/head";
import Nav from "../components/Nav";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='../asset/fonts/PlusJakartaSans-Medium.woff'
          rel='stylesheet'
        />
        <link
          href='../asset/fonts/PlusJakartaSans-Regular.woff'
          rel='stylesheet'
        />
        <link
          href='../asset/fonts/PlusJakartaSans-Regular.woff2'
          rel='stylesheet'
        />
        <link
          href='../asset/fonts/PlusJakartaSans-Light.woff'
          rel='stylesheet'
        />
        <link
          href='../asset/fonts/PlusJakartaSans-Light.woff2'
          rel='stylesheet'
        />
        <link
          href='../asset/fonts/PlusJakartaSans-Medium.woff2'
          rel='stylesheet'
        />
        <link
          href='../asset/fonts/mortend_-_extrabold-webfont.woff'
          rel='stylesheet'
        />
        <link
          href='../asset/fonts/mortend_-_extrabold-webfont.woff2'
          rel='stylesheet'
        />
      </Head>

      <body>
        <main className='bg-darkPurple text-primary relative overflow-hidden'>
          
          {/* ====================== side designs ======================= */}

          <div className='relative z-0' aria-hidden='true'>
            <div className='bg-black'>
              <img className='left-design' src='/right-art.png' alt='' />
              <img className='right-design' src='/left-art.png' alt='' />
            </div>
          </div>
          <div className='mx-auto px-4 sm:px-6 lg:px-8 z-3 relative'>
            <div className='mx-auto '>
              {/* ================================== Nav Bar ============================ */}
              <Nav />

              <div className='text-center port-container'>
                <h1 className='text-[3.5rem] md:text-[4.1rem] uppercase md:leading-[4.5rem] leading-[4.1rem]'>
                  A design agency with a twist
                </h1>
                <p className='mt-3 text-xl font-light'>
                  Design subscriptions to scale your besiness
                </p>
                <button type='button' className='port-button'>
                  Give me a holla 🤙🏾
                </button>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}
