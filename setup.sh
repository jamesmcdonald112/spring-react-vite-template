#!/bin/bash
set -e

echo "🔧 Setting up environment files..."

if [ ! -f backend/.env ]; then
  cp backend/.env.example backend/.env
  echo "✅ Created backend/.env"
else
  echo "⚠️ backend/.env already exists"
fi

if [ ! -f frontend/.env ]; then
  cp frontend/.env.example frontend/.env
  echo "✅ Created frontend/.env"
else
  echo "⚠️ frontend/.env already exists"
fi

echo "✨ Environment setup complete!"