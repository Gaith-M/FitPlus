import Image from 'next/image';

interface ComponentInterface {
  height: number;
  width: number;
  alt: string;
}

export const Logo: React.FC<ComponentInterface> = ({ height, width, alt }) => (
  <Image height={height} width={width} src='/Fit_Logo.webp' alt={alt} />
);
