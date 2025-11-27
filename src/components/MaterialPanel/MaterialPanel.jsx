import { useState } from "react";
import { Search, ChevronDown, Plus } from "lucide-react";

export default function MaterialPanel() {
  const [activeTab, setActiveTab] = useState("library"); // current | library
  const [search, setSearch] = useState("");

  // 탭 스타일
  const tabStyle = (isActive) => ({
    flex: 1,
    height: "43px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    background: isActive ? "rgba(165,190,253,0.3)" : "#FFFFFF",
    borderBottom: isActive ? "2px solid #4662F2" : "1px solid #E5E6E8",
    transition: "0.2s ease",
  });

  return (
    <div
      style={{
        width: "290px",
        height: "100%",
        background: "#FFFFFF",
        borderRight: "1px solid #E5E6E8",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        color: "#131316",
      }}
    >
      {/* ---------------- 상단 탭 ---------------- */}
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={tabStyle(activeTab === "current")}
          onClick={() => setActiveTab("current")}
        >
          현재 도면
        </div>
        <div
          style={tabStyle(activeTab === "library")}
          onClick={() => setActiveTab("library")}
        >
          라이브러리
        </div>
      </div>

      {/* ---------------- 검색창 ---------------- */}
      <div
        style={{
          padding: "8px 10px 8px",
          borderBottom: "1px solid #E5E6E8",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* 검색 박스 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            height: "28px",
            borderRadius: "6px",
            background: "#F1F1F5",
            padding: "0 6px",
          }}
        >
          <Search size={16} strokeWidth={2} color="#73737C" />

          <input
            type="text"
            placeholder="검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              marginLeft: "8px",
              flex: 1,
              fontSize: "13px",
              color: "#131316",
            }}
          />

          {/* 내부 세로 라인 */}
          <div
            style={{
              width: "1px",
              height: "16px",
              background: "#D8D8DD",
              margin: "0 8px",
            }}
          />

          {/* 내부 드롭다운 화살표 */}
          <ChevronDown size={16} strokeWidth={2} color="#73737C" />
        </div>

        {/* 외부 + 아이콘 (30x30 정사각형 호버 박스) */}
        <div
          style={{
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "6px",
            transition: "0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F1F5")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <Plus size={18} strokeWidth={1.8} color="#73737C" />
        </div>
      </div>

      {/* ---------------- 하위 콘텐츠 ---------------- */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "0px",
          fontSize: "13px",
        }}
      >
        {activeTab === "current" && (
          <div
            style={{
              marginTop: "40px",
              textAlign: "center",
              fontSize: "13px",
              color: "#73737C",
            }}
          >
          </div>
        )}

        {activeTab === "library" && (
          <div style={{ color: "#73737C", fontSize: "13px" }}>
            <Category label="아스팔트 및 콘크리트" />
            <Category label="벽돌 및 외장패널" />
            <Category label="카펫, 직물, 가죽 및 벽지" />
            <Category label="색상" />
            <Category label="유리 및 거울" />
            <Category label="금속" />
            <Category label="석재" />
            <Category label="타일" />
            <Category label="물" />
            <Category label="목재" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- 카테고리 (▶ 아이콘 + 텍스트) ---------------- */
function Category({ label }) {
  return (
    <div
      style={{
        height: "36px",
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        borderBottom: "1px solid #E5E6EB",
        cursor: "pointer",
        fontSize: "12.5px",
        fontWeight: 400,
        color: "#131316",
      }}
    >
      <ChevronDown
        size={12}
        strokeWidth={2}
        color="#73737C"
        style={{
          transform: "rotate(-90deg)", // ▶ 방향
          marginRight: "8px",
        }}
      />
      <span>{label}</span>
    </div>
  );
}
