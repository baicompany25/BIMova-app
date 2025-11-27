// src/dashboard/Dashboard.jsx

import CardItem from "./CardItem";
import "./dashboard.css";

export default function DashboardLayout() {
  return (
    <div style={{ padding: "20px 40px" }}>
      {/* 초안 */}
      <Section title="초안">
        <CardItem
          title="2025_10_24_안다즈 도면"
          date="3일 전 편집됨"
          thumbnail="/draft1.jpg"
        />
        <CardItem
          title="제목 없음"
          date="1일 전 편집됨"
          thumbnail="/draft2.jpg"
        />
      </Section>

      {/* 템플릿 */}
      <Section title="템플릿">
        <CardItem
          title="모델링 시작하기"
          date="3개월 전 편집됨"
          isTemplate={true}
          thumbnail="/template1-2.jpg"
        />
        <CardItem
          title="아파트 리모델링 시작하기"
          date="3개월 전 편집됨"
          isTemplate={true}
          thumbnail="/template2.jpg"
        />
        <CardItem
          title="도면기호 템플릿"
          date="3개월 전 편집됨"
          isTemplate={true}
          thumbnail="/template3.jpg"
        />
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "16px",
          color: "#131316",
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
