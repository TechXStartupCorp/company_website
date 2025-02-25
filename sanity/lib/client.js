import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-25', // Use a recent date or 'v2023-06-20' as a fallback
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
