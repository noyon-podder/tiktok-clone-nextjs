"use client";
import Image from "next/image";
import MainLayout from "./layouts/MainLayout";
import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            <PostMain
              post={{
                id: "01",
                user_id: "456",
                video_url: "/beach.mp4",
                text: "this is text",
                created_at: "date here",
                profile: {
                  user_id: "456",
                  name: "Demo user",
                  image: "https://placehold.co/100",
                },
              }}
            />
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  );
}
