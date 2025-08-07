#!/bin/sh

set -e  # Exit on error

echo "🚀 Starting Django entrypoint..."

# Check if there are unapplied migrations
echo "🔍 Checking for pending migrations..."
if python manage.py showmigrations --plan | grep '\[ \]'; then
    echo "📌 Running makemigrations..."
    python manage.py makemigrations employee_app

    echo "📌 Running migrate..."
    python manage.py migrate employee_app
else
    echo "✅ No pending migrations."
fi
# chmod +x docker-entrypoint.sh