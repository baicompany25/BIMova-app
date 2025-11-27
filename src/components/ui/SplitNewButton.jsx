import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowDown from "../../assets/icons/ArrowDown.jsx";

export default function SplitNewButton() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const handleMainClick = () => {
    navigate("/editor/new?unit=mm");   // 기본 단위(mm)
  };

  const handleArrowClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const close = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div style={{ position: "relative" }} ref={panelRef}>
      {/* 버튼 전체 박스 */}
      <div
        style={{
          display: "flex",
          width: "150px",
          height: "28px",
          background: "#FF4800",
          borderRadius: "6px",
          overflow: "hidden",
          cursor: "pointer",
          border: "1px solid #FF4800",
          transition: "background .15s",
        }}
      >
        {/* 텍스트 부분 */}
        <div
          onClick={handleMainClick}
          style={{
            flex: 1,
            height: "28px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "26px",
            fontSize: "13px",
            fontWeight: 500,
            color: "#FFFFFF",
            cursor: "pointer",
            userSelect: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#FF8454")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          새로 만들기
        </div>

        {/* 화살표 부분 */}
        <div
          onClick={handleArrowClick}
          style={{
            width: "32px",
            height: "28px",
            borderLeft: "1px solid rgba(255,255,255,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#FF8454")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <ArrowDown stroke="#FFFFFF" />
        </div>
      </div>

      {/* 드롭다운 */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: 0,
            width: "165px",
            background: "#fff",
            borderRadius: "6px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            overflow: "hidden",
            zIndex: 200,
          }}
        >
          {[
            ["밀리미터", "mm"],
            ["센티미터", "cm"],
            ["미터", "m"],
            ["인치", "in"],
          ].map(([label, unit]) => (
            <div
              key={unit}
              style={{
                padding: "10px 16px",
                cursor: "pointer",
                fontSize: "14px",
                borderBottom: "1px solid #f2f2f2",
              }}
              onClick={() => {
                setOpen(false);
                navigate(`/editor/new?unit=${unit}`);
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f8f8f8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              {label} ({unit})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
