import Link from "next/link";
import Image from "next/image";
import {
  courseData,
  NEWS,
  HERO_BG,
  PROF_PHOTO,
  PROFILE_LINKS,
  TYPE_ICON,
  ART_SRC,
} from "@/lib/data";
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
        {/* Blurred photo covering the whole hero (desktop + phone) */}
        <span className="hero-bg" aria-hidden="true">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg-img"
          />
          <Image
            src={HERO_BG}
            alt=""
            fill
            sizes="100vw"
            className="hero-bg-sharp"
          />
        </span>

        <div>
          <div>
            <div className="prof">
              <div className="prof-photo">
                <Image
                  src={PROF_PHOTO}
                  alt="Prof. Abderrahim Chibi"
                  fill
                  priority
                  sizes="104px"
                />
              </div>
              <div className="prof-info">
                <b>Prof. Abderrahim Chibi</b>
                <span className="role">Professor of Economics</span>
                <div className="social">
                  {PROFILE_LINKS.map((l) => (
                    <a
                      key={l.name}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={l.name}
                      aria-label={l.name}
                    >
                      <Image
                        src={l.icon}
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="cta">
              <Link href="/lectures" className="btn gold">
                <i className="bi">
                  <Image
                    src={TYPE_ICON.lecture}
                    alt=""
                    width={17}
                    height={17}
                    unoptimized
                  />
                </i>
                Lectures <span>{cL}</span>
              </Link>
              <Link href="/exercises" className="btn teal">
                <i className="bi">
                  <Image
                    src={TYPE_ICON.exercise}
                    alt=""
                    width={17}
                    height={17}
                    unoptimized
                  />
                </i>
                Problem sets <span>{cE}</span>
              </Link>
            </div>
            <p>
              Growth, inflation, unemployment and economic policy. Course
              lectures and practical problem sets, all in PDF.
            </p>
          </div>

          {/* Decorative animated SVG (right side on desktop, corner badge on phones) */}
          <div className="hero-art" aria-hidden="true">
            <span className="art-glow" />
            <span className="art-lines" />
            <span className="art-orbit" />
            <span className="art-ring r1" />
            <span className="art-ring r2" />
            <span className="art-ring r3" />
            <div className="art-core">
              <Image src={ART_SRC} alt="" fill sizes="220px" unoptimized />
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
