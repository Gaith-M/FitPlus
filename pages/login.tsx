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

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        Login
      </Heading>

      <FlexContainer
        flexDirection='column'
        justify='center'
        align='center'
        m='90px auto 10px'
        w='100%'
      >
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
      </FlexContainer>

      <FlexContainer justify='flex-end' m='30px 0 0 0'>
        <Button noShadow={true}>Login</Button>
      </FlexContainer>

      <Paragraph
        color={secondaryLight}
        size='0.8em'
        style={{ position: 'absolute', bottom: 0 }}
      >
        Don't Have An Account?{' '}
        <Link href='/sign-up'>
          <a style={{ color: accent }}>Sign up</a>
        </Link>
      </Paragraph>
    </Container>
  );
};

export default login;
