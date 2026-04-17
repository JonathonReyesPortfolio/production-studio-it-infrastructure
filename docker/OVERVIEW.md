# 📦 Team Yas – Docker-Based Intranet on Synology DSM

## Overview

This project documents the design and implementation of a self-hosted intranet environment using a Synology DS1522+ NAS.

As this was my first experience with Synology, I approached the platform from a learning perspective—exploring its Linux-based operating system (DSM) and identifying opportunities to build a centralized, secure, and user-friendly internal platform.

Through this process, I discovered and adopted Docker, which became the foundation for delivering modular, containerized services within the environment.

---

## Objective

The goal of this project was to:

* Consolidate fragmented tools and workflows into a single platform
* Provide a clean and intuitive internal user experience
* Deploy self-hosted alternatives to common SaaS tools
* Ensure secure, LAN-restricted access with encrypted services
* Build a scalable foundation using containerized applications

---

## Architecture Overview

The environment is built around a Docker-based service stack, exposed internally through a central landing page.

### User Flow

HOMARR (Landing Page)
│
├── Vaultwarden
├── BookStack
├── Wiki.js
├── Nextcloud
└── Excalidraw

* Homarr acts as the intranet entry point
* Each application is containerized and accessible via internal URLs
* Services are logically separated but unified through a consistent interface
* External access is securely controlled via VPN, ensuring services remain private while still accessible remotely

---

## Core Services

### 🔐 Vaultwarden

* Self-hosted password manager
* Centralizes credential storage across the organization
* Replaces insecure practices (e.g., shared notes, spreadsheets)

### 📚 BookStack

* General business documentation
* Used for processes, guides, and knowledge sharing

### 🧠 Wiki.js

* Dedicated IT documentation platform
* Structured for technical runbooks and system design

### 📁 Nextcloud

* File storage and sharing platform
* Provides internal alternative to cloud storage services

### ✏️ Excalidraw

* Lightweight diagramming and sketching tool
* Useful for quick documentation, planning, and collaboration

---

## Design Rationale

The application stack was intentionally selected to address data fragmentation across the business.

Instead of spreading information across multiple disconnected platforms, this setup:

* Centralizes knowledge and assets
* Improves accessibility for both technical and non-technical users
* Encourages structured documentation and collaboration

The overall design was also influenced by Microsoft SharePoint, particularly its approach to creating a unified internal portal for content, documentation, and team resources. This project aimed to replicate a similar intranet-style experience using open-source, self-hosted tools, while maintaining greater control over infrastructure and data.

---

## Reverse Proxy & Internal Domains

To improve usability and professionalism, a reverse proxy layer was introduced to:

1. Enable HTTPS (SSL/TLS encryption)
2. Provide clean internal domain names

Example:

https://vault.teamyas.local
https://wiki.teamyas.local

---

## Synology Limitation & Workaround

A key technical constraint encountered:

* Synology DSM reserves ports 80 (HTTP) and 443 (HTTPS) for system services
* This prevents full control over standard reverse proxy behavior

### Impact

Services were accessible using port-based URLs:

https://vault.teamyas.local:4443

### Workaround

To improve the user experience:

* A Small Form Factor (SFF) PC was deployed as a local DNS server
* This allowed:

  * Custom internal domain resolution
  * Clean navigation via Homarr
  * Redirection of service names to the Synology NAS

While ports were still present in URLs, the DNS layer abstracted complexity for end users.

---

## Networking & Security

Security was a key design consideration.

### Controls Implemented

* Services restricted to LAN-only access
* External access only permitted via VPN
* No direct public exposure of applications
* Internal DNS resolution for service discovery
* Firewall rules enforcing:

Firewall rules are configured using a whitelist model.
Access to internal services (Vaultwarden, Nginx Proxy Manager, and supporting applications) is restricted to trusted networks only:

LAN (192.168.0.0/24)
VPN (10.8.0.0/24)
Internal Docker network (172.22.0.0/16)

All other traffic is explicitly denied, ensuring no direct external exposure of services.
External access is only permitted via the VPN entry point.

  * No outbound communication beyond the local network
  * Controlled access between services

This design mirrors a zero-trust mindset within a small business context, ensuring that sensitive tools and data remain internal.

---

## Key Outcomes

* Successfully deployed a multi-service Docker environment on Synology DSM
* Designed a centralized intranet experience using Homarr
* Implemented internal DNS and reverse proxy concepts despite platform limitations
* Secured remote access through VPN-based connectivity
* Replaced fragmented workflows with structured, self-hosted solutions
* Gained hands-on experience with:

  * Docker and container networking
  * Reverse proxy design
  * Internal DNS resolution
  * Small business infrastructure planning

---

## Adoption & Usage

This environment was primarily developed as a foundational platform and proof-of-concept, with a focus on architecture, security, and scalability rather than immediate full-scale adoption.

---

## Notes

This project was built under real-world constraints, including:

* Limited hardware flexibility
* Platform-specific restrictions (Synology DSM)
* Minimal prior experience with Docker

Despite this, the final system delivered a functional and scalable internal platform that significantly improved organization and usability.
