import { useState } from "react";
import { Search, ChevronDown, ChevronRight, Upload, Plus } from "lucide-react";

export default function TablePanel() {
  const [activeTab, setActiveTab] = useState("table"); // 단일탭
  

  return (
    <div
      style={{
        width: "290px",
        height: "100%",
        background: "#FFFFFF",
        borderRight: "1px solid #E5E6EB",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        color: "#131316",
      }}
    >
      {/* ---------------- 상단 제목 + 아이콘 ---------------- */}
      <div
        style={{
          height: "43px",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          borderBottom: "1px solid #E5E6EB",
        }}
      >
        {/* 제목 */}
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#131316",
          }}
        >
          테이블
        </span>

        {/* 아이콘들 */}
        <div style={{ display: "flex", marginLeft: "auto", gap: "14px" }}>
          {/* 내보내기 */}
          <Upload size={15} strokeWidth={2} color="#73737C" cursor="pointer" />

          {/* 추가 */}
          <Plus size={15} strokeWidth={2} color="#73737C" cursor="pointer" />
        </div>
      </div>

      {/* ---------------- 하단 목록 영역 ---------------- */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0px" }}>
        <Category label="Table 1" />
        <Category label="Table 2" />
        <Category label="Table 3" />
      </div>
    </div>
  );
}

/* ---------------- 카테고리 항목 ---------------- */
function Category({ label }) {
  return (
    <div
      style={{
        height: "36px",
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        cursor: "pointer",
        borderBottom: "1px solid #E5E6EB",
        fontSize: "12.5px",
        fontWeight: 400,
        color: "#131316",
      }}
    >
      {/* ▶ 아이콘 */}
      <ChevronRight
        size={12}
        strokeWidth={2}
        color="#73737C"
        style={{ marginRight: "8px" }}
      />

      <span>{label}</span>
    </div>
  );
}
