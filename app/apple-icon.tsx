import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — même marque géométrique que app/icon.svg. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A1F44",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            border: "16px solid #C9A24B",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "28px",
            right: "28px",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "#C9A24B",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
