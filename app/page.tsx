// -Components-
import dynamic from "next/dynamic";

const MainPage = dynamic(() => import("@/app/components/MainPage"));

export default function Home() {
  return (
    <div>
      <MainPage />
    </div>
  )
}
