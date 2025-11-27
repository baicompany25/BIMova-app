import { useEffect, useRef, useState } from "react";

export default function WorkCanvas({ onScaleChange }) {
  const canvasRef = useRef(null);

  // 줌 스케일
  const [zoom, setZoom] = useState(1);

  // 🔥 Pan 상태 (중간 버튼)
  const [isPanning, setIsPanning] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 }); // 그리드 이동량(px)

  // 🔥 Selection Box 상태 (좌클릭 드래그)
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectStart, setSelectStart] = useState({ x: 0, y: 0 });
  const [selectRect, setSelectRect] = useState(null);

  // 캔버스 리사이즈 + 그리드 그리기
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawGrid(ctx, rect.width, rect.height, zoom, panOffset);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [zoom, panOffset]);

  // 휠 줌
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e) => {
      e.preventDefault();

      const delta = e.deltaY < 0 ? 1.1 : 0.9; // 줌 속도
      setZoom((z) => {
        const newZoom = Math.min(Math.max(z * delta, 0.2), 5); // 0.2 ~ 5

        if (onScaleChange) onScaleChange(newZoom);

        return newZoom;
      });
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", handleWheel);
  }, [onScaleChange]);

  /* ------------------ 마우스 이벤트 ------------------ */

  const handleMouseDown = (e) => {
    // 중간 버튼(휠 클릭) → Pan 시작
    if (e.button === 1) {
      e.preventDefault();
      setIsPanning(true);
      setLastMouse({ x: e.clientX, y: e.clientY });
      return;
    }

    // 좌클릭 → Selection Box 시작
    if (e.button === 0) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setIsSelecting(true);
      setSelectStart({ x, y });
      setSelectRect(null);
    }
  };

  const handleMouseMove = (e) => {
    // Pan 중일 때
    if (isPanning) {
      const dx = e.clientX - lastMouse.x;
      const dy = e.clientY - lastMouse.y;

      setPanOffset((prev) => ({
        x: prev.x - dx,
        y: prev.y - dy,
      }));

      setLastMouse({ x: e.clientX, y: e.clientY });
      return;
    }

    // Selection Box 드래그 중일 때
    if (isSelecting) {
      const rect = canvasRef.current.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      setSelectRect({
        x: Math.min(selectStart.x, currentX),
        y: Math.min(selectStart.y, currentY),
        width: Math.abs(currentX - selectStart.x),
        height: Math.abs(currentY - selectStart.y),
      });
    }
  };

  const finishInteraction = () => {
    setIsPanning(false);
    setIsSelecting(false);
    setSelectRect(null);
  };

  const handleMouseUp = () => {
    finishInteraction();
  };

  const handleMouseLeave = () => {
    finishInteraction();
  };

  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#ffffff",
        overflow: "hidden", // 🔥 스크롤바 안 보이게 유지
        cursor: isPanning ? "grab" : "crosshair",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* 실제 그리드를 그리는 캔버스 */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* 선택 박스 오버레이 */}
      {selectRect && (
        <div
          style={{
            position: "absolute",
            left: selectRect.x,
            top: selectRect.y,
            width: selectRect.width,
            height: selectRect.height,
            border: "1px solid rgba(51, 133, 255, 0.6)",
            backgroundColor: "rgba(51, 133, 255, 0.15)",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

/* ------------------ 그리드 (panOffset 반영 버전) ------------------ */
function drawGrid(ctx, width, height, zoom, panOffset) {
  ctx.clearRect(0, 0, width, height);

  const BASE_SMALL = 20;
  const small = BASE_SMALL * zoom;
  const big = small * 5;

  const offsetX = panOffset.x;
  const offsetY = panOffset.y;

  // 🔥 offset을 반영해서 시작 위치를 잡아줌 (0점이 화면 구석에 고정되지 않게)
  const startSmallX = mod(-offsetX, small);
  const startSmallY = mod(-offsetY, small);
  const startBigX = mod(-offsetX, big);
  const startBigY = mod(-offsetY, big);

  // 작은 칸
  ctx.beginPath();
  ctx.strokeStyle = "#F1F1F5";
  for (let x = startSmallX; x < width; x += small) {
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, height);
  }
  for (let y = startSmallY; y < height; y += small) {
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(width, y + 0.5);
  }
  ctx.stroke();

  // 큰 칸
  ctx.beginPath();
  ctx.strokeStyle = "#E0E1E6";
  for (let x = startBigX; x < width; x += big) {
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, height);
  }
  for (let y = startBigY; y < height; y += big) {
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(width, y + 0.5);
  }
  ctx.stroke();
}

// JS에서 음수 대응용 모듈러 함수
function mod(n, m) {
  return ((n % m) + m) % m;
}
