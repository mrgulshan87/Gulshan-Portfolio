export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{children}</h2>
      <svg
        className="mt-4 text-muted-foreground"
        width="60"
        height="14"
        viewBox="0 0 60 14"
        fill="none"
        aria-hidden
      >
        <path
          d="M2 7 Q 9.5 1, 17 7 T 32 7 T 47 7 T 58 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
