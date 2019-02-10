import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  render() {
    return (
      <Form>
      <Form.Field>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="example@example.com"/>
      </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
