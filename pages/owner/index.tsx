import { Box, Button, Stack, TextField } from "@mui/material";
import { FC } from "react";
import { Form, HandleForm } from "react-component-form";
import { PropertyMetadata } from "../../models/property";
import Pinata from '../../utils/pinata';

interface PropertyMetadataWithFile
  extends Omit<PropertyMetadata, "image" | "id"> {
  image: File;
}

const CreateForm: FC = () => {

  const handleSubmit: HandleForm = (formData, formElement) => {
    if (!formData.image) {
      alert("Please select an image");
      return;
    }

    const metadata: PropertyMetadataWithFile = {
      title: formData.title as string,
      description: formData.description as string,
      value: (formData.price as unknown) as number,
      image: formData.image as File,
      attributes: [
        {
          trait_type: formData.key1 as string,
          value: formData.value1 as string,
        },
        {
          trait_type: formData.key2 as string,
          value: formData.value2 as string,
        },
        {
          trait_type: formData.key3 as string,
          value: formData.value3 as string,
        },
      ],
    };
    // * Create the FormData and populate it to send to the server
    let formDataF = new FormData();
    formDataF.append("image", formData.image);
    formDataF.append("metadata", JSON.stringify(metadata));
    // * Send the formData to the server
    Pinata.uploadNFTData(formDataF).then((res) => {
      if (res.code === 200) {
        // TODO: Redirect to the new property or some other place (now it just pop ups an alert)
        console.log(res);
        alert(res.message);
        formElement.reset();
      } // TODO: Handle other code responses. Also from backend
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    });
  };

  return (
    <Box sx={{ margin: "25px" }}>
      <h3> Register your House </h3>
      <Form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2}>
          <TextField label="Title" required type="text" name="title" />
          <TextField
            label="Description"
            required
            type="text"
            name="description"
          />
          <TextField
            required
            label="Price"
            type="number"
            name="price"
            inputProps={{
              maxLength: 13,
              step: "0.0000001",
            }}
          />
          <Button variant="contained" component='label'>
            <input
              accept="image/*"
              hidden
              type="file"
              name="image"
            />
            Upload image
          </Button>
          <h4> Additional fields</h4>
          <Stack>
            <TextField label="Field" type="string" name="key1" />
            <TextField label="Value" type="string" name="value1" />
          </Stack>
          <Stack>
            <TextField label="Field" type="string" name="key2" />
            <TextField label="Value" type="string" name="value2" />
          </Stack>
          <Stack>
            <TextField label="Field" type="string" name="key3" />
            <TextField label="Value" type="string" name="value3" />
          </Stack>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Form>
    </Box>
  );
};

export default CreateForm;
