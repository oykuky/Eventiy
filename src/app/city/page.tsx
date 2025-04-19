import { Suspense } from "react";
import CityPage from "./CityPageClient";



export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CityPage/>
    </Suspense>
  )
}
