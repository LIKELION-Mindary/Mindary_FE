export const toDataURL = (url) => {
  return fetch(url)
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob));
};

export const downloadFile = async (url, fileName) => {
  const a = document.createElement("a");
  a.href = await toDataURL(url);
  a.download = fileName || "download";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
