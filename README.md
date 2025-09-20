# 👋 Clement Portfolio - DevOps/Cloud Engineer

🚀 **DevOps Engineer** | ☁️ **Cloud/Platform Engineer** | 🛡️ **Cloud Security-minded**

Modern, responsive portfolio website built with **Next.js 13+** and **Tailwind CSS**, showcasing expertise in automation, infrastructure-as-code, and cloud platforms. Optimized for performance and ready for **Vercel deployment**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Clementvsc/clement-portfolio)

## 🎯 Professional Summary

DevOps and Cloud Engineer with a strong foundation in automation, infrastructure-as-code, and platform engineering. I design and operate secure, scalable CI/CD platforms using Terraform, Kubernetes, and GitHub Actions, with Python at the core for tooling, integrations, and automation. Experienced across AWS and Azure, I focus on developer productivity, cloud cost efficiency, and security-by-design (DevSecOps) practices.

**Currently seeking DevOps/Cloud roles:** Platform Engineer, DevOps Engineer, Cloud Engineer, or Cloud Security–focused DevOps.

## 🛠️ Core Skills (DevOps-first)

- **Cloud:** AWS (EKS, EC2, VPC, IAM, RDS, S3), Azure (AKS, ACR, Azure DevOps)
- **IaC:** Terraform, Terragrunt, CloudFormation (basic), Helm, Kustomize
- **Containers & Orchestration:** Docker, Kubernetes (EKS/AKS), Ingress, Operators, HPA
- **CI/CD:** GitHub Actions, Jenkins, Azure Pipelines; trunk-based dev, GitOps (ArgoCD/Flux)
- **SRE & Observability:** Prometheus, Grafana, Loki, ELK/EFK, Alertmanager, SLOs/SLIs
- **Security/DevSecOps:** OIDC, IAM least-privilege, secrets mgmt (Sealed Secrets, SOPS), image scanning (Trivy), policy as code (OPA/Conftest)
- **Networking:** VPC, Subnets, NAT/GW, Load Balancers, DNS (Route53), TLS, Zero Trust basics
- **Databases/Queues:** PostgreSQL, MySQL, Redis, SQS/Kafka (intro)
- **Programming/Scripting:** Python (automation/SDK/CLIs), Bash, YAML, JSON, Make

## 🚀 Featured Projects

### 1) Terraform Cloud/Platform Automation
- **Stack:** Terraform, Terragrunt, AWS (VPC, EKS, RDS, IAM, S3), GitHub Actions, OIDC
- **Highlights:**
  - Built reusable Terraform modules for VPC, EKS, RDS, and IAM with least-privilege
  - Implemented GitHub OIDC to enable keyless deploys to AWS, removing long-lived secrets
  - Multi-env (dev/stage/prod) via Terragrunt with drift detection and plan/apply gates
  - Added policy-as-code checks (OPA/Conftest) and security scanning (tfsec, Trivy) in CI
- **Outcomes:** Repeatable environment provisioning, faster onboarding, and improved security posture

### 2) Kubernetes Platform Engineering (Cloud-Native Orchestration)
- **Stack:** Kubernetes (EKS/AKS), Helm, ArgoCD, NGINX Ingress, Cert-Manager, Prometheus/Grafana
- **Highlights:**
  - Designed a GitOps workflow: app and infra Helm charts deployed via ArgoCD
  - Implemented autoscaling (HPA), canary rollouts, and blue/green strategies with health checks
  - Centralized logging/metrics with EFK/Loki and actionable alerts via Alertmanager
  - Secured cluster with RBAC, network policies, and image/signature scanning policies
- **Outcomes:** Reliable release cadence, faster recovery, and strong observability

### 3) Python Automation Toolkit for Cloud Ops
- **Stack:** Python, Boto3/Azure SDK, Click/Typer, GitHub Actions, Make
- **Highlights:** CLI tools for rotating credentials, cleaning unused resources, tagging policies, and cost reports. Packaged and published internally; tested with pytest and tox.

## 🏗️ Project Structure

```
clement-portfolio/
├── 📁 app/                 # Next.js 13+ App Router
│   ├── 📁 components/      # Reusable UI components
│   ├── 📁 sections/        # Page sections (Hero, About, Skills, etc.)
│   ├── 📄 layout.tsx       # Root layout with metadata
│   ├── 📄 page.tsx         # Home page
│   └── 📄 globals.css      # Global Tailwind CSS
├── 📁 public/              # Static assets
├── 📄 package.json         # Dependencies & scripts
├── 📄 next.config.js       # Next.js configuration
├── 📄 tailwind.config.js   # Tailwind CSS configuration
├── 📄 vercel.json          # Vercel deployment config
└── 📄 README.md            # This file
```

## 🚦 Getting Started

### Prerequisites
- **Node.js** >= 18.17.0
- **npm** >= 9.0.0

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Clementvsc/clement-portfolio.git
   cd clement-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript check
```

## 🎨 Design Features

- **🌓 Dark/Light Mode:** Class-based theme switching
- **📱 Responsive Design:** Mobile-first approach with Tailwind CSS
- **🎭 Smooth Animations:** Custom keyframes and transitions
- **🎯 Performance Optimized:** Next.js 13+ with static export
- **🔒 Security Headers:** Comprehensive security configuration
- **🚀 SEO Optimized:** Meta tags, structured data, and sitemap
- **⚡ Fast Loading:** Image optimization and caching strategies

## 🌈 Color Palette

The design uses a professional DevOps/Cloud theme with custom colors:

- **Primary:** Blue shades (representing cloud and reliability)
- **Secondary:** Gray tones (for professional aesthetics)
- **Accent:** Green highlights (for success states and CTAs)
- **Warning:** Amber tones (for attention and highlights)

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel:**
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Clementvsc/clement-portfolio)

2. **Or via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Static Export (Alternative)

```bash
npm run build  # Generates static files in 'out' directory
```

## 📚 Tech Stack

- **⚛️ Next.js 13+** - React framework with App Router
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **📘 TypeScript** - Type-safe JavaScript
- **🎭 Framer Motion** - Animation library
- **🎨 Lucide React** - Beautiful icons
- **🔧 ESLint & Prettier** - Code quality and formatting
- **🚀 Vercel** - Deployment and hosting

## 🎯 Current Objectives

- **Career Focus:** DevOps/Platform Engineering, Cloud Engineering, Cloud Security (DevSecOps), SRE
- **Skill Development:** Advanced Terraform patterns, Crossplane, ArgoCD/Flux GitOps, OPA/Policies, FinOps
- **Collaboration:** Open-source contributions, platform tooling, IaC modules, documentation excellence

## 📞 Connect with Me

- 🌍 **Location:** Toronto, Ontario, Canada
- 💼 **Status:** Available for Full-Time — Open to Remote/Hybrid/On-Site
- 💼 **LinkedIn:** [sahaya-clement](https://www.linkedin.com/in/sahaya-clement/)
- 🌐 **Portfolio:** [clementvsc.github.io](https://clementvsc.github.io/)
- 📧 **Email:** Available on LinkedIn

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐️ **If this resonates with you, feel free to star this repo or connect with me!**

*Built with ❤️ by Sahaya Clement Vincent Martin - DevOps Engineer*
