import { Header, Navigation, NavItem, ModalBtn } from './Layout.styled';
import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Loader } from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalMenu = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <ModalBtn>
          {isModalOpen ? (
            <MdClose size="40" onClick={toggleModalMenu} />
          ) : (
            <MdMenu size="40" onClick={toggleModalMenu} />
          )}
        </ModalBtn>

        <Navigation menuToggle={isModalOpen}>
          <NavItem to="/" key={'home'} end>
            {' '}
            Home
          </NavItem>
          <NavItem to={'about'} key={'about'}>
            {' '}
            About me{' '}
          </NavItem>
          <NavItem to={'contact'} key={'contact'}>
            {' '}
            Contact me{' '}
          </NavItem>
        </Navigation>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
