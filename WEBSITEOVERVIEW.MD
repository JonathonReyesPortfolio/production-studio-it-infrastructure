## Website Redevelopment & DNS Remediation

Following the deployment of the internal infrastructure, the next phase involved rebuilding the company’s public-facing website https://www.teamyas.com/

### Project Context

The Director requested a full redesign of the existing website. After evaluating platforms such as Squarespace and Wix, these options were not pursued due to ongoing subscription costs.

Leveraging my foundational web development knowledge, I proceeded with a custom-built solution, supported by AI-assisted development to accelerate delivery.

---

### Frontend Design

The website was developed with a focus on aligning with the company’s branding and creative direction.

- Implemented a **red, yellow, and black** color scheme to match the brand identity  
- Collaborated with the team to validate design decisions through **group voting and feedback**  
- Ensured a clean, modern layout suitable for both technical and non-technical users  

---

### Backend & Hosting Challenges

The existing hosting and DNS environment presented several issues:

- The domain’s **A record was incorrectly pointing to a previous hosting provider**
- There was **no documentation or retained access details** from the prior setup
- DNS records were inconsistent and partially misconfigured

After confirming the lack of usable legacy information, I made the decision to consolidate all services under :contentReference[oaicite:0]{index=0}, as the business was already paying for domain, hosting, and email services through this provider.

---

### DNS & Hosting Remediation

During investigation, it became clear that the hosting plan included features that were **not properly provisioned or accessible**, including:

- SSL certificate management  
- MX record configuration  
- Full DNS control via cPanel  

I engaged with provider support to restore access and enable these features, ensuring the business received the full value of their subscription.

Key actions taken:

- Cleaned up and standardized all DNS records  
- Repointed the domain to the correct hosting environment  
- Enabled and configured SSL certificates for HTTPS  
- Restored full DNS and mail control within cPanel  

---

### Email System Configuration

With DNS stabilized, I implemented a properly authenticated email system:

- Configured **SPF**, **DKIM**, and **DMARC** records to improve deliverability and reduce spoofing risk  
- Troubleshot DNS propagation and misconfiguration issues affecting email flow  
- Centralized communication by ensuring all staff had access to the **info@** mailbox  

---

### Key Outcomes

- Consolidated fragmented hosting and DNS into a **single, manageable platform**  
- Restored missing features the business was already paying for  
- Improved **email reliability and security posture**  
- Delivered a **cost-effective, custom-built website** aligned with business requirements  
- Established a clean foundation for future scalability and maintenance  

---

### Notes

This work was completed under real-world constraints, including:
- Limited documentation from previous setups  
- No direct control over original infrastructure decisions  
- Requirement to work within existing paid services  

The result was a stabilized, production-ready web and email environment aligned with both technical best practices and business needs.