import dayjs from 'dayjs';
import { scroller } from 'react-scroll';

export default class Helper {
  static scrollTo(to, offset) {
    scroller.scrollTo(to, {
      duration: 500,
      smooth: 'easeInOutQuart',
      offset: offset,
      scrollSpy: true,
      animateScroll: true
    });
  }

  static countDateDiff(start, end) {
    const year = dayjs(end || new Date()).diff(start, 'years');

    if (year > 0) {
      return `${year} ${year > 1 ? 'years' : 'year'}`;
    } else {
      const month = dayjs(end || new Date()).diff(start, 'months');
      return `${month} ${month > 1 ? 'months' : 'month'}`;
    }
  }

  static moneyFormat(number) {
    return Number(number)
      ? new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR'
        }).format(number)
      : 0;
  }

  static pathnameParser(url) {
    const routerPathname = url?.split('/');
    const routerLength = routerPathname?.length - 1;
    const routerAfterSplit = routerPathname && routerLength ? routerPathname[routerLength] : '';
    const routerPath = routerAfterSplit.includes('?')
      ? routerAfterSplit.split('?')[0]
      : routerAfterSplit;

    return routerPath;
  }
}
