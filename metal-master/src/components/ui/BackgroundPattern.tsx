import { SVG_PATTERNS } from "@/consts/svgPatterns";

interface BackgroundPatternProps {
  isDark?: boolean;
}

export default function BackgroundPattern({ isDark = false }: BackgroundPatternProps) {
  return (
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: isDark ? SVG_PATTERNS.diagonal.dark : SVG_PATTERNS.diagonal.light
        }}
      ></div>
    </div>
  );
}
