import { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setLoading, setUser } from '../redux/reducers/user-slice';
import notify from '../shared utility/notify';
import useTranslation from 'next-translate/useTranslation';
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
import 'react-toastify/dist/ReactToastify.min.css';
import router from 'next/router';

const Signup = () => {
  const { t } = useTranslation('user');
  const [username, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    // should be a request to back end - async function
    if (!username) {
      return notify('warning', t`errors.enterUsername`);
    }
    if (!email) {
      return notify('warning', t`errors.enterEmail`);
    }
    if (
      !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        email
      )
    ) {
      return notify('warning', t`errors.invalidEmail`);
    }
    if (!password) {
      return notify('warning', t`errors.enterPassword`);
    }
    if (!confirmPassword) {
      return notify('warning', t`errors.enterConfirmPassword`);
    }
    if (password !== confirmPassword) {
      return notify('warning', t`errors.passwordNotMatch`);
    }
    dispatch(setLoading(true));
    dispatch(
      setUser({
        username,
        email,
        firstName: null,
        lastName: null,
        address: null,
        phone: null,
      })
    );
    dispatch(setLoading(false));

    router.push(router.locale === 'en' ? '/' : '/ar');
  };

  return (
    <>
      <Container
        m={'120px auto 0'}
        w='320px'
        p='25px 5px 15px 5px'
        style={{
          height: '470px',
          boxShadow: boxShadow,
          background: 'url(/auth_bg_90OPC.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Heading lvl={1} s='2.2em' color={accent} m='0 0 30px 0'>
          {t`signUp`}
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
            placeholder={t`username`}
            value={username}
            handleChange={({ target: { value } }) => setUserName(value)}
          />
          <Input
            style={{ margin: '15px auto', backgroundColor: secondaryLight }}
            w='90%'
            inputName='email'
            placeholder={t`email`}
            value={email}
            handleChange={({ target: { value } }) => setEmail(value)}
          />
          <Input
            style={{ margin: '15px auto', backgroundColor: secondaryLight }}
            w='90%'
            inputName='password'
            placeholder={t`password`}
            value={password}
            handleChange={({ target: { value } }) => setPassword(value)}
          />
          <Input
            style={{ margin: '15px auto', backgroundColor: secondaryLight }}
            w='90%'
            inputName='confirmPassword'
            placeholder={t`confirmPassword`}
            value={confirmPassword}
            handleChange={({ target: { value } }) => setConfirmPassword(value)}
          />
        </FlexContainer>

        <FlexContainer justify='flex-end' m='20px 0 0 0'>
          {/* on click send data to backend - store the initial data in store */}
          <Button noShadow={true} handleClick={handleClick}>{t`signUp`}</Button>
        </FlexContainer>

        <Paragraph
          color={secondaryLight}
          size='0.8em'
          style={{ position: 'absolute', bottom: '-5px' }}
        >
          {t`haveAccount`}{' '}
          <Link href='/login'>
            <a style={{ color: accent, fontWeight: 'bold' }}>{t`login`}</a>
          </Link>
        </Paragraph>
      </Container>
      <div style={{ paddingBottom: 100 }} />
    </>
  );
};

export default Signup;

export async function getStaticProps() {
  return {
    props: {},
  };
}
