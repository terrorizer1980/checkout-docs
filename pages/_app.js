import '../styles/globals.css'

import { ModifierProvider } from './components/modifier';
import { RouterProvider } from './components/router';

function MyApp({ Component, pageProps }) {
  return <ModifierProvider>
    <RouterProvider>
      <Component {...pageProps} />
    </RouterProvider>
  </ModifierProvider>
}

export default MyApp
