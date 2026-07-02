import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Q Software — Catch · Reputable. Choose your tool.";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Georgia, serif",
          background: "#08070b",
        }}
      >
        {/* Catch half */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px",
            background:
              "linear-gradient(160deg, #f3fbf4 0%, #e4f4e7 100%)",
          }}
        >
          <div
            style={{
              fontSize: 19,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#2f8a52",
              fontFamily: "system-ui, sans-serif",
              display: "flex",
            }}
          >
            AI Receptionist
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 96,
              letterSpacing: -3,
              color: "#173a26",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 800,
              display: "flex",
            }}
          >
            Catch
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 23,
              color: "#3f6b4f",
              maxWidth: 380,
              fontFamily: "system-ui, sans-serif",
              display: "flex",
            }}
          >
            Answers every call. Texts back the ones you miss in four seconds.
          </div>
        </div>

        {/* Reputable half */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px",
            background:
              "linear-gradient(160deg, #EFEFEC 0%, #E2E2DD 100%)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 60,
              right: -60,
              width: 360,
              height: 360,
              borderRadius: 999,
              background:
                "radial-gradient(circle, rgba(166,133,91,0.18), rgba(166,133,91,0) 62%)",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 19,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#9c7c50",
              fontFamily: "system-ui, sans-serif",
              display: "flex",
            }}
          >
            Reputation Engine
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 96,
              letterSpacing: -2,
              color: "#26251f",
              display: "flex",
            }}
          >
            Reputable
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 23,
              color: "#5f5e58",
              maxWidth: 380,
              fontFamily: "system-ui, sans-serif",
              display: "flex",
            }}
          >
            Reviews, social and competitor intelligence, working in one place.
          </div>
        </div>

        {/* Center Q seam */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 999,
              background: "#08070b",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="9" stroke="#f4f4f6" strokeWidth="2" />
              <path
                d="M16.5 16.5 21 21"
                stroke="#f4f4f6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 17,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#55554f",
              fontFamily: "system-ui, sans-serif",
              display: "flex",
            }}
          >
            Q Software
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
