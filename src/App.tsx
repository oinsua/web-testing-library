import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './router';

const routes = createBrowserRouter(router)

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Web Application</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <RouterProvider router={routes} fallbackElement={<div>Loading...</div>} />
    </HelmetProvider>
  )
}

export default App;