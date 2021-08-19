// --------------------Logic--------------------
import useTranslation from 'next-translate/useTranslation';
import { urlFor } from '../../lib/sanity';
import Link from 'next/link';
// --------------------UI Imports--------------------
import Button from '../button';
import { boxShadow, secondaryLight } from '../../styles/styleConstants';
// --------------------Component's Interface--------------------
import { itemInterface } from '../../interfaces/products';

interface CompInterface {
  data:
    | itemInterface
    | {
        name: string;
        slug: string;
        id: string;
        images: { alt: string; image: { asset: string } }[];
      };
  quickView?: (id: string) => void;
}

const index: React.FC<CompInterface> = ({
  data: { id, slug, images },
  quickView,
}) => {
  const { t } = useTranslation('shop');
  return (
    <div
      style={{
        backgroundColor: secondaryLight,
        width: 220,
        textAlign: 'center',
        boxShadow: boxShadow,
      }}
    >
      <img
        src={urlFor(images[0].image.asset).url()}
        alt={images[0].alt}
        width={200}
        height={200}
      />
      <Link href={`/products/${slug}`}>
        <a>
          <Button w='100%' noShadow>
            {t`quickView.view`}
          </Button>
        </a>
      </Link>

      {quickView && (
        <Button
          w='100%'
          noShadow
          handleClick={() => quickView(id)}
          m='10px 0 0 0'
        >{t`quickView.quickView`}</Button>
      )}
    </div>
  );
};

export default index;
