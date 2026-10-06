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
            ></div>
            {/* <h1>MACROECONOMICS</h1> */}
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
                Lectures <span>{cL}</span>
              </Link>
              <Link href="/exercises" className="btn ghost">
                Exercises <span>{cE}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
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
