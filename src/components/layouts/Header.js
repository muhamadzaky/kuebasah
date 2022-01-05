import { helperContext } from '@contexts/Helper';
import { menuList } from '@utils/constant';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';

const Header = ({ isMobile }) => {
  const router = useRouter();
  const { locale, asPath, push, query } = router;
  const { name, offset, from } = query;
  const { logout } = t[locale];

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (query && asPath !== from) {
      Helper.scrollTo(name, offset);
    }
  }, [query]);

  console.log(isMobile);

  return (
    <Navbar
      className="col-xs-12 col-md-9 col-lg-9 w-100 shadow"
      color="transparent"
      expand="md"
      light>
      <NavbarBrand href="/">Kue Basah Bu Eva</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse className={!isMobile ? 'd-flex justify-content-end' : ''} isOpen={isOpen} navbar>
        <NavbarText
          role="button"
          onClick={() => {
            router.push('/auth');
            localStorage.clear();
          }}>
          {logout}
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Header;
