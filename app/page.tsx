"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Hello world from docker</h1>
      <div>
        <ul>
          <li onClick={() => router.push("/profile/1")}>Profile1</li>
          <li onClick={() => router.push("/profile/2")}>Profile2</li>
          <li onClick={() => router.push("/profile/3")}>Profile3</li>
          <Link
            prefetch={false}
            href={{
              pathname: "/profile/4",
              query: {
                id: "23043230",
                userName: "Duong",
                age: 22,
              },
            }}
          >
            Profile4
          </Link>
        </ul>
      </div>
    </div>
  );
}
