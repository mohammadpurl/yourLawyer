import { Pinecone } from '@pinecone-database/pinecone'

// export const getPineconeClient = async () => {
//   const client = new Pinecone()

//   await client.init({
//     apiKey: process.env.PINECONE_API_KEY!,
//     environment: 'us-east1-gcp',
//   })

//   return client
// }

export const pinecone = new Pinecone({
  apiKey: process.env.PINEKONE_API_KEY!,
  controllerHostUrl: 'a',
})
 