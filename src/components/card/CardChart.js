import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

const CardChart = ({ title, subtitle, children }) => {
  return (
    <Card className="border-left-primary bg-white shadow card-chart">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        {children}
      </CardBody>
    </Card>
  );
};

export default CardChart;
