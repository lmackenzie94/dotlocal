import imageUrlBuilder from '@sanity/image-url';

const sanityApi = {
  projectId: '9nixtuwc',
  dataset: 'production',
};

const builder = imageUrlBuilder(sanityApi);

export function imageUrlFor(source) {
  return builder.image(source);
}
