import { ImageResponse } from "next/og";
import { seo, site } from "@/content/site";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image de partage social 1200×630 — navy + or, générée au build. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A1F44",
          backgroundImage: "linear-gradient(135deg, #0A1F44 0%, #081833 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              border: "6px solid #C9A24B",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "28px",
              letterSpacing: "6px",
              color: "#E7D6A6",
              textTransform: "uppercase",
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div
          style={{
            fontSize: "96px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.05,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "34px",
            color: "#E7D6A6",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Stratégie · Risque · Financement · Formation
        </div>
        <div
          style={{
            marginTop: "64px",
            width: "160px",
            height: "8px",
            backgroundColor: "#C9A24B",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
