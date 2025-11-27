import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CanvasItem({ label }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ paddingLeft: "26px" }}>
      <div
        style={{
          height: "32px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
          color: "#131316",
          fontSize: "14px",
        }}
        onClick={() => setOpen((p) => !p)}
      >
        {open ? (
          <ChevronDown size={14} strokeWidth={2} color="#73737C" />
        ) : (
          <ChevronRight size={14} strokeWidth={2} color="#73737C" />
        )}
        {label}
      </div>

      {/* 지금은 하위 없음 — 나중에 필요할 때 이 아래에 children 추가 */}
      {open && (
        <div
          style={{
            paddingLeft: "22px",
            color: "#73737C",
            fontSize: "13px",
          }}
        >
          {/* 필요한 경우 하위 항목 들어가는 자리 */}
        </div>
      )}
    </div>
  );
}
