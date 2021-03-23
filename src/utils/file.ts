export function downloadFile(uri: string, size: string | number) {
  const link = document.createElement("a");
  link.download = [[size, size].join("x"), "badge"].join("_");
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link.remove();
}
