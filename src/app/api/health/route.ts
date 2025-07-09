import { NextResponse } from 'next/server';

export async function GET() {
  const healthCheck = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
    build: process.env.VERCEL_GIT_COMMIT_SHA || 'local',
    region: process.env.VERCEL_REGION || 'local',
    services: {
      database: 'not implemented',
      cache: 'not implemented',
      external_apis: 'not implemented'
    }
  };

  return NextResponse.json(healthCheck, { 
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
} 