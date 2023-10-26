"use client";
import { useParams } from "next/navigation";

export default function ProfileId() {
  const params = useParams();
  return <h1>This is person with id: {params.id}</h1>;
}
