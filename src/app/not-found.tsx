import Link from "next/link";

export default function NotFound() {
  return (
    <div className="view on">
      <div className="wrap" style={{ textAlign: "center", padding: "70px 0" }}>
        <p className="eyebrow">Error 404</p>
        <h2 style={{ margin: "8px 0" }}>Page not found</h2>
        <p style={{ color: "var(--mut)", margin: "0 0 22px" }}>
          This page does not exist or has moved.
        </p>
        <Link href="/library" className="btn gold">
          Browse the library
        </Link>
      </div>
    </div>
  );
}
