import { SVG_PATTERNS } from "@/consts/svgPatterns";

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0 bg-repeat block dark:hidden"
        style={{
          backgroundImage: SVG_PATTERNS.diagonal.light
        }}
      ></div>
      <div
        className="absolute inset-0 bg-repeat hidden dark:block"
        style={{
          backgroundImage: SVG_PATTERNS.diagonal.dark
        }}
      ></div>
    </div>
  );
}
