const baseUri = 'nfrenting.herokuapp.com';

const testAuth = async (): Promise<unknown> => {
  const response = await fetch(`https://${baseUri}/auth`, {
    method: 'GET',
  });
  return response.json();
};

const getImages = async (): Promise<unknown> => {
  try {
    const response = await fetch(`https://${baseUri}/get-images`, {
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
    const response = await fetch(`https://${baseUri}/get-metadata`, {
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

const mintNft = async (formData: FormData): Promise<unknown> => {
  try {
    console.log({ formData, json: JSON.stringify(formData) })
    const response = await fetch(`https://${baseUri}/create-nft`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      message: "Couldn't mint NFT",
    };
  }
}

export default {
  testAuth,
  getImages,
  getMetadata,
  mintNft,
}