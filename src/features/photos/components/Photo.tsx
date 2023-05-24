/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Photo } from "@/features/photos/types";

type Props = {
  photo: Photo;
};

export function Photo({ photo }: Props) {
  return (
    <li className="relative">
      <Link
        className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        href={{
          pathname: `/photos/${photo.id}`,
          query: {
            photo: JSON.stringify(photo),
          },
        }}
      >
        <img
          alt={photo.title}
          className="pointer-events-none object-cover group-hover:opacity-75"
          src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
        />
        <button className="absolute inset-0 focus:outline-none" type="button">
          <span className="sr-only">View details for {photo.title}</span>
        </button>
      </Link>

      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {photo.title}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {photo.url}
      </p>
    </li>
  );
}
