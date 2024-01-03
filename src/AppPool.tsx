import { useEffect, useRef } from "react";
import { registerAppCarousel } from "@genesys/apps-v2-host-layout";
import { groupID, appPool } from "./appsv2";

export default function AppPool() {
  const appCarouselRef = useRef(null);

  useEffect(() => {
    console.log(appCarouselRef.current);
    console.log(appPool);
    console.log(groupID);

    registerAppCarousel();

    // @ts-ignore
    appCarouselRef.current.pool = appPool;
    // @ts-ignore
    appCarouselRef.current.groupIds = [groupID];
    // @ts-ignore
    appCarouselRef.current.activeGroupId = groupID;
  }, []);

  return (
    <>
      <h1>AppPool</h1>
      <app-carousel ref={appCarouselRef} />
    </>
  );
}
