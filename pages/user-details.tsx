import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { themeSelector } from '../redux/reducers/theme-slice';
// ----------------------- UI Imports -----------------------
import Heading from '../components/heading';
import Button from '../components/button';
import { userInterface } from '../interfaces/user';
import { updateUser } from '../redux/reducers/user-slice';
import styles from '../styles/user-details.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { sanityClient, urlFor } from '../lib/sanity';
import { itemsInWishlist, likedBlogsQuery } from '../queries';
import Link from 'next/link';
import notify from '../shared utility/notify';
import 'react-toastify/dist/ReactToastify.min.css';
import Meta from '../components/Meta';

const index = () => {
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  const user: userInterface = useAppSelector(({ user }) => user.user);
  const wishlist: string[] = useAppSelector(({ user }) => user.wishlist);
  const favoriteBlogs: string[] = useAppSelector(
    ({ user }) => user.favoriteBlogs
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation('user');
  const { locale, replace } = useRouter();

  useEffect(() => {
    if (!user) {
      locale === 'en' ? replace('/login') : replace('/ar/login');
    }
  }, [user]);

  const [firstName, setFirstName] = useState(user?.firstName ?? '');
  const [lastName, setLastName] = useState(user?.lastName ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [address, setAddress] = useState(user?.address ?? '');
  const [phone, setPhone] = useState(user?.phone ?? '');
  const [editMode, toggleEditMode] = useState(false);

  const [newName, setNewName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);
  const [newAddress, setNewAddress] = useState(address);
  const [newPhone, setNewPhone] = useState(phone);

  const cancelEdit = () => {
    // retreive user details from store and refill the state
    // cancel edit mode
    setNewName(firstName);
    setNewLastName(lastName);
    setNewEmail(email);
    setNewAddress(address);
    setNewPhone(phone);
    toggleEditMode(false);
  };

  const confirmEdit = () => {
    // submit the new vals and cancel edit mode
    if (!newName) {
      return notify('warning', t`errors.enterFirstName`);
    }
    if (!newLastName) {
      return notify('warning', t`errors.enterLastName`);
    }
    if (!newPhone) {
      return notify('warning', t`errors.enterPhone`);
    }
    if (!newEmail) {
      return notify('warning', t`errors.enterEmail`);
    }
    if (
      !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        newEmail
      )
    ) {
      return notify('warning', t`errors.invalidEmail`);
    }
    if (!newAddress) {
      return notify('warning', t`errors.enterAddress`);
    }

    toggleEditMode(false);
    setFirstName(newName);
    setLastName(newLastName);
    setEmail(newEmail);
    setAddress(newAddress);
    setPhone(newPhone);
    dispatch(
      updateUser({
        firstName: newName,
        lastName: newLastName,
        email: newEmail,
        address: newAddress,
        phone: newPhone,
      })
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        // return setFirstName(value);
        return setNewName(value);
      case 'lastName':
        return setNewLastName(value);
      case 'email':
        return setNewEmail(value);
      case 'phone':
        return setNewPhone(value);
      case 'address':
        return setNewAddress(value);
      default:
        return null;
    }
  };

  // ------------------------------------------
  // ------------------------------------------
  // fetching liked blogs and items in wishlist
  // ------------------------------------------
  // ------------------------------------------
  const [likedBlogs, setLikedBlogs] = useState<
    { id: string; title: string; slug: string }[] | null
  >(null);
  const [wishlistItems, setWishlistItems] = useState<
    | {
        id: string;
        name: string;
        slug: string;
        image: { alt: string; image: { asset: { _ref: string } } };
      }[]
    | null
  >(null);
  const fetchBlogs = async () => {
    if (favoriteBlogs.length === 0) return;
    try {
      const blogs = await sanityClient.fetch(likedBlogsQuery, {
        lang: locale,
        // retreived from the user
        idsArray: favoriteBlogs,
      });
      setLikedBlogs(blogs);
    } catch (err) {
      console.log('error ouccered', err);
    }
  };

  const fetchWishListItems = async () => {
    if (wishlist.length === 0) return;
    try {
      const items = await sanityClient.fetch(itemsInWishlist, {
        lang: locale,
        idsArray: wishlist,
      });
      setWishlistItems(items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchWishListItems();
    fetchBlogs();
  }, [locale]);

  return (
    <>
      <Meta title={t`userDetails`} />

      <div style={{ marginTop: 100, paddingBottom: 100 }} className={theme}>
        <Heading lvl='display'>{t`wishlist`}</Heading>
        {wishlistItems ? (
          <div
            className={styles.container}
            style={{
              backgroundColor:
                theme === 'light' ? 'var(--secondaryLight)' : 'var(--onyx)',
            }}
          >
            <div
              className='gridContainer'
              style={{
                backgroundColor:
                  theme === 'light' ? 'var(--secondaryLight)' : 'var(--onyx)',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              }}
            >
              {wishlistItems.map(({ id, name, slug, image }) => (
                <div className={styles.wishlistItemsCard}>
                  <img src={urlFor(image.image.asset).url()} alt={image.alt} />
                  <Link key={id} href={`products/${slug}`}>
                    <a className={styles.link}>{name}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`${styles.container} ${styles.noResultsContainer}`}
            style={{
              backgroundColor:
                theme === 'light' ? 'var(--secondaryLight)' : 'var(--onyx)',
            }}
          >
            {t`noWishlist`}
          </div>
        )}

        <Heading lvl='display'>{t`likedBlogs`}</Heading>
        {likedBlogs ? (
          <div
            className={styles.container}
            style={{
              backgroundColor:
                theme === 'light' ? 'var(--secondaryLight)' : 'var(--onyx)',
            }}
          >
            {likedBlogs.map(({ id, title, slug }) => (
              <Link key={id} href={`blogs/${slug}`}>
                <a className={styles.link}>{title}</a>
              </Link>
            ))}
          </div>
        ) : (
          <div
            className={`${styles.container} ${styles.noResultsContainer}`}
            style={{
              backgroundColor:
                theme === 'light' ? 'var(--secondaryLight)' : 'var(--onyx)',
            }}
          >
            {t`noLikedBlogs`}
          </div>
        )}

        <Heading lvl='display'>{t`userDetails`}</Heading>

        <div
          className={styles.formContainer}
          style={{
            backgroundColor:
              theme === 'light' ? 'var(--secondaryLight)' : 'var(--onyx)',
          }}
        >
          <label className={styles.userDetailsInput}>
            <span>First Name:</span>
            <input
              type='text'
              name='name'
              readOnly={!editMode}
              onChange={handleChange}
              value={editMode ? newName : firstName}
              placeholder={t`firstName`}
              autoComplete='off'
              style={{
                backgroundColor:
                  theme === 'dark' ? 'var(--raisinBlack)' : 'var(--light)',
                color: theme === 'dark' ? 'var(--light)' : 'var(--raisinBlack)',
              }}
            />
          </label>

          <label className={styles.userDetailsInput}>
            <span>First Name:</span>
            <input
              type='text'
              name='lastName'
              readOnly={!editMode}
              onChange={handleChange}
              value={editMode ? newLastName : lastName}
              placeholder={t`lastName`}
              autoComplete='off'
              style={{
                backgroundColor:
                  theme === 'dark' ? 'var(--raisinBlack)' : 'var(--light)',
                color: theme === 'dark' ? 'var(--light)' : 'var(--raisinBlack)',
              }}
            />
          </label>

          <label className={styles.userDetailsInput}>
            <span>phone:</span>
            <input
              type='number'
              name='phone'
              readOnly={!editMode}
              onChange={handleChange}
              value={editMode ? newPhone : phone}
              placeholder={t`phone`}
              autoComplete='off'
              style={{
                backgroundColor:
                  theme === 'dark' ? 'var(--raisinBlack)' : 'var(--light)',
                color: theme === 'dark' ? 'var(--light)' : 'var(--raisinBlack)',
              }}
            />
          </label>

          <label className={styles.userDetailsInput}>
            <span>email:</span>
            <input
              type='email'
              name='email'
              readOnly={!editMode}
              onChange={handleChange}
              value={editMode ? newEmail : email}
              placeholder={t`email`}
              autoComplete='off'
              style={{
                backgroundColor:
                  theme === 'dark' ? 'var(--raisinBlack)' : 'var(--light)',
                color: theme === 'dark' ? 'var(--light)' : 'var(--raisinBlack)',
              }}
            />
          </label>
          <label className={styles.userDetailsInput}>
            <span>address:</span>
            <input
              type='text'
              name='address'
              readOnly={!editMode}
              onChange={handleChange}
              value={editMode ? newAddress : address}
              placeholder={t`address`}
              autoComplete='off'
              style={{
                backgroundColor:
                  theme === 'dark' ? 'var(--raisinBlack)' : 'var(--light)',
                color: theme === 'dark' ? 'var(--light)' : 'var(--raisinBlack)',
              }}
            />
          </label>

          <div className={styles.buttonsContainer}>
            {editMode ? (
              <Button m='0 20px' w='150px' handleClick={cancelEdit}>
                {' '}
                {t`cancel`}{' '}
              </Button>
            ) : null}

            {!editMode && (
              <Button w='150px' handleClick={() => toggleEditMode(!editMode)}>
                {t`edit`}
              </Button>
            )}
            {editMode && (
              <Button w='150px' handleClick={confirmEdit}>
                {t`confirm`}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
