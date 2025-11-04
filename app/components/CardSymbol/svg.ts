function importAll(
  r: ReturnType<typeof require.context>
): Record<string, React.FC<React.SVGProps<SVGSVGElement>>> {
  const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {};
  r.keys().forEach((key: string) => {
    const mod = r(key) as { default: React.FC<React.SVGProps<SVGSVGElement>> };
    icons[key.replace('./', '')] = mod.default;
  });
  return icons;
}

const svgs = importAll(require.context('../../assets/scryfall/symbols', false, /\.svg$/));
export default svgs;
