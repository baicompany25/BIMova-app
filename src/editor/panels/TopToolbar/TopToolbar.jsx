// src/editor/panels/TopToolbar/TopToolbar.jsx

// Lucide
import { ChevronDown } from "lucide-react";

import {
  MousePointer2,
  DoorOpen,
  LandPlot,
  TableColumnsSplit,
  Spline,
  Route,
  RectangleHorizontal,
  Circle,
  Copy,
  Move,
  RotateCw,
  Scissors,
  FlipHorizontal2,
  RulerDimensionLine,
  Type,
  Cloud,
  File,
  Table2,
  MessageCircleMore,
} from "lucide-react";

// Iconify
import { Icon } from "@iconify/react";
import rectangularPrism from "@iconify-icons/tabler/rectangular-prism";
import lineIcon from "@iconify-icons/tabler/line";
import offsetIcon from "@iconify-icons/gis/offset";
import arrowGuide from "@iconify-icons/tabler/arrow-guide";
import sliderHRange from "@iconify-icons/uil/slider-h-range";
import measureArea from "@iconify-icons/gis/measure-area-alt";

import ToolButton from "./ToolButton";
import ToolGroupDivider from "./ToolGroupDivider";
import "./styles.css";

const RectPrismIcon = (props) => (
  <Icon icon={rectangularPrism} {...props} />
);
const LineIcon = (props) => <Icon icon={lineIcon} {...props} />;
const OffsetIcon = (props) => (
  <Icon icon={offsetIcon} {...props} style={{ transform: "rotate(-90deg)" }} />
);
const ArrowGuideIcon = (props) => (
  <Icon icon={arrowGuide} {...props} style={{ transform: "rotate(180deg)" }} />
);
const SliderHIcon = (props) => <Icon icon={sliderHRange} {...props} />;
const MeasureAreaIcon = (props) => <Icon icon={measureArea} {...props} />;


export default function TopToolbar() {
  const tools = [
    { type: "title", label: "Drawing 1", dropdown: true },

    { id: "select", icon: MousePointer2, label: "선택" },

    { type: "divider" },

    { id: "wall", icon: RectPrismIcon, label: "벽체(Wall)" },
    { id: "door", icon: DoorOpen, label: "개구부(Door/Opening)" },
    { id: "zone", icon: LandPlot, label: "구역생성(Zone)" },
    { id: "zone-split", icon: TableColumnsSplit, label: "구역나누기(Zone Divider)" },

    { type: "divider" },

    { id: "line", icon: LineIcon, label: "라인(Line)" },
    { id: "arc", icon: Spline, label: "호(Arc)" },
    { id: "curve", icon: Route, label: "곡선(Curve)" },
    { id: "rect", icon: RectangleHorizontal, label: "사각형(Rect)" },
    { id: "circle", icon: Circle, label: "원(Circle)" },
    { id: "draw-more", icon: null, label: "더보기", dropdown: true },

    { type: "divider" },

    { id: "copy", icon: Copy, label: "복사(Copy)" },
    { id: "move", icon: Move, label: "이동(Move)" },
    { id: "rotate", icon: RotateCw, label: "회전(Rotate)" },
    { id: "offset", icon: OffsetIcon, label: "오프셋(Offset)" },
    { id: "trim", icon: Scissors, label: "트림(Trim)" },
    { id: "mirror", icon: FlipHorizontal2, label: "미러(Mirror)" },
    { id: "edit-more", icon: null, label: "더보기", dropdown: true },

    { type: "divider" },

    { id: "dim", icon: RulerDimensionLine, label: "치수(Dimension)" },
    { id: "text", icon: Type, label: "텍스트(Text)" },
    { id: "leader", icon: ArrowGuideIcon, label: "리더(Leader)" },
    { id: "cloud", icon: Cloud, label: "구름(Cloud)" },
    { id: "annot-more", icon: null, label: "더보기", dropdown: true },

    { type: "divider" },

    { id: "page", icon: File, label: "페이지(Page)" },
    { id: "table", icon: Table2, label: "테이블(Table)" },
    { id: "layout-more", icon: null, label: "더보기", dropdown: true },

    { type: "divider" },

    { id: "comment", icon: MessageCircleMore, label: "코멘트(Comment)" },
    { id: "distance", icon: SliderHIcon, label: "거리측정" },
    { id: "area", icon: MeasureAreaIcon, label: "면적측정" },
  ];

  return (
    <div className="top-toolbar-container">
      {tools.map((item, idx) => {
        if (item.type === "divider") return <ToolGroupDivider key={idx} />;

        if (item.type === "title")
          return (
            <div key={idx} className="title-dropdown">
              {item.label}
              <ChevronDown size={14} strokeWidth={1.8} color="#73737C" />
            </div>
          );

        return (
          <ToolButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            dropdown={item.dropdown}
          />
        );
      })}
    </div>
  );
}
