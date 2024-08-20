import TextReveal from "@canvydocs/ui/text-reveal";

export function WordReveal() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg dark:bg-black">
      <TextReveal text="canvydocs will change the way you build SaaS apps." />
    </div>
  );
}
