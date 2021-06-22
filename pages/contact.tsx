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
  dark,
  light,
  onyx,
  secondaryLight,
  space_1,
  space_2,
  space_max,
} from '../styles/styleConstants';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

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
        return setMessage(value);
    }
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
          style={{ color: theme === 'light' ? dark : light }}
        />
        <FlexInput
          inputName='lastName'
          value={lastName}
          placeholder={t`l-name`}
          flex='1 1 45%'
          style={{ color: theme === 'light' ? dark : light }}
          handleChange={handleChange}
        />
        <FlexInput
          inputName='email'
          value={email}
          placeholder={t`email`}
          flex='1 1 45%'
          style={{ color: theme === 'light' ? dark : light }}
          handleChange={handleChange}
        />
        <FlexInput
          inputName='phone'
          value={phone}
          placeholder={t`phone`}
          flex='1 1 45%'
          style={{ color: theme === 'light' ? dark : light }}
          handleChange={handleChange}
        />

        <TextArea
          name='message'
          value={message}
          placeholder={t`message`}
          onChange={handleChange}
          color={theme === 'light' ? dark : light}
        />

        <div
          style={{
            flex: '1',
            marginTop: space_2,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            w='150px'
            handleClick={() =>
              console.log(firstName, lastName, email, phone, message)
            }
          >
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
