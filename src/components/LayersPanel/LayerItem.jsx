import { Check } from "lucide-react";

export default function LayerItem({ name, color, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        height: "30px",
        cursor: "pointer",
        paddingLeft: "20px",
        paddingRight: "14px",
        color: "#131316",
        fontSize: "14px",
        userSelect: "none",
      }}
    >
      {/* 레이어 색상 바 */}
      <div
        style={{
          width: "6px",
          height: "16px",
          backgroundColor: color,
          borderRadius: "2px",
          marginRight: "10px",
        }}
      />

      {/* 레이어 이름 */}
      <div style={{ flex: 1 }}>{name}</div>

      {/* 체크 표시 */}
      {isActive && <Check size={15} strokeWidth={2} color="#2B79FF" />}
    </div>
  );
}
