import { useState, useEffect } from "react";
import Sidebar from "../../dashboard/Sidebar";
import Topbar from "../../dashboard/Topbar";
import DashboardLayout from "../../dashboard/Dashboard";

export default function Dashboard() {

  // 🔥 로딩 상태
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2초 로딩
    return () => clearTimeout(timer);
  }, []);

  // 🔥 로딩 화면
  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
          color: "#73737C",
          fontSize: "14px",
          gap: "12px",
        }}
      >
        <img
          src="/favicon.svg"
          style={{ width: 60, opacity: 0.7 }}
        />
        <div>Loading workspace...</div>
      </div>
    );
  }

  // 🔥 로딩 완료 후 → 기존 대시보드 화면 렌더
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", overflow: "hidden" }}>
      
      {/* 좌측바 */}
      <Sidebar />

      {/* 우측 전체 영역 */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* 상단바 */}
        <Topbar />

        {/* 메인 대시보드 내용 */}
        <div style={{ flex: 1, padding: "20px", overflow: "auto" }}>
          <DashboardLayout />
        </div>

      </div>
    </div>
  );
}
