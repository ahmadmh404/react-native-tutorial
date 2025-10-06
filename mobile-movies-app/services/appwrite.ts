import { Client, Databases, Query } from "react-native-appwrite";

// track the searches made by a user

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT_URL!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const db = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  // check if a record of that query is already stored

  const result = await db.listDocuments({
    databaseId: DATABASE_ID,
    collectionId: COLLECTION_ID,
    queries: [Query.equal("searchTerm", query)],
  });

  console.log("result: ", result);

  // @ts-ignore

  // if a document exists increase it's count
  // else create a new document initialize it's count to 1
};
