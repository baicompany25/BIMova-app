import { Bell, ChevronDown, Clock4, Search, Folder, ChevronRight } from "lucide-react";
import { StickyNote, LayoutGrid, ClipboardList, Trash2 } from "lucide-react";
import { Pencil, Settings2, Download, Plus, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Sidebar() {
  const topbarHeight = 46;
  const [favOpen, setFavOpen] = useState(true);
  const [accountOpen, setAccountOpen] = useState(false);
  const dropdownRef = useRef(null);

  function MenuRow({ icon, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",           // 🔥 줄 전체 차지 → 세로정렬 정상동작
        padding: "5px 0px 5px 9px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(227,227,227,0.5)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "transparent")
      }
    >
      <div style={{ marginRight: "8px" }}>
        {icon}
      </div>

      <span style={{ fontSize: "13px", color: "#131316" }}>
        {label}
      </span>
    </div>
  );
}

useEffect(() => {
  function handleClickOutside(e) {
    // 드롭다운이 열려 있고, 클릭한 요소가 박스 바깥이면 닫기
    if (accountOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setAccountOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [accountOpen]);


  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        borderRight: "1px solid #E5E7EB",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >

      {/* ▲ 상단 전체 영역 */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* 1번칸 — 계정 영역 */}
        <div
          style={{
            height: "42px",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            borderBottom: "1px solid #E5E7EB",
            boxSizing: "border-box",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* 왼쪽 묶음 */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {/* 계정 버튼 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 8px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              onClick={() => setAccountOpen((prev) => !prev)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(227,227,227,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "9px",
                  background: "#B9C8FF",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                B
              </div>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                  whiteSpace: "nowrap",
                }}
              >
                BuildAI
              </div>

              <ChevronDown size={12} strokeWidth={1.5} color="#73737C" />
            </div>

            {/* 무료 배지 */}
            <div
              style={{
                width: "28px",
                height: "18px",
                borderRadius: "4px",
                background: "rgba(0,191,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                color: "#0088FF",
                fontWeight: 400,
                flexShrink: 0,
              }}
            >
              무료
            </div>
          </div>

          {/* 벨 아이콘 */}
          <div
            style={{
              marginLeft: "auto",
              width: "30px",
              height: "30px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(227,227,227,0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <Bell size={16} strokeWidth={2} color="#73737C" />
          </div>
          {/* ▼ 계정 드롭다운 패널 */}
{accountOpen && (
  <div
  ref={dropdownRef}  
  style={{
      position: "absolute",
      top: "100%",          // 1번칸 바로 아래
      left: "16px",         // 검색박스 정렬 기준 따라감
      width: "258px",
      background: "#131316",
      borderRadius: "12px",
      padding: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      color: "#FFFFFF",
      zIndex: 100,
      boxSizing: "border-box",
    }}
  >
{/* 상단 계정 정보 */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "18px",
  }}
>
  {/* 프로필 아이콘 (기준점) */}
  <div
    style={{
      width: "64px",
      height: "64px",
      borderRadius: "20px",
      background: "#A5BEFD",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "28px",
      fontWeight: 600,
      color: "#fff",
      position: "relative",   // 🔥 기준점
      overflow: "visible",
    }}
  >
    B

    {/* 펜 아이콘 — 반드시 이 안에 있어야 함 */}
    <div
      style={{
        position: "absolute",
        bottom: "-4px",
        right: "-4px",
        background: "#FFFFFF",
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
      }}
    >
      <Pencil size={14} strokeWidth={2} color="#131316" />
    </div>
  </div>

  {/* 계정명 */}
  <div
    style={{
      marginTop: "10px",
      fontSize: "15px",
      fontWeight: 600,
      color: "#fff",
    }}
  >
    BuildAI
  </div>

  {/* 프로필 편집 */}
  <div
    style={{
      marginTop: "3px",
      fontSize: "12px",
      color: "#fff",
      opacity: 0.75,
    }}
  >
    프로필 편집
  </div>
</div>


    {/* 메뉴 리스트 */}
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {/* 설정 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 6px",
          cursor: "pointer",
          borderRadius: "6px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#1A1A1A")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        <Settings2 size={16} strokeWidth={2} color="#FFFFFF" />
        <span style={{ fontSize: "13px" }}>설정</span>
      </div>

      {/* 데스크톱 앱 받기 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 6px",
          cursor: "pointer",
          borderRadius: "6px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#1A1A1A")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        <Download size={16} strokeWidth={2} color="#FFFFFF" />
        <span style={{ fontSize: "13px" }}>데스크톱 앱 받기</span>
      </div>

      {/* 계정 추가 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 6px",
          cursor: "pointer",
          borderRadius: "6px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#1A1A1A")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        <Plus size={16} strokeWidth={2} color="#FFFFFF" />
        <span style={{ fontSize: "13px" }}>계정 추가</span>
      </div>

      {/* 로그아웃 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 6px",
          cursor: "pointer",
          borderRadius: "6px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#1A1A1A")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        <LogOut size={16} strokeWidth={2} color="#FFFFFF" />
        <span style={{ fontSize: "13px" }}>로그아웃</span>
      </div>
    </div>
  </div>
)}

        </div>

        {/* 2번칸 - 검색 + 최근항목 */}
        <div
          style={{
            borderBottom: "1px solid #E5E7EB",
            padding: "10px 14px 10px",
            boxSizing: "border-box",
          }}
        >
          {/* 검색 박스 */}
          <div
            style={{
              width: "100%",
              height: "26px",
              background: "#EDEDED",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              padding: "0 8px",
              cursor: "text",
            }}
          >
            <Search size={14} strokeWidth={2} color="#73737C" />
            <span style={{ fontSize: "12px", color: "#73737C", marginLeft: "6px" }}>
              검색
            </span>
            <ChevronDown
              size={14}
              strokeWidth={2}
              color="#73737C"
              style={{ marginLeft: "auto" }}
            />
          </div>

          {/* 최근 항목 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              padding: "4px 0 6px 9px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(227,227,227,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Clock4
              size={14}
              strokeWidth={2}
              color="#73737C"
              style={{ marginRight: "6px", marginTop: "1px" }}
            />
            <span style={{ fontSize: "13px", fontWeight: 400, color: "#131316", marginLeft: "1px" }}>
              최근 항목
            </span>
          </div>
        </div>

        {/* 3번칸 - 메뉴 목록 */}
        <div
          style={{
            padding: "6px 14px",
            borderBottom: "1px solid #E5E7EB",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
        >
          <MenuRow icon={<StickyNote size={14} strokeWidth={2} color="#73737C" />} label="초안" />
          <MenuRow icon={<LayoutGrid size={14} strokeWidth={2} color="#73737C" />} label="모든 프로젝트" />
          <MenuRow icon={<ClipboardList size={14} strokeWidth={2} color="#73737C" />} label="템플릿" />
          <MenuRow icon={<Trash2 size={14} strokeWidth={2} color="#73737C" />} label="휴지통" />
        </div>

        {/* 4번칸 - 즐겨찾기 */}
        <div style={{ padding: "10px 14px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "13px",
              fontWeight: 600,
              color: "#131316",
              cursor: "pointer",
              paddingLeft: "0px",
            }}
            onClick={() => setFavOpen((p) => !p)}
          >
            {favOpen ? (
              <ChevronDown size={14} strokeWidth={2} color="#73737C" style={{ marginRight: "6px" }} />
            ) : (
              <ChevronRight size={14} strokeWidth={2} color="#73737C" style={{ marginRight: "6px" }} />
            )}
            즐겨찾기
          </div>

          {favOpen && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
                padding: "6px 0 6px 10px",
                cursor: "pointer",
                borderRadius: "6px",
                width: "100%",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(227,227,227,0.5)")
               }
              onMouseLeave={(e) =>
                 (e.currentTarget.style.background = "transparent")
               }
            >
              <Folder
                size={13}
                strokeWidth={2}
                color="#73737C"
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: "13px", color: "#131316", fontWeight: 400 }}>
                팀 프로젝트
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 5번칸 - 도움말 버튼 */}
      <div style={{ padding: "14px" }}>
        <button
          style={{
            width: "100%",
            height: "26px",
            background: "#EDEDED",
            borderRadius: "6px",
            border: "1px solid #D1D5DB",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          도움말 및 리소스
        </button>
      </div>
    </div>
  );
}


/* 최종 정리된 메뉴 줄 컴포넌트 */
function MenuRow({ icon, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingLeft: "8px",
        cursor: "pointer",
      }}
    >
      {icon}
      <span style={{ marginLeft: "8px", fontSize: "14px", color: "#131316" }}>
        {label}
      </span>
    </div>
  );
}
