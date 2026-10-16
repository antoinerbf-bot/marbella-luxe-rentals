/** Prestige monogram SP with olive branches — matches reference visual */
export function SolveigHeroLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/sp-logo.svg"
      alt="Solveig's Prestige Service"
      className={`solveig-hero-logo ${className}`}
      width={200}
      height={160}
      decoding="async"
    />
  );
}
