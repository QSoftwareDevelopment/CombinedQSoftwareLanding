import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Reputable — Build a reputation that sells";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #EFEFEC 0%, #E9E9E5 55%, #E2E2DD 100%)",
          padding: "72px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* faint warm wash */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(166,133,91,0.16), rgba(166,133,91,0) 62%)",
            display: "flex",
          }}
        />
        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#282621",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 64 64" style={{ display: "flex" }}>
              <path
                d="M32 13l5.27 12.02 13.07 1.1-9.93 8.58 2.99 12.78L32 40.8l-11.4 6.68 2.99-12.78-9.93-8.58 13.07-1.1L32 13z"
                fill="#a6855b"
              />
            </svg>
          </div>
          <div style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, color: "#26251f" }}>Reputable</div>
            <div
              style={{
                fontSize: 15,
                letterSpacing: 4,
                color: "#7c7a73",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              BY Q SOFTWARE
            </div>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.04,
              color: "#26251f",
              letterSpacing: -1.5,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Build a reputation that&nbsp;<span style={{ color: "#9c7c50" }}>sells.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 27,
              color: "#5f5e58",
              maxWidth: 880,
              fontFamily: "system-ui, sans-serif",
              display: "flex",
            }}
          >
            Reviews, social, trends & competitor intelligence — working together
            in one place.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "system-ui, sans-serif",
            fontSize: 20,
            color: "#7c7a73",
            borderTop: "1px solid rgba(0,0,0,0.10)",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex" }}>
            Google · Yelp · TripAdvisor · Uber Eats · Facebook
          </div>
          <div style={{ display: "flex", color: "#9c7c50" }}>qsoftware.ca</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
