import { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setLoading, setUser } from '../redux/reducers/user-slice';
import router from 'next/router';
import notify from '../shared utility/notify';
import Link from 'next/Link';
import useTranslation from 'next-translate/useTranslation';
import { FlexContainer } from '../components/shared-components/containers';
import { accent, boxShadow, secondaryLight } from '../styles/styleConstants';
import Heading from '../components/heading';
import Input from '../components/form-input';
import Button from '../components/button';
import Paragraph from '../components/paragraph';
import Meta from '../components/Meta';
import 'react-toastify/dist/ReactToastify.min.css';

const login = () => {
  const { t } = useTranslation('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleClick = () => {
    // should be a request to back end - async function

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
    dispatch(setLoading(true));
    dispatch(
      //populate using the data recieved
      // if logs in successfully redirect to home page
      setUser({
        email,
        username: 'test',
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
      <Meta title={t`loginTitle`} />
      <div
        style={{
          margin: '120px auto 0',
          width: '320px',
          padding: '25px 5px 15px 5px',
          height: '470px',
          boxShadow: boxShadow,
          background: 'url(/auth_bg_90OPC.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Heading lvl={1} s='2.2em' color={accent} m='0 0 30px 0'>
          {t`login`}
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
        </FlexContainer>

        <FlexContainer justify='flex-end' m='30px 0 0 0'>
          <Button noShadow={true} handleClick={handleClick}>{t`login`}</Button>
        </FlexContainer>

        <Paragraph
          color={secondaryLight}
          size='0.8em'
          style={{ position: 'absolute', bottom: 0 }}
        >
          {t`dontHaveAccount`}{' '}
          <Link href='/sign-up'>
            <a style={{ color: accent, fontWeight: 'bold' }}>{t`signUp`}</a>
          </Link>
        </Paragraph>
      </div>
      <div style={{ paddingBottom: 100 }} />
    </>
  );
};

export default login;

export async function getStaticProps() {
  return {
    props: {},
  };
}
