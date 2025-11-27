import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function RP_ModelPage() {
  const [open, setOpen] = useState(true);

  const [wireframe, setWireframe] = useState("On");
  const [grid, setGrid] = useState("Show");

  const [unitOpen, setUnitOpen] = useState(false);
  const [scaleOpen, setScaleOpen] = useState(false);
  const [layerOpen, setLayerOpen] = useState(false);
  const [bgPickerOpen, setBgPickerOpen] = useState(false);

  const [unit, setUnit] = useState("Millimeters");
  const [scale, setScale] = useState("1:1");
  const [layer, setLayer] = useState("CO-1");
  const [bgColor, setBgColor] = useState("#FFFFFF");

  return (
    <div style={{ width: "100%", paddingLeft: "6px", paddingRight: "14px" }}>
      {/* 헤더 */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "8px 0",
          marginBottom: open ? 4 : 0,
        }}
      >
        <div style={{ width: 20 }}>
          {open ? (
            <ChevronDown size={14} strokeWidth={2} color="#73737C" />
          ) : (
            <ChevronRight size={14} strokeWidth={2} color="#73737C" />
          )}
        </div>

        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          캔버스
        </span>
      </div>

      {/* 내용 */}
      {open && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            paddingBottom: "12px",
            paddingLeft: 20,
          }}
        >
          {/* 배치 */}
          <Row label="배치">
            <Box>{`평면 (Floor Plan)`}</Box>
          </Row>

          {/* 도면층 */}
          <Row label="도면층">
            <DropdownBox
              value={layer}
              onClick={() => setLayerOpen((p) => !p)}
            />

            {layerOpen && (
              <DropdownPanel>
                {/* 좌측바 LayerPanel 내용을 여기에 그대로 넣으면 됨 */}
                <div style={panelItem}>CO-1</div>
                <div style={panelItem}>CO-2</div>
                <div style={panelItem}>CO-3</div>
              </DropdownPanel>
            )}
          </Row>

          {/* 와이어프레임 */}
          <Row label="와이어프레임">
            <Toggle2
              left="On"
              right="Off"
              selected={wireframe}
              onSelect={setWireframe}
            />
          </Row>

          {/* 그리드 */}
          <Row label="그리드">
            <Toggle2
              left="Show"
              right="Hide"
              selected={grid}
              onSelect={setGrid}
            />
          </Row>

          {/* 단위 */}
          <Row label="단위">
            <DropdownBox value={unit} onClick={() => setUnitOpen((p) => !p)} />

            {unitOpen && (
              <DropdownPanel>
                {["Millimeters", "Centimeters", "Meters", "Inch"].map((u) => (
                  <div
                    key={u}
                    style={panelItem}
                    onClick={() => {
                      setUnit(u);
                      setUnitOpen(false);
                    }}
                  >
                    {u}
                  </div>
                ))}
              </DropdownPanel>
            )}
          </Row>

          {/* 스케일 */}
          <Row label="스케일">
            <DropdownBox
              value={scale}
              onClick={() => setScaleOpen((p) => !p)}
            />

            {scaleOpen && (
              <DropdownPanel>
                {[
                  "1:1",
                  "1:5",
                  "1:10",
                  "1:15",
                  "1:25",
                  "1:30",
                  "1:40",
                  "1:50",
                  "1:75",
                  "1:100",
                  "1:200",
                  "1:500",
                  "1:1000",
                ].map((s) => (
                  <div
                    key={s}
                    style={panelItem}
                    onClick={() => {
                      setScale(s);
                      setScaleOpen(false);
                    }}
                  >
                    {s}
                  </div>
                ))}
              </DropdownPanel>
            )}
          </Row>

          {/* 배경색 */}
          <Row label="배경색">
            <div
              style={{
                ...boxStyle,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                onClick={() => setBgPickerOpen((p) => !p)}
                style={{
                  width: "42px",
                  height: "24px",
                  borderRadius: "4px",
                  backgroundColor: bgColor,
                  border: "1px solid #E5E6EB",
                  cursor: "pointer",
                  marginLeft: "-8px",
                }}
              />

              <span style={{ fontSize: 12 }}>{bgColor}</span>
            </div>

            {bgPickerOpen && (
              <DropdownPanel isRight>
                {/* 우측패널 바깥으로 컬러피커가 나와야 해서 position 처리 필요 */}
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  style={{
                    width: "100%",
                    height: "40px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                />
              </DropdownPanel>
            )}
          </Row>
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------- */
/* 공통 Row */
/* ----------------------------------------- */

function Row({ label, children }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 85,
          fontSize: 12.5,
          color: "#73737C",
          flexShrink: 0,
        }}
      >
        {label}
      </div>

      <div style={{ flex: 1, position: "relative" }}>{children}</div>
    </div>
  );
}

/* ----------------------------------------- */
/* Box (기본 박스) */
/* ----------------------------------------- */

function Box({ children }) {
  return <div style={boxStyle}>{children}</div>;
}

const boxStyle = {
  width: "100%",
  height: "30px",
  backgroundColor: "#F4F4F6",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  fontSize: "12px",
  whiteSpace: "nowrap",
  cursor: "default",
};

/* ----------------------------------------- */
/* 토글 On/Off */
/* ----------------------------------------- */

function Toggle2({ left, right, selected, onSelect }) {
  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        backgroundColor: "#F4F4F6",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        padding: "4px",
        gap: "6px",
      }}
    >
      <button
        onClick={() => onSelect(left)}
        style={selected === left ? toggleOn : toggleOff}
      >
        {left}
      </button>
      <button
        onClick={() => onSelect(right)}
        style={selected === right ? toggleOn : toggleOff}
      >
        {right}
      </button>
    </div>
  );
}

const toggleOn = {
  flex: 1,
  height: "100%",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
  border: "none",
  fontSize: "12px",
  cursor: "pointer",
};

const toggleOff = {
  flex: 1,
  height: "100%",
  borderRadius: "4px",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "12px",
  color: "#73737C",
  cursor: "pointer",
};

/* ----------------------------------------- */
/* 드롭다운 박스 + 패널 */
/* ----------------------------------------- */

function DropdownBox({ value, onClick }) {
  return (
    <div onClick={onClick} style={{ ...boxStyle, cursor: "pointer" }}>
      <span>{value}</span>
      <ChevronDown
        size={14}
        strokeWidth={2}
        color="#73737C"
        style={{ marginLeft: "auto" }}
      />
    </div>
  );
}

function DropdownPanel({ children, isRight }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "38px",
        right: isRight ? "-10px" : "0px",
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
        padding: "6px 0",
        zIndex: 20,
      }}
    >
      {children}
    </div>
  );
}

const panelItem = {
  fontSize: 12,
  padding: "8px 12px",
  cursor: "pointer",
  whiteSpace: "nowrap",
};
