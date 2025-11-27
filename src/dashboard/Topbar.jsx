import SplitNewButton from "../components/ui/SplitNewButton.jsx";
import { useRef } from "react";

export default function Topbar({ title = "대시보드" }) {
  const fileInputRef = useRef(null);

  const handleOpenDevice = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "42px",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E5E7EB",
        background: "#fff",
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      {/* 현재 위치 타이틀 */}
      <div style={{ fontSize: "15px", fontWeight: 600 }}>{title}</div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* 기기에서 열기 */}
        <div
          onClick={handleOpenDevice}
          style={{
            height: "28px",
            padding: "0 14px",
            border: "1px solid #D1D5DB",
            borderRadius: "6px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
            cursor: "pointer",
            userSelect: "none",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#F3F4F6")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
          기기에서 열기
        </div>

        {/* 파일 선택용 숨김 input */}
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) alert(`선택된 파일: ${file.name}`);
          }}
        />

        {/* 새로 만들기 버튼 */}
        <SplitNewButton />
      </div>
    </div>
  );
}
