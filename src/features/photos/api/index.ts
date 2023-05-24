export const useQueryPhotos = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/photos");

  return data.json().then((res) => res.slice(0, 100));
};
