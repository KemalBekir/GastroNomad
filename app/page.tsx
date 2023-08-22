import Image from "next/image";
import { Hero } from "./components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Posts from "./Posts/page";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Posts />
    </main>
  );
}
