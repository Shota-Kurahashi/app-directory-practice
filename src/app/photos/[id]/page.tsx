import React from "react";
import { Photo } from "@/features/photos/components/Photo";
import { Photo as TPhoto } from "@/features/photos/types";

async function getPhoto(id: string) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${+id}`
  );

  return data.json();
}

async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const data: TPhoto = await getPhoto(params.id);

  return <Photo key={data.id} photo={data} />;
}

export default Page;
