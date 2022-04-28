import Head from "next/head";
import Nav from '../components/Nav'



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
      <main className='bg-darkPurple text-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            <Nav />
            <div className='text-center'>
              <h1 className='text-6xl uppercase'>
                A design agency with a twist
              </h1>
              <p>Design subscriptions to scale your besiness</p>
              <button
                type='button'
                className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                See plans
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
