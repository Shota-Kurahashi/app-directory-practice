import { Switch } from "@/components/Switch";
import { useQueryPhotos } from "@/features/photos/api";
import { Photos } from "@/features/photos/components";
import { Photo } from "@/features/photos/types";

export default async function Home() {
  const photos: Photo[] = await useQueryPhotos();

  return (
    <>
      <Photos photos={photos} />
      <Switch />
    </>
  );
}
