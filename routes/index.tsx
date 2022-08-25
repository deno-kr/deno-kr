/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Logo from "../components/Logo.tsx";
import LinkCard from "../components/LinkCard.tsx";
import Intro from "../islands/Intro.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <a href="/">
        <Logo />
      </a>
      <Intro />
      <div
        class={tw
          `w-max grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 m-4`}
      >
        <LinkCard
          icon="/icons/deno_hr.svg"
          title="Deno"
          content="Deno 공식 홈페이지"
          url="https://deno.land"
        />
        <LinkCard
          icon="/icons/discord.svg"
          title="디스코드"
          content="Deno Korea 디스코드 참여하기"
          url="https://discord.com/invite/5HwyPHkaWq"
        />
        <LinkCard
          icon="/icons/github.svg"
          title="Github"
          content="Deno Korea Github Organization"
          url="https://github.com/deno-kr"
        />
      </div>
    </div>
  );
}
