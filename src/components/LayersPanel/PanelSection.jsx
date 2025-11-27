import { ChevronDown, ChevronRight, Plus } from "lucide-react";

export default function PanelSection({
  title,
  isOpen,
  setIsOpen,
  hasLineTop,
  hasLineBottom,
  children,
}) {
  return (
    <div
      style={{
        borderTop: hasLineTop ? "1px solid #E5E6E8" : "none",
        borderBottom: hasLineBottom ? "1px solid #E5E6E8" : "none",
      }}
    >
      {/* 상위 타이틀 라인 */}
      <div
        style={{
          height: "46px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 14px",
          cursor: "pointer",
          color: "#131316",
          fontSize: "15px",
          fontWeight: 600,
        }}
        onClick={() => setIsOpen((p) => !p)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {isOpen ? (
            <ChevronDown size={17} strokeWidth={2} />
          ) : (
            <ChevronRight size={17} strokeWidth={2} />
          )}
          {title}
        </div>

        <Plus size={17} strokeWidth={2} />
      </div>

      {/* 펼쳐진 내용 */}
      {isOpen && <div>{children}</div>}
    </div>
  );
}
