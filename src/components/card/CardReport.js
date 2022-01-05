import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

const CardReport = ({ title, subtitle, children }) => {
  return (
    <Card className="border-left-primary bg-white shadow card-report">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        {children}
      </CardBody>
    </Card>
  );
};

export default CardReport;
