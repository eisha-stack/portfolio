export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(222,84%,5%)]" />
      <div className="site-grid absolute inset-0" />
      <div className="absolute -left-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.7)_0%,transparent_70%)] opacity-20 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.8)_0%,transparent_70%)] opacity-20 blur-2xl" />
      <div className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.6)_0%,transparent_70%)] opacity-10 blur-3xl" />
    </div>
  );
}
