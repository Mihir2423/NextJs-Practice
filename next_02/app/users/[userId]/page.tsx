import React, { Suspense } from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user) {
    notFound()
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = await getUser(userId);
  const userPosts: Promise<Post[]> = await getUserPosts(userId);
  const user = await userData;

  return (
    <section className="flex min-h-screen flex-col  justify-between p-24">
      <h2 className="font-bold text-2xl">{user.name}</h2>
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPosts} />
      </Suspense>
    </section>
  );
}

export async function generateStaticParams() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
