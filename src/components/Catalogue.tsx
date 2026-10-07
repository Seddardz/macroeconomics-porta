"use client";
import { useState, useMemo, useEffect } from "react";
import { courseData } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function Catalogue({
  title,
  desc,
  initialType,
}: {
  title: string;
  desc: string;
  initialType: string;
}) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(initialType);
  const [semester, setSemester] = useState("");
  const [sort, setSort] = useState<"new" | "old">("new");
  const [page, setPage] = useState(6);

  useEffect(() => {
    setPage(6);
  }, [query, type, semester, sort]);

  const filteredData = useMemo(() => {
    const list = courseData.filter((r) => {
      if (initialType !== "all" && r.ty !== initialType) return false;
      if (initialType === "all" && type !== "all" && r.ty !== type)
        return false;
      if (semester && r.s !== semester) return false;
      if (query) {
        const h = [r.title, r.desc, r.topic, r.ty, r.s].join(" ").toLowerCase();
        return query
          .toLowerCase()
          .split(/\s+/)
          .every((w) => h.includes(w));
      }
      return true;
    });

    return list.sort(
      (a, b) =>
        (new Date(b.date).getTime() - new Date(a.date).getTime()) *
        (sort === "old" ? -1 : 1),
    );
  }, [query, type, semester, sort, initialType]);

  const filtersOn =
    query !== "" ||
    semester !== "" ||
    (initialType === "all" && type !== "all");

  return (
    <div className="view on">
      <div className="wrap">
        <div className="sec" style={{ paddingTop: "22px" }}>
          <h2>{title}</h2>
          <p style={{ margin: "4px 0 0", color: "var(--mut)" }}>{desc}</p>
        </div>

        <div className="tools">
          <div className="srow">
            <div className={`search ${query ? "has-q" : ""}`}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="search"
                placeholder="Search lectures and exercises…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </div>

          {initialType === "all" && (
            <div className="seg">
              <button
                aria-pressed={type === "all"}
                onClick={() => setType("all")}
              >
                All
              </button>
              <button
                aria-pressed={type === "lecture"}
                onClick={() => setType("lecture")}
              >
                Lectures
              </button>
              <button
                aria-pressed={type === "exercise"}
                onClick={() => setType("exercise")}
              >
                Practical sets
              </button>
            </div>
          )}

          <div className="frow">
            <div className="pl">
              <button
                className="chip"
                aria-pressed={semester === ""}
                onClick={() => setSemester("")}
              >
                All semesters
              </button>
              <button
                className="chip"
                aria-pressed={semester === "S1"}
                onClick={() => setSemester("S1")}
              >
                Semester 1
              </button>
              <button
                className="chip"
                aria-pressed={semester === "S2"}
                onClick={() => setSemester("S2")}
              >
                Semester 2
              </button>
            </div>
            <button
              className={`chip sortb ${sort === "old" ? "old" : ""}`}
              onClick={() => setSort(sort === "new" ? "old" : "new")}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
              {sort === "new" ? "Newest first" : "Oldest first"}
            </button>
          </div>
        </div>

        <div className="cnt" aria-live="polite">
          <span>
            {filteredData.length} document{filteredData.length !== 1 ? "s" : ""}
          </span>
          {filtersOn && (
            <button
              type="button"
              className="reset"
              onClick={() => {
                setQuery("");
                setSemester("");
                if (initialType === "all") setType("all");
              }}
            >
              Reset filters
            </button>
          )}
        </div>
        {filteredData.length === 0 && (
          <div className="empty" style={{ marginTop: 14 }}>
            <b>No documents found</b>
            Try another keyword or switch semester.
          </div>
        )}
        <div className="cards">
          {filteredData.slice(0, page).map((course, i) => (
            <CourseCard key={course.id} item={course} index={i} />
          ))}
        </div>

        {page < filteredData.length && (
          <div className="more" onClick={() => setPage((p) => p + 6)}>
            <button className="btn out">Load More</button>
          </div>
        )}
      </div>
    </div>
  );
}
