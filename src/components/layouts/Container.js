import { useRouter } from 'next/router';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Button } from 'reactstrap';

const Container = ({ children, className, style, title }) => {
  const router = useRouter();
  const classes = `custom-container${className ? ` ${className}` : ''}`;

  return (
    <div className={classes} style={style}>
      {router.pathname !== '/' && (
        <div className="d-flex align-items-center mb-3">
          <Button className="p-0" color="transparent" onClick={() => router.back()}>
            <BsArrowLeftShort style={{ fontSize: 65 }} />
          </Button>
          {title && <h1 className="m-0">{title}</h1>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Container;
