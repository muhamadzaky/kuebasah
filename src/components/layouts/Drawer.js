import Helper from '@utils/Helper';
import { useRouter } from 'next/router';
import {
  BsBag,
  BsBagFill,
  BsFileEarmark,
  BsFileEarmarkFill,
  BsHouseDoor,
  BsHouseDoorFill,
  BsPerson,
  BsPersonFill
} from 'react-icons/bs';

const Drawer = (props) => {
  const router = useRouter();
  const { menu, menuList, isMobile, path } = props;

  const hasActiveLink = (activeLink) => {
    return path === activeLink;
  };

  const renderIcon = (activeLink) => {
    switch (activeLink) {
      case '/':
        return hasActiveLink(activeLink) ? <BsHouseDoorFill /> : <BsHouseDoor />;
      case '/supplier':
        return hasActiveLink(activeLink) ? <BsPersonFill /> : <BsPerson />;
      case '/item':
        return hasActiveLink(activeLink) ? <BsBagFill /> : <BsBag />;
      case '/report':
        return hasActiveLink(activeLink) ? <BsFileEarmarkFill /> : <BsFileEarmark />;
      default:
        break;
    }
  };

  const onClickMenu = (url) => {
    router.push(url);
  };

  console.log(Helper.pathnameParser(router.asPath));

  return (
    <div className="drawer shadow" style={{ width: isMobile ? 100 : 300 }}>
      <img src="/assets/images/logo.jpeg" alt="logo" width={60} style={{ padding: 12 }} />
      <ul>
        {menuList
          .filter((x) => x.show === true)
          .map((item, index) => (
            <li
              key={index}
              role="button"
              className={hasActiveLink(item.url) ? 'active' : ''}
              onClick={() => onClickMenu(item.url)}>
              {renderIcon(item.url)}
              &nbsp; {menu[item.name]}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Drawer;
