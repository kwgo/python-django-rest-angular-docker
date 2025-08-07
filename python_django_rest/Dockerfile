FROM python:3.13.5

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the full source code
COPY . .

# Copy and set entrypoint script
COPY docker-entrypoint.sh /code/docker-entrypoint.sh
# RUN chmod +x /code/docker-entrypoint.sh

# ENTRYPOINT ["/code/docker-entrypoint.sh"]

# Build and run
# docker compose up --build
