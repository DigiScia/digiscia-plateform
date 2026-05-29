# ============================================================
# Stage 1: Build stage
# ============================================================
FROM python:3.12-slim AS builder

# Set build-time env variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Create virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Install Python dependencies inside virtual env
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# ============================================================
# Stage 2: Runtime stage (extremely lightweight)
# ============================================================
FROM python:3.12-slim

# Set runtime env variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PORT=8080
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

# Copy virtual environment from builder stage
COPY --from=builder /opt/venv /opt/venv

# Install minimal PostgreSQL runtime library
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq5 \
    && rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . .

# Collect static files at build time
RUN python manage.py collectstatic --noinput || true

EXPOSE 8080

# Run Gunicorn on port 8080 with 2 workers for performance
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8080", "--workers", "2"]