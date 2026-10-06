import Link from "next/link";
import { courseData, NEWS } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const latestCourses = [...courseData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
  const cL = courseData.filter((r) => r.ty === "lecture").length;
  const cE = courseData.length - cL;

  return (
    <div className="view on">
      {/* Hero Section */}
      <div className="hero">
        <div>
          <div>
            <div
              className="eb"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
                lineHeight: "1.4",
              }}
            >
              {/* <span>University Centre of Maghnia</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>
                Institute of Economic, Commercial & Management Sciences
              </span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>2026/2027</span> */}
            </div>
            <h1>MACROECONOMICS</h1>
            <p>
              Growth, inflation, unemployment and economic policy. Course
              lectures and practical exercises, all in PDF.
            </p>
            <div className="prof">
              <div className="av">CA</div>
              <div>
                <b>Prof. Abderrahim Chibi</b>
                <span>Professor of Economics</span>
              </div>
            </div>
            <div className="cta">
              <Link href="/lectures" className="btn gold">
                Browse Lectures
              </Link>
              <Link href="/exercises" className="btn ghost">
                Exercises
              </Link>
            </div>
          </div>
          {/* Include your exact Hero SVG here, converting dash to camelCase */}
        </div>
      </div>

      <div className="wrap">
        <div className="tiles">
          <Link href="/lectures" className="tile rv in">
            <i style={{ background: "#14284b" }}>{/* SVG */}</i>
            <div>
              <b>Lectures</b>
              <span>{cL}</span>
            </div>
          </Link>
          <Link href="/exercises" className="tile rv in">
            <i style={{ background: "#0f766e" }}>{/* SVG */}</i>
            <div>
              <b>Exercises</b>
              <span>{cE}</span>
            </div>
          </Link>
          <Link href="/library" className="tile rv in">
            <i style={{ background: "#b8893a" }}>{/* SVG */}</i>
            <div>
              <b>All PDFs</b>
              <span>{courseData.length}</span>
            </div>
          </Link>
        </div>

        <div className="note rv in">
          <div>
            <small>{NEWS[0][0]} · Important</small>
            <br />
            <b>{NEWS[0][1]}</b> {NEWS[0][2]}
          </div>
        </div>

        <div className="sec">
          <div className="sh">
            <div>
              <h2>Latest materials</h2>
            </div>
            <Link href="/library">
              <button className="link">View all →</button>
            </Link>
          </div>
          <div className="cards">
            {latestCourses.map((course, i) => (
              <CourseCard key={course.id} item={course} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
