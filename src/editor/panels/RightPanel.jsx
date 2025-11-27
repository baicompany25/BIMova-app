import RP_Header from "../../components/RightPanel/RP_Header";
import RP_Project from "../../components/RightPanel/RP_Project";
import RP_ModelPage from "../../components/RightPanel/RP_ModelPage";
import RP_Snaps from "../../components/RightPanel/RP_Snaps";

export default function RightPanel({ scaleLength }) {

  return (
    <div
      style={{
        width: "290px",
        height: "100vh",
        position: "relative",
        overflow: "visible",       // 혹시 내부 요소 넘침 방지
        borderLeft: "1px solid #E5E6EB",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        paddingRight: "12px",
        boxSizing: "border-box",
      }}
    >
      <RP_Header />

      <div style={dividerStyle} />

      <RP_Project />

      <div style={dividerStyle} />

      <RP_ModelPage />

      <div style={{ flexGrow: 1 }} />

      <RP_Snaps scaleLength={scaleLength} />
      
    </div>
  );
}

const dividerStyle = {
  width: "100%",
  height: "1px",
  backgroundColor: "#E5E6EB",
};
