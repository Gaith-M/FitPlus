import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createClient,
} from 'next-sanity';

const config = {
  dataset: 'production',
  projectId: 'ubs2y0x5',
  apiVersion: '2021-03-25',
  useCdn: false,
};

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
