import React from "react";
import Image from "image-js";

import { Layout } from "@/components/Layout";
import { Input } from "@/components/Input";
import { ImageList } from "@/components/ImageList";

export default function Home() {
  const [resizedImages, setResizedImages] = React.useState<ResizedImage[]>();

  async function onImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event?.target?.files?.[0]) return undefined;
    const file = await event?.target.files?.[0].arrayBuffer();
    if (file) {
      const images: ResizedImage[] = [];
      await [72, 36, 18].forEach(async (size) => {
        const image = await Image.load(file);
        const resized = image.resize({ width: size, height: size }).toDataURL();
        images.push({ [size]: resized });
      });
      setResizedImages(images);
    }
    return undefined;
  }

  return (
    <Layout>
      {resizedImages && resizedImages?.length > 0 ? (
        <ImageList
          images={resizedImages}
          onClickCancel={() => setResizedImages(undefined)}
        />
      ) : (
        <Input name="image-input" accept="image/*" onChange={onImageUpload} />
      )}
    </Layout>
  );
}
