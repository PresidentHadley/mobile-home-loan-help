import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#0b1220"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 20,
              background: "#1e40af",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800
            }}
          >
            MH
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: "white" }}>MobileHomeLoanHelp</div>
            <div style={{ marginTop: 6, fontSize: 18, color: "rgba(255,255,255,0.75)" }}>Educational • Not a lender</div>
          </div>
        </div>

        <div style={{ marginTop: 42, fontSize: 54, lineHeight: 1.08, fontWeight: 900, color: "white" }}>
          Understand manufactured
          <br />
          home financing.
        </div>
        <div style={{ marginTop: 16, fontSize: 22, lineHeight: 1.4, color: "rgba(255,255,255,0.78)", maxWidth: 900 }}>
          Calculator, leased land guidance, and state pages — with clear disclaimers.
        </div>
      </div>
    ),
    size
  );
}

