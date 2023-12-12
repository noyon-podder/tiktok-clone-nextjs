import { Query, database } from "@/libs/AppWriteClient";

const useGetProfileByUserId = async (userId: string) => {
  try {
    const response = await database.listDocuments(
      String(process.env.NEXT_PUBLIC_DATABASE_ID),
      String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE),
      [Query.equal("user_id", userId)]
    );
    const documents = response.documents;
    return {
      id: documents[0]?.$id,
      userId: documents[0]?.user_id,
      name: documents[0]?.name,
      bio: documents[0]?.bio,
      image: documents[0].image,
    };
  } catch (err) {
    throw err;
  }
};

export default useGetProfileByUserId;
