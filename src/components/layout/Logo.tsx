import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-12 h-12">
        <img
          src="/images/bgclogo.svg"
          alt="Boys & Girls Club Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-tight text-white">Boys & Girls Club</span>
        <span className="text-lg font-medium leading-tight text-white">of Fontana</span>
      </div>
    </div>
  );
}