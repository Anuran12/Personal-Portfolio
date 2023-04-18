import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '7zofhq9h',
  dataset: 'portfolio',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skPxKK9QtmbkB0HAFfYnXvQofa3F7tItWetSp45PUToV6G5OLWpGpMz3cbTBq4UaP84STf9ya3Z4y16RvdWKbu9vJuXYpXO2elaF0GB9ugsRW1XbbUUExl6iRpboQxs07OikQVQcRL10C7uxXp9ZbZDcLQ5JV9FH8xo0xVIRgxugFmRSYnwK',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
