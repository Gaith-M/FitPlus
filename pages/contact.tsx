import styled from 'styled-components';
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
  secondaryLight,
  space_1,
  space_2,
  space_max,
} from '../styles/styleConstants';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

const TextArea = styled.textarea`
  resize: none;
  flex: 1 1 100%;
  margin: 5px;
  padding: 5px;
  background-color: #f1f1f1;
  border: none;
  min-height: 100px;
  min-width: 300px;
  outline: none;
`;

const contact = () => {
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
    <Container m={`${space_max} 0`}>
      <Heading lvl={1}>{t`contactUs`}</Heading>
      <FlexContainer
        wrap='wrap'
        p={`${space_1} ${space_1}`}
        bg={secondaryLight}
        style={{ boxShadow: boxShadow }}
      >
        <FlexInput
          bg={light}
          inputName='firstName'
          value={firstName}
          placeholder={t`f-name`}
          flex='1 1 45%'
          handleChange={handleChange}
        />
        <FlexInput
          bg={light}
          inputName='lastName'
          value={lastName}
          placeholder={t`l-name`}
          flex='1 1 45%'
          handleChange={handleChange}
        />
        <FlexInput
          bg={light}
          inputName='email'
          value={email}
          placeholder={t`email`}
          flex='1 1 45%'
          handleChange={handleChange}
        />
        <FlexInput
          bg={light}
          inputName='phone'
          value={phone}
          placeholder={t`phone`}
          flex='1 1 45%'
          handleChange={handleChange}
        />

        <TextArea
          name='message'
          value={message}
          placeholder={t`message`}
          onChange={handleChange}
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
