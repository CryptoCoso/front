const baseUri = 'https://nfrenting.herokuapp.com/v1';
const baseUriLocal = 'http://127.0.0.1:8080/v1';

interface NFTCreationResponse {
  metadataHash?: string;
  imageHash?: string;
  message: string;
  code: number;
}

const testAuth = async (): Promise<unknown> => {
  const response = await fetch(`${baseUri}/auth`, {
    method: 'GET',
  });
  return response.json();
};

const getImages = async (): Promise<unknown> => {
  try {
    const response = await fetch(`${baseUri}/get-images`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      message: "Couldn't get images",
    };
  }
}

const getMetadata = async (): Promise<unknown> => {
  try {
    const response = await fetch(`${baseUri}/get-metadata`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      message: "Couldn't get metadata",
    };
  }
}

const uploadNFTData = async (formData: FormData): Promise<NFTCreationResponse> => {
  try {
    console.log({ formData, json: JSON.stringify(formData) })
    const response = await fetch(`${baseUri}/create-nft`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      message: "Couldn't mint NFT",
      code: 500,
    };
  }
}

export default {
  testAuth,
  getImages,
  getMetadata,
  uploadNFTData,
}