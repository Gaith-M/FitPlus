import useTranslation from 'next-translate/useTranslation';
import NumberInput from '../number-input';
import styles from './style.module.scss';

interface compInterface {
  title: string;
  quantity: number;
  price: number;
  id: string;
  color?: string;
  flavor?: string;
  size?: string;
  handleDelete: (
    id: string,
    color: string | null,
    flavor: string | null,
    size: string | null
  ) => void;
  handleChange: (
    id: string,
    color: string,
    size: string,
    flavor: string,
    quantity: number
  ) => void;
}

const index: React.FC<compInterface> = ({
  title,
  quantity,
  price,
  id,
  color,
  flavor,
  size,
  handleDelete,
  handleChange,
}) => {
  const { t } = useTranslation('cart');
  return (
    <div className={styles.mainContainer}>
      <div className={styles.nameAndButtonContainer}>
        <span>{title}</span>

        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(id, color, flavor, size)}
        >
          X
        </button>
      </div>
      <ul>
        {color && (
          <li>
            {t`color`}: <span>{color}</span>
          </li>
        )}
        {flavor && (
          <li>
            {t`flavor`}: <span>{flavor}</span>
          </li>
        )}
        {size && (
          <li>
            {t`size`}: <span>{size}</span>
          </li>
        )}
        <li>
          {t`quantity`}:
          <NumberInput
            quantity={quantity}
            id={id}
            handleChange={handleChange}
            color={color}
            flavor={flavor}
            size={size}
          />
        </li>
        <li>
          {t`price`}: <span>{price}$</span>
        </li>
        <li>
          {t`total`}: <span>{(price * quantity).toFixed(2)}$</span>
        </li>
      </ul>
    </div>
  );
};

export default index;
