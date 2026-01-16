import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 45%, #fffbeb 100%)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#1e40af",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800
            }}
          >
            MH
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#111827" }}>MobileHomeLoanHelp</div>
        </div>

        <div>
          <div style={{ fontSize: 56, lineHeight: 1.05, fontWeight: 800, color: "#0f172a" }}>
            Mobile home financing,
            <br />
            explained simply.
          </div>
          <div style={{ marginTop: 18, fontSize: 24, lineHeight: 1.4, color: "#334155", maxWidth: 900 }}>
            Educational guides + calculator + state resources. Not a lender.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Leased land", "Chattel loans", "Bad credit options", "Requirements"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(30, 64, 175, 0.08)",
                color: "#1e40af",
                fontSize: 18,
                fontWeight: 700
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

