FROM gitpod/workspace-full-vnc

# Install Cypress dependencies as per https://docs.cypress.io/guides/guides/continuous-integration.html#Docker        
RUN DEBIAN_FRONTEND=noninteractive sudo apt-get update \
 && DEBIAN_FRONTEND=noninteractive sudo apt-get install -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
 && sudo rm -rf /var/lib/apt/lists/*
