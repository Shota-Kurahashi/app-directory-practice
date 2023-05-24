/* eslint-disable @next/next/no-img-element */
import { Photo } from "@/features/photos/components/Photo";
import { Photo as TPhoto } from "@/features/photos/types";

export function Photos({ photos }: { photos: TPhoto[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </ul>
  );
}
