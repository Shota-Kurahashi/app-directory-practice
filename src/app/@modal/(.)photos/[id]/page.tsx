import React from "react";
import Modal from "@/components/Modal";
import { Photo } from "@/features/photos/components/Photo";

async function Page({ searchParams }: { searchParams: { photo: string } }) {
  const data = JSON.parse(searchParams.photo);

  return (
    <Modal>
      <div className="max-w-full overflow-hidden list-none">
        <Photo key={data.id} photo={data} />
      </div>
    </Modal>
  );
}

export default Page;
