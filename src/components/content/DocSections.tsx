import { Card, CardBody, CardHeader } from "@/components/ui/Card";

function isHeading(p: string) {
  // Heuristic: DOCX exports headings as standalone paragraphs and often include ":".
  if (p.length <= 80 && /:/.test(p)) return true;
  if (p.length <= 55 && /^[A-ZÇĞİÖŞÜ]/.test(p)) return true;
  return false;
}

type Section = {
  heading?: string;
  paragraphs: string[];
};

function toSections(paragraphs: readonly string[]): Section[] {
  const sections: Section[] = [];
  let current: Section = { paragraphs: [] };

  for (const p of paragraphs) {
    if (isHeading(p)) {
      if (current.heading || current.paragraphs.length) sections.push(current);
      current = { heading: p, paragraphs: [] };
      continue;
    }
    current.paragraphs.push(p);
  }
  if (current.heading || current.paragraphs.length) sections.push(current);
  return sections;
}

export function DocSections({ paragraphs }: { paragraphs: readonly string[] }) {
  const sections = toSections(paragraphs);
  return (
    <div className="space-y-6">
      {sections.map((s, idx) => (
        <Card key={idx} className="overflow-hidden">
          {s.heading ? (
            <CardHeader>
              <h2 className="text-base font-semibold tracking-tight text-zinc-950">
                {s.heading}
              </h2>
            </CardHeader>
          ) : null}
          <CardBody className="space-y-3">
            {s.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-7 text-zinc-700">
                {p}
              </p>
            ))}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

