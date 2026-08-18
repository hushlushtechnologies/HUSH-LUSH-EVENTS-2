export function FloralDecorations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top — full width */}
      <div className="absolute left-0 top-0 w-full  ">
        <img
          src="/images/decorations/floral-top.svg"
          alt=""
          className="w-full h-auto object-contain object-top"
        />
      </div>

      {/* Right flower — sits at 1/4 down the section */}
      <div className="absolute -right-20 top-1/4 h-52 w-52 -translate-y-1/2   md:h-72 md:w-72">
        <img
          src="/images/decorations/floral-right.svg"
          alt=""
          className="h-full w-full object-contain object-right"
        />
      </div>

      {/* Left flower — sits at 3/4 down the section */}
      <div className="absolute -left-12 top-[60%] h-52 w-52 -translate-y-1/2  md:h-72 md:w-72">
        <img
          src="/images/decorations/floral-left.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      {/* Bottom — full width, mirrors the top */}
      <div className="absolute bottom-0 left-0 w-full  ">
        <img
          src="/images/decorations/floral-bottom.svg"
          alt=""
          className="h-auto w-full object-contain object-top"
        />
      </div>
    </div>
  );
}
