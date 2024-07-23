import Image from "next/image";
import { ButtonGhost, ButtonSolid } from "./ui/button";
import ImageAnimation from "./ui/imageAnimation";
import Navigation from "./ui/navigation";
import HOneTypeWriter from "./ui/hOneTypeWriter";
import TwitchFrame from "./ui/twitchFrame";
import Part from "./ui/part";
import Sub from "./ui/sub";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen w-full flex justify-start items-center p-4 md:p-10 flex-col">
        <section className="flex max-w-[94rem] items-center justify-center mt-4 md:mt-8 flex-col">
        <HOneTypeWriter />
          <div className="flex items-start md:items-center justify-center flex-col-reverse md:flex-row gap-20 md:gap-4">
            <div className="flex items-start justify-between flex-col gap-20 md:gap-[7.5rem]">
              <div className="flex items-start justify-start flex-col">
                <Sub />
                <Part />
              </div>
              <div className="flex items-start justify-center gap-6 w-full md:w-fit">
                <ButtonSolid href='/game-dev'>
                  Game dev
                </ButtonSolid>
                <ButtonGhost href='/streaming'>
                  Streaming
                </ButtonGhost>
              </div>
            </div>
            <ImageAnimation />
          </div>
        </section>
        <div className="h-32 sm:h-28 md:h-20 lg:h-20"></div>
        <div className="w-full mt-0 lg:mt-16 mx-[12.5rem] mb-[4rem] flex items-center justify-center flex-col">
          <p>Live develpmnet</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-1 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <section className="w-full items-center justify-between flex">
          <TwitchFrame />
        </section>
      </main>
    </>
  );
}