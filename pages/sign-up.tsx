import { useState } from 'react';
import Link from 'next/Link';
import {
  Container,
  FlexContainer,
} from '../components/shared-components/containers';
import { accent, boxShadow, secondaryLight } from '../styles/styleConstants';
import Heading from '../components/heading';
import Input from '../components/form-input';
import Button from '../components/button';
import Paragraph from '../components/paragraph';

const Signup = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Container
      m={'120px auto'}
      w='320px'
      p='25px 5px 15px 5px'
      style={{
        height: '460px',
        boxShadow: boxShadow,
        background: 'url(/auth_bg_90OPC.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <Heading lvl={1} s='2.2em' color={accent} m='0 0 30px 0'>
        Sign up
      </Heading>

      <FlexContainer
        style={{ minHeight: 200 }}
        flexDirection='column'
        justify='center'
        align='center'
        m='20px auto'
        w='100%'
      >
        <Input
          style={{ margin: '15px auto', backgroundColor: secondaryLight }}
          w='90%'
          inputName='username'
          placeholder='user name'
          value={username}
          handleChange={({ target: { value } }) => setUserName(value)}
        />
        <Input
          style={{ margin: '15px auto', backgroundColor: secondaryLight }}
          w='90%'
          inputName='email'
          placeholder='email'
          value={email}
          handleChange={({ target: { value } }) => setEmail(value)}
        />
        <Input
          style={{ margin: '15px auto', backgroundColor: secondaryLight }}
          w='90%'
          inputName='password'
          placeholder='password'
          value={password}
          handleChange={({ target: { value } }) => setPassword(value)}
        />
        <Input
          style={{ margin: '15px auto', backgroundColor: secondaryLight }}
          w='90%'
          inputName='confirmPassword'
          placeholder='confirm password'
          value={confirmPassword}
          handleChange={({ target: { value } }) => setConfirmPassword(value)}
        />
      </FlexContainer>

      <FlexContainer justify='flex-end' m='20px 0 0 0'>
        <Button noShadow={true}>sign up</Button>
      </FlexContainer>

      <Paragraph
        color={secondaryLight}
        size='0.8em'
        style={{ position: 'absolute', bottom: 0 }}
      >
        Already Have An Account?{' '}
        <Link href='/login'>
          <a style={{ color: accent }}>Login</a>
        </Link>
      </Paragraph>
    </Container>
  );
};

export default Signup;
