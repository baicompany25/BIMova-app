import { useState, useRef, useEffect } from "react";
import { Magnet, ChevronUp, Check } from "lucide-react";

export default function RP_Snaps({ scaleLength }) {
  const [snapOn, setSnapOn] = useState(true);
  const [openSnapDetail, setOpenSnapDetail] = useState(false);
  const [openZoomDetail, setOpenZoomDetail] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const snapRef = useRef(null);
  const zoomRef = useRef(null);

  const SNAP_ITEMS = [
    "끝점",
    "중간점",
    "중심",
    "노드",
    "사분점",
    "교차점",
    "연장선",
    "삽입",
    "직교",
    "근처점",
    "가상 교차점",
    "평행",
  ];

  const [snapSelected, setSnapSelected] = useState(
    SNAP_ITEMS.reduce((acc, v) => ({ ...acc, [v]: true }), {})
  );

  const toggleSnapItem = (name) => {
    setSnapSelected((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  

  // ------------------ 패널 바깥 클릭 시 닫힘 ------------------
  useEffect(() => {
    const closeAll = (e) => {
      if (
        snapRef.current &&
        !snapRef.current.contains(e.target) &&
        zoomRef.current &&
        !zoomRef.current.contains(e.target)
      ) {
        setOpenSnapDetail(false);
        setOpenZoomDetail(false);
      }
    };
    document.addEventListener("mousedown", closeAll);
    return () => document.removeEventListener("mousedown", closeAll);
  }, []);

  return (
    <div style={{ width: "100%", boxSizing: "border-box", position: "relative" }}>
    
      {/* ---------------- 상단 1px 구분선 ---------------- */}
      <div
        style={{
          width: "100%",
          borderTop: "1px solid #E5E6EB",
          marginTop: "4px",
        }}
      />
          {/* --- 내부 콘텐츠 래퍼 (이 안에만 패딩 적용) --- */}
    <div
      style={{
        width: "100%",
        padding: "0px 14px",
        paddingLeft: "10px",
        boxSizing: "border-box",
      }}
    >

      {/* ---------------- 스냅+스케일+줌 한 줄 ---------------- */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4px",
          padding: "8px 0",
        }}
      >
        {/* ---------------- 마그넷 버튼 ---------------- */}
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "6px",
            background: snapOn ? "#FFF1EB" : "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            transition: "0.15s",
            position: "relative",
          }}
          onMouseEnter={() => snapOn && setShowLabel(true)}
          onMouseLeave={() => setShowLabel(false)}
          onClick={() => setSnapOn(!snapOn)}
        >
          <Magnet
            size={16}
            strokeWidth={2}
            color={snapOn ? "#FF4800" : "#73737C"}
          />

          {/* ------ 호버 라벨 ------ */}
          {showLabel && snapOn && ( 
            <div
              style={{
                position: "absolute",
                bottom: "36px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#131316",
                color: "#fff",
                fontSize: "10px",
                padding: "3px 5px",
                borderRadius: "4px",
                whiteSpace: "nowrap",
                zIndex: 2000,
              }}
            >
              자동 스냅
            </div>
          )}
        </div>

        {/* ---------------- 스냅 상세 화살표 ---------------- */}
        <div
          ref={snapRef}
          style={{
            width: 22,
            height: 30,
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            transition: "0.15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(0,0,0,0.06)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
          onClick={() => {
            setOpenSnapDetail(!openSnapDetail);
            setOpenZoomDetail(false);
          }}
        >
          <ChevronUp size={15} strokeWidth={2} color="#73737C" />
        </div>

        {/* ---------------- 스케일 바 ---------------- */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              marginBottom: "0px",
              color: "#131316",
            }}
          >
            {scaleLength} mm
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: "140px",
              height: "12px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "8px",
                width: "100%",
                height: "1px",
                background: "#4A4A4A",
              }}
            />
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${(100 / 4) * i}%`,
                  width: "1px",
                  height: "5px",
                  top: "3px",
                  background: "#4A4A4A",
                  transform: "translateX(-0.5px)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ---------------- 줌 상세 화살표 ---------------- */}
        <div
          ref={zoomRef}
          style={{
            width: 22,
            height: 30,
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            transition: "0.15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(0,0,0,0.06)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
          onClick={() => {
            setOpenZoomDetail(!openZoomDetail);
            setOpenSnapDetail(false);
          }}
        >
          <ChevronUp size={15} strokeWidth={2} color="#73737C" />
        </div>
      </div>
</div>
      {/* ---------------- 스냅 상세 패널 ---------------- */}
      {openSnapDetail && (
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            right: "52px",
            width: "180px",
            background: "#fff",
            border: "1px solid #E5E6EB",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            zIndex: 999,
          }}
        >
          {SNAP_ITEMS.map((name) => (
            <div
              key={name}
              onClick={() => toggleSnapItem(name)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 4px",
                fontSize: "12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#F4F4F6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span>{name}</span>
              {snapSelected[name] && (
                <Check size={13} strokeWidth={2} color="#FF4800" />
              )}
            </div>
          ))}
        </div>
      )}

      {/* ---------------- 줌 상세 패널 ---------------- */}
      {openZoomDetail && (
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            right: "14px",
            width: "140px",
            background: "#fff",
            border: "1px solid #E5E6EB",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            zIndex: 999,
          }}
        >
          {[
            "Zoom in",
            "Zoom out",
            "Zoom to 50%",
            "Zoom to 100%",
            "Zoom to 200%",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "5px 4px",
                fontSize: "12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#F4F4F6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
