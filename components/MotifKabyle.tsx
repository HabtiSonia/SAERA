export default function MotifKabyle() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Losanges répétés */}
        {[80, 240, 400, 560, 720, 880, 1040, 1200, 1360].map((x) =>
          [80, 240, 400, 560, 720].map((y) => (
            <g key={`${x}-${y}`} transform={`translate(${x}, ${y})`}>
              <rect
                width="20"
                height="20"
                transform="rotate(45 10 10)"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.5"
                opacity="0.15"
              />
              <rect
                width="8"
                height="8"
                transform="rotate(45 10 10) translate(1 1)"
                fill="#C9A84C"
                opacity="0.08"
              />
            </g>
          ))
        )}

        {/* Chevrons */}
        {[160, 480, 800, 1120].map((x) =>
          [160, 400, 640].map((y) => (
            <g key={`chev-${x}-${y}`}>
              <path
                d={`M${x - 20} ${y} L${x} ${y + 20} L${x + 20} ${y}`}
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.5"
                opacity="0.12"
              />
              <path
                d={`M${x - 14} ${y + 8} L${x} ${y + 22} L${x + 14} ${y + 8}`}
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.5"
                opacity="0.08"
              />
            </g>
          ))
        )}

        {/* Croix géométriques */}
        {[320, 640, 960, 1280].map((x) =>
          [200, 500].map((y) => (
            <g key={`cross-${x}-${y}`}>
              <line x1={x - 15} y1={y} x2={x + 15} y2={y} stroke="#C9A84C" strokeWidth="0.5" opacity="0.1"/>
              <line x1={x} y1={y - 15} x2={x} y2={y + 15} stroke="#C9A84C" strokeWidth="0.5" opacity="0.1"/>
              <rect
                width="6"
                height="6"
                transform={`rotate(45 ${x} ${y}) translate(-3 -3)`}
                fill="#C9A84C"
                opacity="0.1"
              />
            </g>
          ))
        )}
      </svg>
    </div>
  );
}