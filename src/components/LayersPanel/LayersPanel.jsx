import { useState } from "react";
import { ChevronDown, ChevronRight, Plus, Check } from "lucide-react";

export default function LayersPanel() {
  const [openCanvas, setOpenCanvas] = useState(true);
  const [openLayers, setOpenLayers] = useState(true);
  const [activeLayer, setActiveLayer] = useState("CO-1");

  const canvases = [
    "평면 (Floor Plan)",
    "천장 평면도 (Ceiling Plan)",
    "3D 뷰 (3D View)",
    "입면도 (Elevation)",
  ];

  const layers = [
    { name: "CO-1", color: "#FF0000" },
    { name: "CO-COL", color: "#FFE600" },
    { name: "CO-HAT", color: "#3A3A3A" },
    { name: "CO-WALL", color: "#00FF00" },
    { name: "CO-TEXT", color: "#00D5FF" },
    { name: "D-1", color: "#FF0000" },
    { name: "D-2", color: "#8B8B8B" },
    { name: "D-TEXT", color: "#FFFFFF", white: true },
    { name: "E-1", color: "#FF0000" },
    { name: "E-DOOR", color: "#00D5FF" },
    { name: "E-FUR", color: "#FF00FF" },
    { name: "E-FUR-k", color: "#00D5FF" },
    { name: "E-HAT", color: "#8B8B8B" },
    { name: "E-LEVEL", color: "#FFE600" },
    { name: "E-TEXT", color: "#FFFFFF", white: true },
    { name: "E-WALL", color: "#00FF00" },
    { name: "E-dim", color: "#CFCFCF" },
    { name: "F-1", color: "#FF0000" },
    { name: "F-DIM", color: "#FF0000" },
    { name: "F-DOOR", color: "#0033FF" },
    { name: "F-FUR", color: "#FF00FF" },
    { name: "F-HAT", color: "#3A3A3A" },
    { name: "F-LEVEL", color: "#FFE600" },
    { name: "F-TEXT", color: "#FFFFFF", white: true },
  ];

  return (
    <div
      style={{
        width: "290px",
        height: "100%",
        background: "#FFFFFF",
        borderRight: "1px solid #E5E6E8",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        color: "#131316",
      }}
    >
      {/* ---------------- 항목1: 캔버스 ---------------- */}
      <div
        onClick={() => setOpenCanvas((p) => !p)}
        style={{
          height: "43px",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 600,
          borderBottom: "1px solid #E5E6E8",
        }}
      >
        {openCanvas ? (
          <ChevronDown size={15} strokeWidth={2} color="#73737C" />
        ) : (
          <ChevronRight size={15} strokeWidth={2} color="#73737C" />
        )}
        <span style={{ marginLeft: "6px" }}>캔버스</span>

        <Plus
          size={15}
          strokeWidth={2}
          style={{ marginLeft: "auto", opacity: 0.7 }}
        />
      </div>

      {openCanvas && (
        <div style={{ padding: "6px 0 12px 0" }}>
          {canvases.map((c) => (
            <div
              key={c}
              style={{
                height: "30px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "24px",
                fontSize: "12.5px",
                cursor: "pointer",
              }}
            >
              <ChevronRight
                size={12}
                strokeWidth={2}
                color="#73737C"
                style={{ marginRight: "6px" }}
              />
              {c}
            </div>
          ))}
        </div>
      )}

      {/* ---------------- 항목2: 레이어 ---------------- */}
      <div
        onClick={() => setOpenLayers((p) => !p)}
        style={{
          height: "42px",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 600,
          borderTop: "1px solid #E5E6E8",
          borderBottom: "1px solid #E5E6E8",
        }}
      >
        {openLayers ? (
          <ChevronDown size={15} strokeWidth={2} color="#73737C" />
        ) : (
          <ChevronRight size={15} strokeWidth={2} color="#73737C" />
        )}
        <span style={{ marginLeft: "6px" }}>레이어</span>

        <Plus
          size={15}
          strokeWidth={2}
          style={{ marginLeft: "auto", opacity: 0.7 }}
        />
      </div>

      {openLayers && (
        <div style={{ padding: "6px 0 12px 0", overflowY: "auto" }}>
          {layers.map((layer) => (
            <div
              key={layer.name}
              onClick={() => setActiveLayer(layer.name)}
              style={{
                display: "flex",
                alignItems: "center",
                height: "28px",
                cursor: "pointer",
                paddingLeft: "26px",
                paddingRight: "12px",
                fontSize: "12.5px",
              }}
            >
              {/* 색상바 */}
              <div
                style={{
                  width: "6px",
                  height: "14px",
                  borderRadius: "2px",
                  marginRight: "10px",
                  background: layer.white ? "#FFFFFF" : layer.color,
                  border: layer.white ? "1px solid #CFCFCF" : "none",
                }}
              />

              <div style={{ flex: 1 }}>{layer.name}</div>

              {activeLayer === layer.name && (
                <Check size={15} strokeWidth={2} color="#2B79FF" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
