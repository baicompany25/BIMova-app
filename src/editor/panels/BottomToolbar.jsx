import { Terminal, X } from "lucide-react";

export default function BottomToolbar({ onClose }) {
  return (
    <div
      style={{
        width: "590px",
        height: "40px",
        position: "absolute",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        border: "1px solid #E5E6EB",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        zIndex: 999,
      }}
    >
      {/* 왼쪽 아이콘 박스 */}
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "6px",
          background: "#FFF1EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "10px",
        }}
      >
        <Terminal size={18} color="#FF4800" strokeWidth={2} />
      </div>

      {/* 입력 필드 */}
      <input
        type="text"
        placeholder="명령어 입력"
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "14px",
          color: "#131316",
        }}
      />

      {/* 닫기 버튼 */}
      <div
        onClick={onClose}
        style={{
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <X size={18} color="#73737C" strokeWidth={2} />
      </div>
    </div>
  );
}
