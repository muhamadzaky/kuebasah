import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Div100vh from 'react-div-100vh';
import { Button, Form, FormFeedback, FormGroup, Input, Label, Spinner } from 'reactstrap';

const auth = ({ isMobile }) => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const validation = () => {
    let status = false;

    if (!username) {
      setUsernameError(true);
      status = true;
    }

    if (!password) {
      setPasswordError(true);
      status = true;
    }

    return status;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if (validation()) {
      setLoading(false);
      return;
    }

    const params = {
      username,
      password,
      checked
    };

    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('heavyrotation', JSON.stringify(params));
      router.push('/');
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Masuk</title>
      </Head>

      <Div100vh className="d-flex justify-content-center align-items-center">
        <div className={`shadow w-${isMobile ? '75' : '25'} p-4 auth-box`}>
          <h1 className="mb-3">Login</h1>

          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="username"
                type="text"
                invalid={usernameError}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (e.target.value.length > 0) setUsernameError(false);
                }}
              />
              {usernameError && <FormFeedback tooltip>Username harus diisi!</FormFeedback>}
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="password"
                type="password"
                invalid={passwordError}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value.length > 0) setPasswordError(false);
                }}
              />
              {passwordError && <FormFeedback tooltip>Password harus diisi!</FormFeedback>}
            </FormGroup>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <FormGroup check>
                <Input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setChecked(e.target.checked);
                    }
                  }}
                />{' '}
                <Label check>Remember</Label>
              </FormGroup>

              <Button
                className="d-flex align-items-center justify-content-center"
                color="primary"
                type="submit">
                {loading ? <Spinner color="light" size="sm" /> : 'Login'}
              </Button>
            </div>
          </Form>
        </div>
      </Div100vh>
    </>
  );
};

export default auth;
