// src/editor/panels/MenuPanel.jsx

import { useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";

export default function MenuPanel({ onClose }) {
  const panelRef = useRef(null);

  // 🔥 패널 외부 클릭 시 닫기
  useEffect(() => {
    function handleOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [onClose]);

  const items = [
    { id: "home", label: "홈", icon: <ChevronLeft size={16} strokeWidth={2} color="#73737C" /> },
    { divider: true },

    { id: "d1", label: "Drawing 1", active: true },
    { id: "d2", label: "Drawing 2", inactive: true },
    { divider: true },

    { id: "new", label: "새로 만들기" },
    { id: "import", label: "가져오기", hasArrow: true },
    { id: "export", label: "내보내기", hasArrow: true },
    { divider: true },

    { id: "share", label: "공유" },
    { id: "print", label: "인쇄" },
    { divider: true },

    { id: "option", label: "옵션" },
  ];

  const goDashboard = () => {
    window.location.href = "/dashboard";
  };

  const BASE_LEFT = 30;

  return (
    <div
      ref={panelRef}
      style={{
        position: "absolute",
        left: "52px",
        top: "6px",
        width: "230px",
        background: "#FFFFFF",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
        padding: "6px 0",
        zIndex: 2500,
      }}
    >
      {items.map((item, idx) => {
        if (item.divider) {
          return (
            <div
              key={`d-${idx}`}
              style={{
                height: "1px",
                background: "#E6E6EB",
                margin: "4px 0",
              }}
            />
          );
        }

        const isDrawing1 = item.id === "d1";
        const fontWeight = isDrawing1 ? 400 : item.active ? 600 : 400;
        const baseColor = item.inactive ? "#73737C" : "#131316";

        return (
          <div
            key={item.id}
            onClick={() => {
              if (item.id === "home") goDashboard();
              onClose();
            }}
            style={{
              height: "28px",
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
              paddingLeft:
                item.id === "home"
                  ? "10px"
                  : item.id === "d1"
                  ? `${BASE_LEFT - 14}px`
                  : `${BASE_LEFT}px`,
              fontSize: "13px",
              color: baseColor,
              fontWeight,
              cursor: "pointer",
              borderRadius: "6px",
              margin: "0 5px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F1F5")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {item.id === "home" && (
              <div
                style={{
                  marginRight: "8px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  transform: "translateY(1px)",
                }}
              >
                {item.icon}
              </div>
            )}

            {item.id === "d1" && (
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#1FB752",
                  marginRight: "8px",
                  transform: "translateY(2px)",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            )}

            <span style={{ transform: "translateY(1px)" }}>{item.label}</span>

            {item.hasArrow && (
              <div style={{ marginLeft: "auto", opacity: 0.6 }}>
                <ChevronLeft
                  size={16}
                  strokeWidth={2}
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
