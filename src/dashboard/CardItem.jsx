import { StickyNote, ClipboardList, Star } from "lucide-react";
import "./dashboard.css";

export default function CardItem({
  thumbnail,
  title,
  date,
  isTemplate,
}) {
  return (
    <div className="card-item">

      {/* 썸네일 */}
      <div className="card-thumb">
        {thumbnail && <img src={thumbnail} alt={title} />}
        <div className="card-favorite">
          <Star size={16} strokeWidth={1.5} />
        </div>
      </div>

      {/* 구분선 */}
      <div className="thumb-divider" />

      {/* 하단 내용 */}
      <div className="card-bottom">

        {/* 아이콘: 템플릿 여부에 따라 바뀜 */}
        <div className="card-left-icon">
          {isTemplate ? (
            <ClipboardList size={17} strokeWidth={1.8} color="#73737C" />
          ) : (
            <StickyNote size={17} strokeWidth={1.8} color="#73737C" />
          )}
        </div>

        <div className="card-text">
          <div className="card-title">{title}</div>
          <div className="card-date">{date}</div>
        </div>

      </div>
    </div>
  );
}
