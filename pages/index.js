import CardChart from '@components/card/CardChart';
import CardReport from '@components/card/CardReport';
import { Container } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayout';
import { t } from '@utils/t';
import { useRouter } from 'next/router';
import React from 'react';
import { Line } from 'react-chartjs-2';

const Index = (props) => {
  const Router = useRouter();
  const { hello } = t[Router.locale];
  const { isMobile } = props;

  const dummyChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <PrivateLayout>
      <Container className="dashboard-container">
        <h1>{hello}</h1>

        <div className="d-flex justify-content-between">
          <CardReport title="Card 1" subtitle={50} />
          <CardReport title="Card 2" subtitle={110} />
        </div>

        <div className="mt-3 mx-1">
          <CardChart title="Card 3" subtitle="Chart Penjualan Bulanan">
            <div className="chart-wrapper">
              {/* <Line data={dummyChartData} width={400} height={400} /> */}
            </div>
          </CardChart>
        </div>
      </Container>
    </PrivateLayout>
  );
};

export default Index;
