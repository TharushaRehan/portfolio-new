import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Round favicon drawn from the same face crop as apple-icon.png (iOS rounds that one itself).
export default async function Icon() {
  const face = await readFile(join(process.cwd(), "src/app/apple-icon.png"));

  return new ImageResponse(
    (
      <img
        src={`data:image/png;base64,${face.toString("base64")}`}
        alt=""
        width={64}
        height={64}
        style={{ borderRadius: "50%" }}
      />
    ),
    size,
  );
}
