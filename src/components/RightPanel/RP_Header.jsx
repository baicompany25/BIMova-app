import { Clock4, Play, Share2 } from "lucide-react";

export default function RP_Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "42px",
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* ---- 계정 아이콘 (대시보드 Sidebar.jsx와 동일) ---- */}
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "9px",
          background: "#B9C8FF",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 500,
          fontSize: "16px",
          flexShrink: 0,
        }}
      >
        B
      </div>

      {/* 오른쪽 요소들 */}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {/* ---- 시계 + 녹색점 겹쳐진 아이콘 ---- */}
        <div style={{ position: "relative", width: "22px", height: "22px" }}>
          <Clock4 size={18} strokeWidth={2} color="#73737C" />

          {/* 녹색 자동저장 점 */}
          <div
            style={{
              position: "absolute",
              right: "3px",
              top: "1px",
              width: "6.5px",
              height: "6.5px",
              borderRadius: "50%",
              backgroundColor: "#3CCB7A",
              border: "1px solid #FFFFFF",
              boxSizing: "border-box",
            }}
          />
        </div>
        {/* 세로라인 */}

<div
  style={{
    width: "1px",
    height: "18px",
    backgroundColor: "#E5E6EB",
    margin: "0 0px",
  }}
/>

        {/* ---- Play 아이콘 (hover 효과 포함) ---- */}
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(227,227,227,0.6)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <Play size={17} strokeWidth={2} color="#73737C" />
        </div>

        {/* ---- 공유하기 버튼 ---- */}
        <button
          style={{
            height: "30px",
            padding: "0 12px",
            backgroundColor: "#FF4800",
            color: "#fff",
            borderRadius: "6px",
            fontSize: "12px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontWeight: 400,
          }}
        >
          공유하기
        </button>
      </div>
    </div>
  );
}
