import { MedalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center rounded-full border bg-amber-100 p-4 uppercase text-amber-700 shadow-sm ">
          <MedalIcon className="mr-2 h-6 w-6" />
          No 1 task management
        </div>
        <h1 className="text-center text-3xl text-neutral-800 md:text-6xl">
          Trello-Clone helps teams move
          <br />{" "}
          <span className="mt-6 inline-block w-fit  rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 pb-4 text-3xl text-white md:text-6xl ">
            work foward.
          </span>
        </h1>
      </div>
      <div className="text-md mt-4 max-w-xs text-center text-neutral-400 md:max-w-2xl md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus
        delectus earum incidunt dolorum placeat a accusantium facere vitae.
        Cupiditate eligendi quasi nisi.
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href="/sign-up">Try Trello-Clone for free</Link>
      </Button>
    </div>
  );
}
