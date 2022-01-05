import ActionFilterByText from '@components/filter/ActionFilterByText';
import { Container } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayout';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import Div100vh from 'react-div-100vh';
import { Card, CardBody } from 'reactstrap';

const supplier = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      name: 'Nama',
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: 'No. Telepon',
      selector: (row) => row.phone,
      sortable: true
    }
  ];

  const fetchData = (page = 1) => {
    const res = {
      data: [
        {
          id: 1,
          name: 'Asep Jujus',
          phone: '9080981239'
        },
        {
          id: 2,
          name: 'Suherti',
          phone: '8839138749'
        },
        {
          id: 3,
          name: 'Bambang',
          phone: '2283784392'
        }
      ],
      meta: {
        page: 1,
        limit: 10,
        totalRows: 3
      }
    };

    setLoading(true);

    setTimeout(() => {
      setData(res?.data);
      setTotalRows(res?.meta?.totalRows);
      setPerPage(res?.meta?.limit);
      setLoading(false);
    }, 1000);
  };

  const handlePageChange = (page) => {
    fetchData(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    const res = {
      data: [
        {
          id: 1,
          name: 'Asep Jujus',
          phone: '9080981239'
        },
        {
          id: 2,
          name: 'Suherti',
          phone: '8839138749'
        },
        {
          id: 3,
          name: 'Bambang',
          phone: '2283784392'
        }
      ],
      meta: {
        page: 1,
        limit: 10,
        totalRows: 3,
        message: 'success',
        code: 200
      }
    };

    setData(res.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  const subHeaderComponentMemo = useMemo(() => {
    const handleSearch = () => {
      fetchData(1);
    };

    return (
      <ActionFilterByText
        searchText={searchText}
        onChangeText={(e) => setSearchText(e.target.value)}
        onSearch={handleSearch}
        placeholder="Nama"
      />
    );
  }, [searchText]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Div100vh>
      <PrivateLayout title="Supplier">
        <Container title="Supplier">
          <Card className="shadow">
            <CardBody>
              <DataTable
                columns={columns}
                data={data}
                subHeaderComponent={subHeaderComponentMemo}
                onRowClicked={(row) => router.push(`/supplier/detail/${row.id}`)}
                className="table table-bordered dt-responsive"
                paginationServer
                paginationTotalRows={totalRows}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                persistTableHead
                highlightOnHover
                pagination
                subHeader
                progressPending={loading}
              />
            </CardBody>
          </Card>
        </Container>
      </PrivateLayout>
    </Div100vh>
  );
};

export default supplier;
