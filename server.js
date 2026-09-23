import express from 'express';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexHtml = path.join(distDir, 'index.html');

// Fallback: If dist/index.html is not present at startup, build it
if (!fs.existsSync(indexHtml)) {
  console.log('[Server] dist/index.html not found, running build...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('[Server] Build completed successfully.');
  } catch (err) {
    console.error('[Server] Build failed:', err);
  }
}

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Health check endpoints for Cloud Run startup/liveness probes
const healthHandler = (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
};

app.get('/health', healthHandler);
app.get('/_health', healthHandler);
app.get('/healthz', healthHandler);
app.get('/ready', healthHandler);
app.get('/live', healthHandler);

// Serve built static assets from dist
app.use(express.static(distDir, {
  maxAge: '1y',
  immutable: true,
  index: false
}));

// SPA fallback for client-side routing
app.get('*', (_req, res) => {
  if (fs.existsSync(indexHtml)) {
    res.sendFile(indexHtml);
  } else {
    res.status(200).send(`<!DOCTYPE html><html><head><title>BizzScale</title><meta http-equiv="refresh" content="3"></head><body style="background:#090D16;color:#e2e8f0;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;"><div>Loading ScaleSuite...</div></body></html>`);
  }
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Server] Production server running on http://0.0.0.0:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('[Server] SIGTERM received, exiting gracefully');
  server.close(() => process.exit(0));
});

process.on('SIGINT', () => {
  console.log('[Server] SIGINT received, exiting gracefully');
  server.close(() => process.exit(0));
});
