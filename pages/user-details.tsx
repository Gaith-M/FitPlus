import { useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { themeSelector } from '../redux/reducers/theme-slice';
// ----------------------- UI Imports -----------------------
import Heading from '../components/heading';
import Button from '../components/button';
import {
  Container,
  FlexContainer,
} from '../components/shared-components/containers';
import {
  boxShadow,
  onyx,
  secondaryLight,
  space_1,
  space_2,
  space_max,
} from '../styles/styleConstants';

const index = () => {
  const [name, setName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('John@gmail.com');
  const [address, setAddress] = useState('some place');
  const [phone, setPhone] = useState('231231232');
  const [password, setPassword] = useState('John');
  const [editMode, toggleEditMode] = useState(false);

  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';

  const cancelEdit = () => {
    // retreive user details from store and refill the state
    // cancel edit mode
    toggleEditMode(false);
  };

  const confirmEdit = () => {
    // submit the new vals and cancel edit mode
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'lastName':
        return setLastName(value);
      case 'email':
        return setEmail(value);
      case 'phone':
        return setPhone(value);
      case 'address':
        return setAddress(value);
      default:
        return null;
    }
  };
  return (
    <Container
      m={`${space_max} 0 0`}
      p={`0 0 ${space_max} 0`}
      className={theme}
    >
      <Heading lvl='display'>User Details</Heading>

      <FlexContainer
        wrap='wrap'
        p={`${space_1} ${space_1}`}
        bg={theme === 'light' ? secondaryLight : onyx}
        style={{ boxShadow: boxShadow }}
      >
        <label className='userDetailsInput'>
          <span>First Name:</span>
          <input
            type='text'
            name='name'
            readOnly={!editMode}
            onChange={handleChange}
            value={name}
          />
        </label>

        <label className='userDetailsInput'>
          <span>First Name:</span>
          <input
            type='text'
            name='lastName'
            readOnly={!editMode}
            onChange={handleChange}
            value={lastName}
          />
        </label>

        <label className='userDetailsInput'>
          <span>phone:</span>
          <input
            type='number'
            name='phone'
            readOnly={!editMode}
            onChange={handleChange}
            value={phone}
          />
        </label>

        <label className='userDetailsInput'>
          <span>email:</span>
          <input
            type='email'
            name='email'
            readOnly={!editMode}
            onChange={handleChange}
            value={email}
          />
        </label>
        <label className='userDetailsInput'>
          <span>address:</span>
          <input
            type='text'
            name='address'
            readOnly={!editMode}
            onChange={handleChange}
            value={address}
          />
        </label>

        <div
          style={{
            flex: '1 100%',
            order: 1,
            margin: space_2,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {editMode ? (
            <Button m='0 20px' w='150px' handleClick={cancelEdit}>
              {' '}
              cancel{' '}
            </Button>
          ) : null}

          <Button w='150px' handleClick={() => toggleEditMode(!editMode)}>
            {editMode ? 'confirm' : 'edit'}
          </Button>
        </div>
      </FlexContainer>
    </Container>
  );
};

export default index;
