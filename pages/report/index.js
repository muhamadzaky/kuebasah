import 'react-calendar/dist/Calendar.css';

import { Container, DetailField, DetailField2 } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayout';
import Helper from '@utils/Helper';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container as BootCont,
  Form,
  FormGroup,
  Input,
  Modal
} from 'reactstrap';

const ReportPage = () => {
  const router = useRouter();

  const [select, setSelect] = useState();
  const [dateStart, setDateStart] = useState(new Date());
  const [dateFinish, setDateFinish] = useState(new Date());
  const [activeDateOpened, setActiveDateOpened] = useState('start');
  const [modalDate, setModalDate] = useState(false);
  const [showBill, setShowBill] = useState(false);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  const onSetDate = (value) => {
    setModalDate(!modalDate);

    if (activeDateOpened === 'start') {
      setDateStart(new Date(value));
    }
    if (activeDateOpened === 'finish') {
      setDateFinish(new Date(value));
    }
  };

  const renderModalDate = () => {
    return (
      <Modal
        contentClassName="rounded"
        isOpen={modalDate}
        centered
        toggle={() => setModalDate(!modalDate)}>
        <BootCont>
          <Calendar
            locale={router.locale}
            onChange={(value) => onSetDate(value, activeDateOpened)}
            value={activeDateOpened === 'start' ? dateStart : dateFinish}
          />
        </BootCont>
      </Modal>
    );
  };

  const onSubmitFilter = () => {
    const params = {
      select,
      dateStart,
      dateFinish
    };

    console.log(params);
    setShowBill(true);
  };

  return (
    <PrivateLayout title="Report">
      <Container title="Report">
        <div className="d-flex justify-align-between row">
          <div className="col-cs-12 col-sm-12 col-md-7 col-lg-7">
            <Card className="shadow">
              <CardBody>
                <CardTitle className="d-flex justify-content-between">
                  <h3>Filter</h3>
                  <Button onClick={onSubmitFilter}>Search</Button>
                </CardTitle>

                <hr />

                <div>
                  <span>Supplier</span>
                  <Select options={options} onChange={setSelect} value={select} />
                </div>

                <Form className="mt-3 d-flex row">
                  <FormGroup className="col-6">
                    <label htmlFor="start-date">Tanggal Mulai</label>
                    <Input
                      id="start-date"
                      value={dayjs(dateStart).format('DD MMMM YYYY')}
                      onClick={() => {
                        setModalDate(!modalDate);
                        setActiveDateOpened('start');
                      }}
                    />
                  </FormGroup>

                  <FormGroup className="col-6">
                    <label htmlFor="end-date">Tanggal Selesai</label>
                    <Input
                      id="end-date"
                      value={dayjs(dateFinish).format('DD MMMM YYYY')}
                      onClick={() => {
                        setModalDate(!modalDate);
                        setActiveDateOpened('finish');
                      }}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </div>

          <div className="col-cs-12 col-sm-12 col-md-5 col-lg-5">
            <Card className="shadow">
              <CardBody>
                <CardTitle className="d-flex justify-content-between">
                  <h3>Bill</h3>
                  <Button>Print PDF</Button>
                </CardTitle>

                <hr />

                {showBill && (
                  <div className="bill-wrapper">
                    <Card>
                      <CardBody>
                        <div className="d-flex align-items-center flex-column">
                          <img src="/assets/images/logo.jpeg" alt="logo" width={100} />
                          <div className="d-flex align-items-start flex-column w-100">
                            <span>{`<Nama Supplier>`}</span>
                            <span>{`<Tanggal Masuk>`}</span>
                            <span>{`<Tanggal Keluar>`}</span>
                          </div>
                        </div>

                        <div className="mt-5">
                          <DetailField2
                            classValue="d-flex justify-content-end"
                            title="kue pancong"
                            subtitle={`2x ${Helper.moneyFormat(1500)}`}
                            value={Helper.moneyFormat(3000)}
                          />
                          <hr />
                          <DetailField2
                            classValue="d-flex justify-content-end"
                            title="Total"
                            value={Helper.moneyFormat(3000)}
                          />
                        </div>

                        <div className="d-flex flex-column mt-5">
                          <span>Terima kasih telah menjadi supplier kami.</span>
                          <span>---------</span>
                          <span>Kue Basah Bu Eva</span>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>

      {renderModalDate()}
    </PrivateLayout>
  );
};

export default ReportPage;
