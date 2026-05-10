export function getIndustryIcon(caseTag: string) {
  const tag = caseTag.toUpperCase();
  if (tag.includes("AUTOMOTIVE")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
      </svg>
    );
  }
  if (tag.includes("MEDICAL")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M19 8h-2V3H7v5H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zM9 5h6v3H9V5zm6 11h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z" />
      </svg>
    );
  }
  if (tag.includes("ENERGY") || tag.includes("EV")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    );
  }
  if (tag.includes("AEROSPACE")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    );
  }
  if (tag.includes("INDUSTRIAL")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M22 22V11l-6 4V11l-6 4V3H2v19h20zm-13-2H4v-2h5v2zm0-4H4v-2h5v2zm0-4H4v-2h5v2zm0-4H4V6h5v2zm11 12h-9v-2h9v2zm0-4h-9v-2h9v2z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
