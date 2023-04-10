import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout.jsx';
import Footer from './components/Footer/Footer.jsx'
import Container from './components/Container/Container.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'));
const AboutMe = lazy(() => import('./pages/AboutMe/AboutMe.jsx'));
const ContactMe = lazy(() => import('./pages/ContactMe/ContactMe.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} exact />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default App;
