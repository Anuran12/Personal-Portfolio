import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '7zofhq9h',
  dataset: 'portfolio',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk8eck2LKyeU3EqoS0USeRECXDUbveXZfwQvavILipt49IZsQV2F4S9H4vYEkEwoUxT0oUxRdiqu9vSCBBVAQKBFWFq0nF8r37g7DvD1bDvc6Z1uinxwxjoflq3WI4xCrhdHcgAzXUawlniZaM7VCAuiNhxzc6U5zWbMsrauJoKNNhabX2X6',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
