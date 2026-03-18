export function DocText({ paragraphs }: { paragraphs: readonly string[] }) {
  const text = paragraphs.filter(Boolean).join("\n\n");
  return (
    <article className="max-w-none">
      <div className="whitespace-pre-line text-[15px] leading-7 text-zinc-700">
        {text}
      </div>
    </article>
  );
}

