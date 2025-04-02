import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'ly6zgrm8',  // Hämta detta från din Sanity-projektpanel
  dataset: 'production',          // Eller annat dataset om du valt annorlunda
  useCdn: true,                   // true ger snabbare cacheade svar
  apiVersion: '2023-01-01',       // Ange ett API-version datum
});

export default sanityClient