
import {createClient } from '@sanity/client'


export const sanityClient = createClient ({
    projectId: 'ly6zgrm8',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: true
})