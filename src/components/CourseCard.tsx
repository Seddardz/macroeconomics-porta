"use client";

import { CourseItem, NOW } from "@/lib/data";
import Image from "next/image";

export default function CourseCard({
  item,
  index,
}: {
  item: CourseItem;
  index: number;
}) {
  const isLecture = item.ty === "lecture";
  const isNew =
    (NOW.getTime() - new Date(item.date).getTime()) / 86400000 <= 14;
  const dateStr = new Date(item.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article
      className="card rv in"
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      {/* Cover Section */}
      <div className={`cover ${isLecture ? "lect-bg" : "ex-bg"}`}>
        <div className="img-wrapper">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="cover-img"
            sizes="(max-width: 560px) 135px, 250px"
          />
        </div>

        <div className="color-overlay"></div>

        <span
          className={`bdg ${isLecture ? "bl" : "be"}`}
          // data-i={isLecture ? "📖" : "🧮"}
          data-i={isLecture ? "📘" : "📖"}
          style={{ zIndex: 10 }}
        >
          {isLecture ? "Lecture" : "Exercise"}
        </span>

        {isNew && (
          <span className="nw" style={{ zIndex: 10 }}>
            New
          </span>
        )}
      </div>

      {/* Body Section */}
      <div className="bd">
        <h3>{item.title}</h3>
        <p className="ds">{item.desc}</p>

        {/* Footer Section */}
        <div
          className="ft"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="dt">
            <span className={`sem-tag ${item.s.toLowerCase()}`}>
              <span className="desktop-only">
                {item.s === "S1" ? "Sem 1" : "Sem 2"}
              </span>
              <span className="mobile-only">{item.s}</span>
            </span>
            <span className="date-txt">{dateStr}</span>
          </div>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open PDF"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s",
              padding: "2px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Custom Red PDF Icon */}
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main document outline */}
              <path
                d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                stroke="#F03E3E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Folded corner */}
              <path
                d="M14 2V8H20"
                stroke="#F03E3E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Horizontal document lines */}
              <path
                d="M9 15H16"
                stroke="#F03E3E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9 18H16"
                stroke="#F03E3E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Solid red badge background */}
              <rect
                x="1.5"
                y="8"
                width="11"
                height="5.5"
                rx="1"
                fill="#F03E3E"
              />
              {/* White PDF text inside the badge */}
              <text
                x="2.5"
                y="12"
                fill="white"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="4.2"
                fontWeight="900"
                letterSpacing="0.2"
              >
                PDF
              </text>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
