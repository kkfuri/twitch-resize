import JSZip from "jszip";

const BASE64_MARKER = ";base64,";

function isDataURI(url: string) {
  return url.split(BASE64_MARKER).length === 2;
}

// Converts a data URI string into a File object.
function dataURItoFile(dataURI: string) {
  if (!isDataURI(dataURI)) {
    return null;
  }
  const mime = dataURI.split(BASE64_MARKER)[0].split(":")[1];
  const filename = `dataURI-file-${new Date().getTime()}.${mime.split("/")[1]}`;
  const bytes = atob(dataURI.split(BASE64_MARKER)[1]);
  const writer = new Uint8Array(new ArrayBuffer(bytes.length));

  for (let i = 0; i < bytes.length; i += 1) {
    writer[i] = bytes.charCodeAt(i);
  }

  return new File([writer.buffer], filename, { type: mime });
}

export function downloadFile(uri: string, size: string | number) {
  const link = document.createElement("a");
  link.download = [[size, size].join("x"), "badge"].join("_");
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link.remove();
}

export async function generateDownload(items: ResizedImage[]) {
  const zip = new JSZip();

  items.forEach((file) => {
    const key = Number(Object.keys(file)[0]);
    const value = file[key] || "";
    const filename = [[key, key].join("x"), "png"].join(".");
    const fileFile = dataURItoFile(value);
    if (fileFile) zip.file(filename, fileFile);
  });

  zip.generateAsync({ type: "blob" }).then((blobdata) => {
    const zipblob = new Blob([blobdata]);
    const elem = document.createElement("a");
    elem.href = window.URL.createObjectURL(zipblob);
    elem.download = "badges.zip";
    elem.click();
  });
}
