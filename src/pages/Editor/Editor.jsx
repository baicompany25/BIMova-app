// src/pages/Editor/Editor.jsx

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import LeftBar from "../../editor/panels/LeftBar";
import RightPanel from "../../editor/panels/RightPanel";
import BottomToolbar from "../../editor/panels/BottomToolbar";
import WorkCanvas from "../../editor/canvas/WorkCanvas";

import MenuPanel from "../../editor/panels/MenuPanel";
import LayersPanel from "../../components/LayersPanel/LayersPanel";
import BlockPanel from "../../components/BlockPanel/BlockPanel";
import MaterialPanel from "../../components/MaterialPanel/MaterialPanel";
import LayoutPanel from "../../components/LayoutPanel/LayoutPanel";
import TablePanel from "../../components/TablePanel/TablePanel";
import TracePanel from "../../components/TracePanel/TracePanel";
import AddinPanel from "../../components/AddinPanel/AddinPanel";

import TopToolbar from "../../editor/panels/TopToolbar/TopToolbar";

export default function Editor() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [cmdOpen, setCmdOpen] = useState(true);

  const [openPanel, setOpenPanel] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scaleLength, setScaleLength] = useState(100);

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1200); // 1.2초 로딩

  return () => clearTimeout(timer);
}, []);

 // 🔥 1) 로딩 화면 먼저 렌더링
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
        <div>Loading editor...</div>
      </div>
    );
  }

  // 🔥 2) 로딩 끝나면 에디터 렌더링
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#FAFAFC",
      }}
    >
      {/* LeftBar */}
      <div
        style={{
          width: "46px",
          height: "100%",
          borderRight: "1px solid #E5E6EB",
          backgroundColor: "#FFFFFF",
          zIndex: 5,
        }}
      >
        <LeftBar
          openPanel={openPanel}
          setOpenPanel={setOpenPanel}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>

      {/* Work + Right */}
      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >

        {/* Top Toolbar */}
        <div 
         style={{ 
           position:"absolute", 
           top:0, 
           left:0, 
           right: "280px", 
           height: "43px",
           background: "#fff",
           zIndex:50,
           borderBottom: "1px solid #E5E6EB", 
           }}
           >
        <TopToolbar />
        </div>

        {/* WorkCanvas */}
        <div style={{ flex: 1, position: "relative", height: "100%" }}>
          <WorkCanvas
            onScaleChange={(zoom) => {
              const mm = Math.round(100 / zoom);
              setScaleLength(mm);
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20,
            }}
          >
            <BottomToolbar />
          </div>
        </div>

        {/* RightPanel */}
        <div
          style={{
            width: "280px",
            height: "100%",
            borderLeft: "1px solid #E5E6EB",
            backgroundColor: "#FFFFFF",
            zIndex: 5,
          }}
        >
          <RightPanel scaleLength={scaleLength} />
        </div>

        {/* Menu Panel (overlay) */}
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: 0,
              width: "230px",
              height: "100%",
              zIndex: 30,
            }}
          >
            <MenuPanel onClose={() => setMenuOpen(false)} />
          </div>
        )}

        {/* Left SubPanels (overlay) */}
        {openPanel && (
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: 0,
              width: "290px",
              height: "100%",
              backgroundColor: "#FFFFFF",
              borderRight: "1px solid #E5E6EB",
              zIndex: 25,
            }}
          >
            {openPanel === "layers" && <LayersPanel />}
            {openPanel === "blocks" && <BlockPanel />}
            {openPanel === "materials" && <MaterialPanel />}
            {openPanel === "layout" && <LayoutPanel />}
            {openPanel === "table" && <TablePanel />}
            {openPanel === "trace" && <TracePanel />}
            {openPanel === "addin" && <AddinPanel />}
          </div>
        )}

      </div>
    </div>
  );
}
