import { Separator } from "@/components/ui/separator";

export default async function Education({ className }: { className?: string }) {
  return (
    <div className={`${className} `}>
      <h2 className="lg:text-4xl text-2xl justify-center flex lg:block mb-3.5">
        Education
      </h2>
      <div className="lg:h-24 bg-accent rounded-2xl lg:p-3.5 p-2.5 w-full">
        <div className="flex justify-between h-10 items-center">
          <div className="lg:text-2xl text-[17px]">The NorthCap University</div>
          <div className="lg:text-xl text-xs justify-end">2022-2026</div>
        </div>
        <div>
          <Separator className="w-fit " />
        </div>
        <div className="lg:text-xl flex text-[17px] mt-1.5 items-center ">
          Btech
        </div>
      </div>
    </div>
  );
}
