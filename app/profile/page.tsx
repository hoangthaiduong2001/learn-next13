"use client";

import { useRouter } from "next/navigation";
export default function Profile() {
  const router = useRouter();
  return (
    <div>
      <h1>This is my profile</h1>
      <div>
        <ul></ul>
      </div>
    </div>
  );
}
