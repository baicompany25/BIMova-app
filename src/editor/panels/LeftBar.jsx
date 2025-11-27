// src/editor/panels/LeftBar.jsx

import { useState } from "react";
import {
  Menu,
  Layers2,
  Cuboid,
  Palette,
  StickyNote,
  Table2,
  MessageSquareText,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  Info,
} from "lucide-react";

export default function LeftBar({ openPanel, setOpenPanel, menuOpen, setMenuOpen }) {
  const [hovered, setHovered] = useState(null);
  const [is3D, setIs3D] = useState(false);

  const middleItems = [
    { id: "menu", icon: Menu, label: "메뉴" },
    { id: "layers", icon: Layers2, label: "도면층" },
    { id: "blocks", icon: Cuboid, label: "블록" },
    { id: "materials", icon: Palette, label: "재질" },
    { id: "layout", icon: StickyNote, label: "배치" },
    { id: "table", icon: Table2, label: "테이블" },
    { id: "trace", icon: MessageSquareText, label: "트레이스" },
    { id: "addin", icon: Sparkles, label: "에드인" },
  ];

  const bottomItems = [
    { id: "mode", label: "전환" },
    { id: "help", icon: Info, label: "도움말" },
  ];

  const normalColor = "#73737C";
  const activeColor = "#4662F2";

  const renderItem = (item, isTop = false) => {
    let Icon = item.icon;

    if (item.id === "mode") {
      Icon = is3D ? ToggleRight : ToggleLeft;
    }

    const isHovered = hovered === item.id;
    const isActive =
      item.id === "menu"
        ? menuOpen
        : openPanel === item.id && item.id !== "mode";

    return (
      <div
        key={item.id}
        style={{
          width: "46px",
          height: "32px",
          margin: isTop ? "5px auto" : "6px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        onMouseEnter={() => setHovered(item.id)}
        onMouseLeave={() => setHovered(null)}
        onClick={(e) => {
          e.stopPropagation();

          // 메뉴 아이콘 클릭 → 열려 있으면 닫고, 닫혀 있으면 열고
          if (item.id === "menu") {
            setMenuOpen((prev) => !prev);
            return;
          }

          // 3D/2D 전환
          if (item.id === "mode") {
            setIs3D((prev) => !prev);
            return;
          }

          // 나머지 패널 토글
          setOpenPanel((prev) => (prev === item.id ? null : item.id));
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "0.15s ease",
            background: isActive
              ? "rgba(165,190,253,0.3)"
              : isHovered
              ? "#F1F1F5"
              : "transparent",
          }}
        >
          <Icon
            size={item.id === "mode" ? 22 : 18}
            strokeWidth={item.id === "mode" ? 1.8 : 2}
            color={isActive ? activeColor : normalColor}
          />
        </div>

        {isHovered && (
          <div
            style={{
              position: "absolute",
              left: "46px",
              top: "50%",
              transform: "translateY(-50%)",
              padding: "0 6px",
              height: "18px",
              background: "#131316",
              color: "#FFFFFF",
              borderRadius: "4px",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              zIndex: 2000,
            }}
          >
            {item.id === "mode" ? (is3D ? "2D전환" : "3D전환") : item.label}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "46px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#FFFFFF",
        borderRight: "1px solid #E6E6EB",
        zIndex: 1000,
      }}
    >
      <div>
        {renderItem(middleItems[0], true)}
        <div
          style={{
            height: "1px",
            margin: "4px 0 6px",
            background: "#E6E6EB",
          }}
        />

        {middleItems.slice(1).map(renderItem)}
      </div>

      <div style={{ marginBottom: "8px" }}>
        <div
          style={{
            height: "1px",
            margin: "0 0 6px",
            background: "#E6E6EB",
          }}
        />
        {bottomItems.map(renderItem)}
      </div>
    </div>
  );
}
