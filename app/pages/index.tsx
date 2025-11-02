import { ReactElement, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { DEFAULT_DELAY_MS } from 'app/common/constants';
import Loader from 'app/common/components/Loader';
import { smoothLazy } from 'app/common/helpers';
import Footer from './Footer';
import { Layout, MainContent } from './styles';


const Home = smoothLazy(() => import('./Home'), DEFAULT_DELAY_MS);
const NotFound = smoothLazy(() => import('./NotFound'), DEFAULT_DELAY_MS);

interface PagesProps {
  toggleTheme: () => void;
}

const Pages = (props: PagesProps): ReactElement => (
  <Suspense fallback={<Loader />}>
    <Layout>
      <MainContent>
        <Routes>
          <Route path="/" element={
            <>
              <Outlet />
            </>
          }>
            <Route index element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </MainContent>
      <Footer toggleTheme={props.toggleTheme}/>
    </Layout>
  </Suspense>
);

export default Pages;