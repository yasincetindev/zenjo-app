interface SectionNavProps {
  title: string;
  items: { id: string; label: string }[];
}

export default function SectionNav({ title, items }: SectionNavProps) {
  return (
    <nav className="section-nav" aria-label={title}>
      <div className="section-nav-title">{title}</div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
