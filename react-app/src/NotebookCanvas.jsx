import { useEffect, useRef } from "react";

/**
 * Defter çizim katmanı — kalem / fosforlu / silgi.
 * Çizim sayfa başına localStorage'a PNG olarak kaydedilir (storageKey).
 * active=false iken pointer geçişli (çizmez, sayfa normal kullanılır).
 */
function hexToRgba(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

export default function NotebookCanvas({ active, tool, color, storageKey, clearNonce }) {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const saveTimer = useRef(null);
  const keyRef = useRef(storageKey);
  keyRef.current = storageKey;

  // Boyutlandır + kayıtlı çizimi yükle (storageKey / boyut değişince).
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const parent = cv.parentElement;

    function load() {
      const ctx = cv.getContext("2d");
      ctx.clearRect(0, 0, cv.width, cv.height);
      try {
        const data = localStorage.getItem("tyt-draw-" + keyRef.current);
        if (data) {
          const img = new Image();
          img.onload = () => ctx.drawImage(img, 0, 0, cv.width, cv.height);
          img.src = data;
        }
      } catch {}
    }
    function fit() {
      const w = parent.clientWidth, h = parent.clientHeight;
      if (!w || !h) return;
      if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
      load();
    }
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(parent);
    return () => ro.disconnect();
  }, [storageKey]);

  // Dışarıdan temizle sinyali.
  useEffect(() => {
    if (!clearNonce) return;
    const cv = canvasRef.current;
    if (!cv) return;
    cv.getContext("2d").clearRect(0, 0, cv.width, cv.height);
    try { localStorage.removeItem("tyt-draw-" + keyRef.current); } catch {}
  }, [clearNonce]);

  function pos(e) {
    const r = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  function down(e) {
    if (!active) return;
    drawing.current = true;
    last.current = pos(e);
    try { canvasRef.current.setPointerCapture(e.pointerId); } catch {}
  }
  function move(e) {
    if (!drawing.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const p = pos(e);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 24;
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else if (tool === "highlight") {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 16;
      ctx.strokeStyle = hexToRgba(color, 0.3);
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
  }
  function up() {
    if (!drawing.current) return;
    drawing.current = false;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try { localStorage.setItem("tyt-draw-" + keyRef.current, canvasRef.current.toDataURL("image/png")); } catch {}
    }, 400);
  }

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerLeave={up}
      className="absolute inset-0 z-20"
      style={{ pointerEvents: active ? "auto" : "none", touchAction: "none", cursor: active ? "crosshair" : "default" }}
    />
  );
}
