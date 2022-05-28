export interface PropertyMetadata {
  id: string;
  title: string;
  description?: string;
  image: string;
  value: number;
  attributes: MetadataProperties[];
}
export interface MetadataProperties {
  trait_type: string;
  value: string;
}

export const propertiesPlaceholder: PropertyMetadata[] = [
  {
    id: "placeholder",
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
    title: "Casa de dos dormitorios en la rambla",
    description: "Amueblada, hermosa propiedad",
    value: 2000,
    attributes: [
      {
        trait_type: "numero de baños",
        value: "2",
      },
      {
        trait_type: "acepta mascotas?",
        value: "no",
      },
    ],
  },
  {
    id: "placeholder2",
    image:
      "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_960_720.jpg",
    title: "Apto de un dormitorio en el centro de Montevideo",
    description: "Amplio patio",
    value: 2500,
    properties: [
      {
        name: "numero de baños",
        value: "2",
      },
      {
        name: "acepta mascotas?",
        value: "si",
      },
      {
        name: "m2",
        value: "57",
      },
    ],
  },
];
