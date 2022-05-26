import { Box, Button, Stack, TextField } from "@mui/material";
import { FC } from "react";
import { Form, HandleForm } from "react-component-form";
import { PropertyMetadata } from "../../models/property";

interface PropertyMetadataWithFile
  extends Omit<PropertyMetadata, "image" | "id"> {
  image: File;
}

const CreateForm: FC = () => {
  const handleSubmit: HandleForm = (formData, formElement) => {
    // TODO: here we should create the property on the blockchain
    // TODO: Check how to send the image
    if (!formData.image) {
      alert("Please select an image");
      return;
    }

    const metadata: PropertyMetadataWithFile = {
      title: formData.title as string,
      description: formData.description as string,
      value: (formData.price as unknown) as number,
      image: formData.image as File,
      properties: [
        {
          name: formData.key1 as string,
          value: formData.value1 as string,
        },
        {
          name: formData.key2 as string,
          value: formData.value2 as string,
        },
        {
          name: formData.key3 as string,
          value: formData.value3 as string,
        },
      ],
    };
    console.log(metadata);
    formElement.reset();
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
          <input
            accept="image/*"
            hidden={true}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained">Upload image</Button>
          </label>
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
