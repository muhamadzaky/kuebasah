import { Container, DetailField } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayout';
import Helper from '@utils/Helper';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, CardBody } from 'reactstrap';

const DetailSupplier = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState();

  const loadDetail = () => {
    const res = {
      data: {
        id: 1,
        name: 'Kimbab',
        price: 6000,
        supplier: 'Papa Blar'
      },
      meta: {
        message: 'success',
        code: 200
      }
    };

    setData(res?.data);
  };

  useEffect(() => {
    loadDetail();
  }, []);

  return (
    <PrivateLayout>
      <Container title="Detail" style={{ height: '84.3vh' }}>
        <Card className="shadow">
          <CardBody>
            <DetailField title="Nama" value={data?.name} />
            <DetailField title="Harga" value={Helper.moneyFormat(data?.price)} />
            <DetailField title="Nama Supplier" value={data?.supplier} />
          </CardBody>
        </Card>
      </Container>
    </PrivateLayout>
  );
};

export default DetailSupplier;
