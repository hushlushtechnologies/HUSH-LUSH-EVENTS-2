export function FloralBottomDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/images/decorations/flora-dark.svg"
          alt=""
          className="h-auto w-full object-contain object-top"
        />
      </div>
    </div>
  );
}