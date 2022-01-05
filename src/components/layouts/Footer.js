import { helperContext } from '@contexts/Helper';
import { API, langList } from '@utils/constant';
import { t } from '@utils/t';
import dayjs from 'dayjs';
import { find } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Container } from 'reactstrap';

const Footer = () => {
  const router = useRouter();
  const { locale, pathname } = router;

  const [currentLang, setCurrentLang] = useState(find(langList, { value: locale }));
  const { isMobile } = helperContext();

  const { follow, lang } = t[currentLang.value];

  const selectStyles = {
    input: () => ({
      width: 100
    })
  };

  const CustomOption = ({ innerProps, isDisabled }) => {
    const id = innerProps.id;
    const idx = id.substr(id.length - 1);

    return (
      <>
        {!isDisabled ? (
          <div {...innerProps} className="px-2" role="button">
            {lang[langList[idx].value]}
          </div>
        ) : null}
      </>
    );
  };

  const handleChangeLang = (options) => {
    const updateOptions = {
      value: options.value,
      label: lang[options.value]
    };

    setCurrentLang(updateOptions);
    router.replace(pathname, pathname, { locale: options.value });
  };

  useEffect(() => {
    if (locale) {
      handleChangeLang({ value: locale });
    } else {
      handleChangeLang({ value: 'en-US' });
    }
  }, [locale]);

  return (
    <footer className="py-3">
      <div className="mx-auto px-3 col-xs-12 col-md-9 col-lg-9">
        <div
          className={`d-flex justify-content-between align-items-center${
            isMobile ? ' flex-column' : ''
          }`}>
          <span className={isMobile ? 'mb-3' : ''}>
            &copy; {dayjs().format('YYYY')} • Made with{' '}
            <img src="/assets/icons/heart.svg" alt="heart" width={18} /> by Muhamad Zaky
          </span>

          <Select
            styles={selectStyles}
            options={langList}
            value={currentLang}
            onChange={handleChangeLang}
            components={{ Option: CustomOption }}
            menuPlacement="top"
            isSearchable={false}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
