import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function RP_Project() {
  const [open, setOpen] = useState(true);
  const [styleMode, setStyleMode] = useState("Light");

  return (
    <div style={{ width: "100%", paddingLeft: "6px", paddingRight:"14px" }}>
      {/* 헤더 */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "8px 0",
          marginBottom: open ? 4 : 0,
        }}
      >
        {/* 화살표 */}
        <div style={{ width: 20 }}>
          {open ? (
            <ChevronDown size={14} strokeWidth={2} color="#73737C" />
          ) : (
            <ChevronRight size={14} strokeWidth={2} color="#73737C" />
          )}
        </div>

        {/* 프로젝트 텍스트 */}
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          프로젝트
        </span>
      </div>

      {/* 내용 */}
      {open && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingBottom: "12px",
            paddingLeft: 20, // ← 프로젝트 텍스트 라인 맞춤! (중요!)
          }}
        >
          {/* 파일명 */}
          <Row label="파일명">
            <div style={valueBox}>Drawing 1</div>
          </Row>

          {/* 프로필 */}
          <Row label="프로필">
            <div style={valueText}>BuildAI</div>
          </Row>

          {/* 스타일 */}
          <Row label="스타일">
            <div style={toggleWrap}>
              <button
                onClick={() => setStyleMode("Light")}
                style={styleMode === "Light" ? toggleOn : toggleOff}
              >
                Light
              </button>

              <button
                onClick={() => setStyleMode("Dark")}
                style={styleMode === "Dark" ? toggleOn : toggleOff}
              >
                Dark
              </button>
            </div>
          </Row>
        </div>
      )}
    </div>
  );
}

/* ------- 공통 Row (정렬 완전 고정) ------- */

function Row({ label, children }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 85,          // ← '프로젝트 글씨' 라벨과 완벽 정렬되는 폭
          fontSize: 12.5,
          color: "#73737C",
          flexShrink: 0,
        }}
      >
        {label}
      </div>

      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

/* ------- 스타일 ------- */

const valueBox = {
  width: "100%",
  height: "30px",
  backgroundColor: "#F4F4F6",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  fontSize: "12px",
  color: "#131316",
  whiteSpace: "nowrap",
};

const valueText = {
  fontSize: 12,
  paddingLeft: "12px",
  color: "#131316",
};

const toggleWrap = {
  width: "100%",
  height: "30px",
  backgroundColor: "#F4F4F6",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  padding: "4px",
  gap: "6px",
};

const toggleOn = {
  flex: 1,
  height: "100%",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
  border: "none",
  fontSize: "12px",
  cursor: "pointer",
};

const toggleOff = {
  flex: 1,
  height: "100%",
  borderRadius: "4px",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "12px",
  color: "#73737C",
  cursor: "pointer",
};
