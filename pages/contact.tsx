import styled from 'styled-components';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useAppSelector } from '../redux/hooks';
import { themeSelector } from '../redux/reducers/theme-slice';
// -----------------------UI Imports-----------------------
import Heading from '../components/heading';
import Button from '../components/button';
import FlexInput from '../components/form-input';
import {
  Container,
  FlexContainer,
} from '../components/shared-components/containers';
import {
  boxShadow,
  light,
  onyx,
  secondaryLight,
  space_1,
  space_2,
  space_max,
} from '../styles/styleConstants';
import notify from '../shared utility/notify';
import 'react-toastify/dist/ReactToastify.min.css';

const TextArea = styled.textarea`
  resize: none;
  flex: 1 1 100%;
  margin: 5px;
  padding: 5px;
  border: none;
  min-height: 100px;
  min-width: 300px;
  outline: none;
  background-color: ${light};
  color: ${({ color }) => color};
`;

const contact = () => {
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  const { t } = useTranslation('contact');
  const { user } = useAppSelector(({ user }) => user);
  const [firstName, setFirstName] = useState<string>(
    user ? user.firstName : ''
  );
  const [lastName, setLastName] = useState<string>(user ? user.lastName : '');
  const [email, setEmail] = useState<string>(user ? user.email : '');
  const [phone, setPhone] = useState<string>(user ? user.phone : '');
  const [message, setMessage] = useState<string>('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'firstName':
        return setFirstName(value);
      case 'lastName':
        return setLastName(value);
      case 'email':
        return setEmail(value);
      case 'phone':
        return setPhone(value);
      case 'message':
        if (value.length > 500)
          return notify('warning', t`errors.messageLimit`, 'textAreaWarning');
        return setMessage(value);
    }
  };

  const handleSubmit = () => {
    if (!firstName) {
      return notify('warning', t`errors.firstName`);
    }
    if (!lastName) {
      return notify('warning', t`errors.lastName`);
    }
    if (!email) {
      return notify('warning', t`errors.email`);
    }
    if (!phone) {
      return notify('warning', t`errors.phone`);
    }
    if (!message) {
      return notify('warning', t`errors.message`);
    }

    // send to back end

    // notify user according to response
    notify('success', t`messageSentSuccess`);

    // clear fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <Container
      m={`${space_max} 0 0`}
      p={`0 0 ${space_max} 0`}
      className={theme}
    >
      <Heading lvl={1}>{t`contactUs`}</Heading>
      <FlexContainer
        wrap='wrap'
        p={`${space_1} ${space_1}`}
        bg={theme === 'light' ? secondaryLight : onyx}
        style={{ boxShadow: boxShadow }}
      >
        <FlexInput
          inputName='firstName'
          flex='1 1 45%'
          value={firstName}
          placeholder={t`f-name`}
          handleChange={handleChange}
          style={{ color: 'inherit' }}
        />
        <FlexInput
          inputName='lastName'
          value={lastName}
          placeholder={t`l-name`}
          flex='1 1 45%'
          style={{ color: 'inherit' }}
          handleChange={handleChange}
        />
        <FlexInput
          inputName='email'
          value={email}
          placeholder={t`email`}
          flex='1 1 45%'
          style={{ color: 'inherit' }}
          handleChange={handleChange}
        />
        <FlexInput
          inputName='phone'
          value={phone}
          placeholder={t`phone`}
          flex='1 1 45%'
          style={{ color: 'inherit' }}
          handleChange={handleChange}
        />

        <TextArea
          name='message'
          value={message}
          placeholder={t`message`}
          onChange={handleChange}
          color='inherit'
        />

        <div
          style={{
            flex: '1',
            marginTop: space_2,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button w='150px' handleClick={handleSubmit}>
            {t`submit`}
          </Button>
        </div>
      </FlexContainer>
    </Container>
  );
};

export default contact;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
