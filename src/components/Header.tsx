interface HeaderProps {
  title: string;
  subtitle: string;
  motif?: boolean;
}

export default function Header({ title, subtitle, motif = false }: HeaderProps) {
  return (
    <header>
      {motif && (
        <div className="header-motif" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="18" width="18" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="20" y="10" width="18" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="var(--accent-soft)" />
            <circle cx="29" cy="22" r="3" fill="currentColor" />
          </svg>
        </div>
      )}
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </header>
  );
}
