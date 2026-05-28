// ── PARTICLE BACKGROUND ── shared across all pages ──────────────────────────
(function () {
  var canvas = document.getElementById('bg');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W, H;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  var stars = Array.from({ length: 180 }, function () {
    return { x: Math.random(), y: Math.random(), r: Math.random() * 1.2 + 0.2, o: Math.random() * Math.PI * 2, s: Math.random() * 0.25 + 0.07 };
  });
  var nodes = Array.from({ length: 26 }, function () {
    return { x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.00028, vy: (Math.random() - 0.5) * 0.00028 };
  });

  function drawBg() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(function (s) {
      s.o += s.s * 0.014;
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(100,160,255,' + (0.07 + 0.07 * Math.sin(s.o)) + ')';
      ctx.fill();
    });
    nodes.forEach(function (n) { n.x = (n.x + n.vx + 1) % 1; n.y = (n.y + n.vy + 1) % 1; });
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = (nodes[i].x - nodes[j].x) * W, dy = (nodes[i].y - nodes[j].y) * H, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 190) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x * W, nodes[i].y * H);
          ctx.lineTo(nodes[j].x * W, nodes[j].y * H);
          ctx.strokeStyle = 'rgba(48,96,208,' + (0.09 * (1 - d / 190)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      ctx.beginPath();
      ctx.arc(nodes[i].x * W, nodes[i].y * H, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(80,140,255,0.28)';
      ctx.fill();
    }
    requestAnimationFrame(drawBg);
  }
  drawBg();
})();
