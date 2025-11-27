// src/editor/panels/TopToolbar/ToolButton.jsx
import { ChevronDown } from "lucide-react";

export default function ToolButton({ icon: Icon, label, dropdown }) {
  const isDropdownOnly = !Icon && dropdown;

  return (
    <div
      className={
        isDropdownOnly
          ? "tool-button-wrapper dropdown-only"
          : "tool-button-wrapper"
      }
    >

      {/* 메인 아이콘 버튼 — 아이콘 있을 때만 렌더 */}
      {Icon && (
        <div className="tool-button">
          <Icon size={18} strokeWidth={1.8} />
          <div className="tool-tooltip">{label}</div>
        </div>
      )}

      {/* 드롭다운 단독 버튼 */}
      {dropdown && (
        <div className="dropdown-small-btn">
          <ChevronDown size={14} strokeWidth={2} />
        </div>
      )}
    </div>
  );
}
