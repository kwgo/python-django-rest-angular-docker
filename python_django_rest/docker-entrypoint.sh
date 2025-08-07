#!/bin/sh

set -e  # Exit on error

echo "🚀 Starting Django entrypoint..."

# Check if there are unapplied migrations
echo "🔍 Checking for pending migrations..."
if py manage.py showmigrations --plan | grep '\[ \]'; then
    echo "📌 Running makemigrations..."
    py manage.py makemigrations member_app

    echo "📌 Running migrate..."
    py manage.py migrate member_app
else
    echo "✅ No pending migrations."
fi
# chmod +x docker-entrypoint.sh