import { ResizedItem } from "@/components/ResizedItem";
import { downloadFile, generateDownload } from "@/utils/file";
import { Button } from "../Button";

type Props = {
  images: ResizedImage[];
  onClickCancel: () => void;
};

export function ImageList({ images, onClickCancel }: Props) {
  return (
    <div className="flex flex-col px-6 pt-8 pb-4 mt-6 bg-white rounded-md shadow">
      <div className="flex flex-row items-center space-x-8 justify-items-center">
        {images?.map((item) => {
          const key = Number(Object.keys(item)[0]);
          const value = item[key] || "";
          return (
            <ResizedItem
              key={key}
              src={value}
              alt={["image", key].join("_")}
              size={key}
              onClick={() => downloadFile(value, key)}
            />
          );
        })}
      </div>
      <Button
        variant="outline"
        onClick={() => generateDownload(images as ResizedImage[])}
      >
        download all files
      </Button>
      <Button variant="ghost" onClick={onClickCancel}>
        cancel
      </Button>
    </div>
  );
}
