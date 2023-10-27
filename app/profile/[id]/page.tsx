"use client";
import { useParams, useRouter } from "next/navigation";

export default function ProfileId() {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <h1>This is person with id: {params.id}</h1>
      <h1
        onClick={() => {
          router.push("/");
        }}
      >
        Back to page index
      </h1>
    </div>
  );
}
