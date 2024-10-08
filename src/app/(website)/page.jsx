import { SkeletonLanding } from "@/components/modules/Skeletons";
import Landing from "@/components/templates/home/Landing";
import { Suspense } from "react";
export const metadata = {
  title: "خانه"
}
export default function Home() {
  return (
    <>
      <Suspense fallback={"loading..."}>
        <Landing />
      </Suspense>
      <SkeletonLanding />
    </>
  );
}
