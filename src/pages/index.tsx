import React from "react";
import Image from "image-js";

import { Layout } from "@/components/Layout";
import { Input } from "@/components/Input";
import { ResizedItem } from "@/components/ResizedItem";
import { downloadFile } from "@/utils/file";

type ResizedImage = { [key: number]: string };

export default function Home() {
  const [resizedImages, setResizedImages] = React.useState<ResizedImage[]>();

  async function onImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
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
  }

  const isImageResized = resizedImages && resizedImages.length > 0;

  return (
    <Layout>
      <Input name="image-input" accept="image/*" onChange={onImageUpload} />

      {isImageResized && (
        <>
          <div className="flex flex-row items-center mt-12 space-x-8 justify-items-center">
            {resizedImages?.map((item) => {
              const key = Number(Object.keys(item)[0]);
              const value = item[key] || "";
              return (
                <ResizedItem
                  src={value}
                  alt={["image", key].join("_")}
                  size={key}
                  onClick={() => downloadFile(value, key)}
                />
              );
            })}
          </div>
        </>
      )}
    </Layout>
  );
}
