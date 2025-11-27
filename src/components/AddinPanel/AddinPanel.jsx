import { Plus, Blocks } from "lucide-react";

export default function AddinPanel() {
  return (
    <div
      style={{
        width: "290px",
        height: "100%",
        background: "#FFFFFF",
        borderRight: "1px solid #E5E6EB",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        color: "#131316",
      }}
    >
      {/* ---------------- 상단 제목 + 아이콘 ---------------- */}
      <div
        style={{
          height: "43px",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          borderBottom: "1px solid #E5E6EB",
        }}
      >
        {/* 제목 */}
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#131316",
          }}
        >
          AI 에드인
        </span>

        {/* + 아이콘 */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <Plus size={15} strokeWidth={2} color="#73737C" style={{ cursor: "pointer" }} />
        </div>
      </div>

      {/* ---------------- 빈 상태 뷰 ---------------- */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
          color: "#73737C",
        }}
      >
        {/* 메시지 아이콘 */}
        <Blocks size={50} color="#BFC0C5" strokeWidth={1} />

        {/* 메인 텍스트 */}
        <div
          style={{
            marginTop: "20px",
            fontSize: "14px",
            fontWeight: 500,
            color: "#131316",
          }}
        >
          이 도면에 AI 에드인 없음
        </div>

        {/* 설명문 */}
        <div
          style={{
            marginTop: "10px",
            fontSize: "13px",
            lineHeight: "20px",
            color: "#73737C",
            maxWidth: "170px",
          }}
        >
          다양한 에드인을 통해 AI 기능을 사용 할 수 있습니다.
        </div>

        {/* 링크 */}
        <div
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#4662F2",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          AI 에드인에 대해 알아보기
        </div>
      </div>
    </div>
  );
}
