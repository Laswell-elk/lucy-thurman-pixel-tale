import { cn } from "@/lib/utils";

export function GameFrame({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("gothic-frame overflow-hidden rounded-2xl p-1.5 sm:p-2", className)}>
      <iframe
        src={src}
        title={title}
        className="h-full w-full rounded-xl bg-abyss"
        allow="autoplay; fullscreen; gamepad"
        allowFullScreen
      />
    </div>
  );
}
