import { Container, DetailField } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Card, CardBody } from 'reactstrap';

const DetailSupplier = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState();

  const loadDetail = () => {
    const res = {
      data: {
        id: 1,
        name: 'Asep Jujus',
        phone: '9080981239'
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
            <DetailField title="No. Telepon" value={data?.phone} />

            <span className="d-flex align-items-center">
              Klik
              <Button
                style={{ padding: 6 }}
                color="link"
                onClick={() => router.push({ pathname: '/item', query: { supplier: data?.name } })}>
                di sini
              </Button>
              untuk melihat item yang dijual oleh supplier ini.
            </span>
          </CardBody>
        </Card>
      </Container>
    </PrivateLayout>
  );
};

export default DetailSupplier;
