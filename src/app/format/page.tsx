import { Suspense } from "react";
import FormatPage from "./FormatPage";


export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FormatPage/>
    </Suspense>
  )
}
