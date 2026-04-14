# Kubernetes Intermediate Training Proposal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `devops-k8s/original.md` — a complete HRDCorp SBL-format 3-day Kubernetes intermediate training proposal following the structure of existing proposals in this repo.

**Architecture:** Single markdown file structured as sections 01–11, mirroring the pattern from `devops-docker-k8s/original.md`. Content derived from the approved design spec at `docs/superpowers/specs/2026-04-14-kubernetes-intermediate-design.md`.

**Tech Stack:** Markdown, same section format as existing proposals.

**Spec:** `docs/superpowers/specs/2026-04-14-kubernetes-intermediate-design.md`
**Reference:** `devops-docker-k8s/original.md` (structure template)

---

### Task 1: Create file with header and sections 01–03

**Files:**
- Create: `devops-k8s/original.md`

- [ ] **Step 1: Create the file with header and sections 01–03**

Write the following content to `devops-k8s/original.md`:

```markdown
# Kubernetes for Modern Application Deployment

**TRAINING PROPOSAL** — CLIENT TBC

- **Duration:** 3 Days · 24 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** April 2026

---

## 01 Course Overview

This programme builds on the foundations of Docker and DevOps to provide participants with practical, hands-on experience in Kubernetes — the industry-standard platform for container orchestration. Participants will learn how to deploy, manage, configure, and scale containerised applications on a Kubernetes cluster using real-world practices.

The programme is designed as a direct continuation of the DevOps Fundamentals with Docker course. It assumes familiarity with Docker, container images, and GitHub, allowing the content to progress immediately into Kubernetes concepts without revisiting prior material.

Aligned with Industry 4.0 and cloud-native transformation, this programme equips participants with the intermediate Kubernetes skills required to operate confidently in modern infrastructure environments.

## 02 Target Audience

**By Designation**
- Software Developers
- Junior DevOps Engineers
- System Administrators
- IT Engineers
- Technical Leads
- Infrastructure & Operations Personnel

**By Industry**
- Technology & IT
- Financial Services
- Telecommunications
- E-commerce
- Government & GLCs
- Any organisation undergoing digital transformation

## 03 Entry Requirements

- Completion of DevOps Fundamentals with Docker (or equivalent Docker experience)
- Comfortable with Docker CLI and writing Dockerfiles
- Familiarity with command line (Linux/Terminal)
- Basic understanding of networking concepts
- Participants must bring a laptop with admin access
```

- [ ] **Step 2: Verify file created**

Run: `ls devops-k8s/original.md`
Expected: file exists

---

### Task 2: Add sections 04–05 (Objectives and Learning Outcomes)

**Files:**
- Modify: `devops-k8s/original.md`

- [ ] **Step 1: Append sections 04–05 to the file**

Append the following to `devops-k8s/original.md`:

```markdown

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Understand Kubernetes architecture and the role of its core components
2. Deploy and manage containerised applications on a Kubernetes cluster
3. Configure networking, storage, and access control in a cluster environment
4. Use Helm to install and manage application deployments
5. Apply scaling, health-checking, and observability practices
6. Operate as an Intermediate Kubernetes Practitioner in a real-world environment

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Explain Kubernetes architecture and the role of each component
- Deploy, update, and rollback workloads using kubectl and YAML manifests
- Configure Services, Ingress, ConfigMaps, Secrets, and Persistent Volumes
- Implement Role-Based Access Control (RBAC) for cluster access management
- Install and manage applications using Helm charts
- Configure Horizontal Pod Autoscaling (HPA) and resource limits
- Monitor application health using probes and basic observability tooling
- Deploy containerised images from GitHub Container Registry (GHCR) to Kubernetes
```

---

### Task 3: Add section 06 (Training Methodology)

**Files:**
- Modify: `devops-k8s/original.md`

- [ ] **Step 1: Append section 06**

Append the following to `devops-k8s/original.md`:

```markdown

## 06 Training Methodology

| Method | Description |
|---|---|
| **Instructor-Led Technical Sessions** | Expert-facilitated sessions with technical depth |
| **Hands-On Lab Exercises** | Minimum 70% practical application throughout |
| **Live Demonstrations** | Real-time walkthroughs of tools and deployments |
| **Real-World Deployment Scenarios** | Industry-relevant use cases for applied learning |
| **Guided Lab Environments** | Structured environments for safe hands-on practice |
| **Trainer Observation & Feedback** | Continuous feedback and technical validation |
```

---

### Task 4: Add section 07 — Day 1 outline

**Files:**
- Modify: `devops-k8s/original.md`

- [ ] **Step 1: Append Day 1 to section 07**

Append the following to `devops-k8s/original.md`:

```markdown

## 07 Course Outline

*3-day programme · 24 hours of intensive, hands-on learning*

### Day 1: Kubernetes Core Concepts & Workloads (8 Hours)

**Hour 1 — Recap & Context**
- Docker and containerisation recap
- Limitations of Docker at scale
- Why container orchestration is needed
- Where Kubernetes fits in the modern DevOps stack

**Hour 2 — Docker vs Kubernetes**
- Side-by-side comparison: `docker run` vs Pod, `docker-compose` vs Deployment
- Docker networking vs Kubernetes Services
- Kubernetes architecture overview: control plane, worker nodes, etcd, API server
- Key components: kube-scheduler, kube-controller-manager, kubelet

**Hour 3 — Minikube Setup & kubectl Basics**
- Installing and verifying Minikube
- Enabling required addons (`ingress`, `metrics-server`)
- Core kubectl commands: get, describe, apply, delete, logs, exec
- Working with contexts and namespaces

**Hour 4 — Workloads**
- Pods: the smallest deployable unit
- ReplicaSets: ensuring availability
- Deployments: managing rollouts
- DaemonSets and StatefulSets: when and why

**Hour 5 — Services & Networking**
- ClusterIP, NodePort, and LoadBalancer service types
- Using `minikube tunnel` for LoadBalancer simulation
- Kubernetes DNS and internal service discovery

**Hour 6 — Rolling Updates & Rollbacks**
- Deployment update strategies
- `kubectl rollout status`, `kubectl rollout history`
- Rolling back to a previous revision

**Hour 7 — GHCR Integration & YAML Manifests**
- Using images from GitHub Container Registry (GHCR) in Kubernetes
- Creating and using `imagePullSecrets` for private registries
- Writing and applying YAML manifests
- `kubectl apply --dry-run=client` and `kubectl diff`

**Hour 8 — Hands-On Lab: Deploy Own Image**
- Deploy own GHCR image as a Kubernetes Deployment
- Expose the application via a Service
- Perform a rolling update and rollback
- Inspect and debug running containers
```

---

### Task 5: Add section 07 — Day 2 outline

**Files:**
- Modify: `devops-k8s/original.md`

- [ ] **Step 1: Append Day 2 to section 07**

Append the following to `devops-k8s/original.md`:

```markdown

### Day 2: Configuration, Storage & Access Control (8 Hours)

**Hour 1 — Day 1 Recap & ConfigMaps and Secrets**
- Review of Day 1 key concepts
- Creating and consuming ConfigMaps
- Types of Secrets and when to use each
- Mounting config as environment variables and volumes

**Hour 2 — Hands-On Lab: Config & Secrets**
- Inject ConfigMaps and Secrets into own running application
- Verify configuration at runtime
- Update config without restarting the container

**Hour 3 — Persistent Volumes & Storage**
- Kubernetes storage model: PersistentVolumes and PersistentVolumeClaims
- StorageClasses and dynamic provisioning
- Volume access modes

**Hour 4 — Ingress**
- What is an Ingress controller
- Path-based and host-based routing rules
- TLS termination basics
- Configuring Ingress with the Minikube ingress addon

**Hour 5 — Hands-On Lab: Stateful Application**
- Deploy a web application with a database backend
- Attach a PersistentVolumeClaim for database storage
- Expose the application via Ingress

**Hour 6 — Role-Based Access Control (RBAC)**
- ServiceAccounts, Roles, ClusterRoles
- RoleBindings and ClusterRoleBindings
- Principle of least privilege in Kubernetes

**Hour 7 — Resource Management**
- Resource requests and limits per container
- LimitRange: setting defaults per namespace
- ResourceQuota: enforcing namespace-level limits

**Hour 8 — Hands-On Lab: Full Application Stack**
- Deploy a complete application with Ingress, Secrets, RBAC, and resource limits
- Validate access controls and resource enforcement
- Stopping, restarting, and cleaning up resources
```

---

### Task 6: Add section 07 — Day 3 outline

**Files:**
- Modify: `devops-k8s/original.md`

- [ ] **Step 1: Append Day 3 to section 07**

Append the following to `devops-k8s/original.md`:

```markdown

### Day 3: Helm, Scaling & Observability (8 Hours)

**Hour 1 — Day 2 Recap & Jobs and CronJobs**
- Review of Day 2 key concepts
- Jobs: run-to-completion workloads
- CronJobs: scheduled batch tasks
- Monitoring job execution and handling failures

**Hour 2 — Introduction to Helm**
- What is Helm and why it is used
- Charts, repositories, releases
- `helm install`, `helm upgrade`, `helm rollback`, `helm uninstall`
- Searching and adding chart repositories

**Hour 3 — Using Helm Charts**
- Deploying applications from public Helm repositories
- Overriding default values with `--set` and `--values`
- Deploying own GHCR image using an existing chart with values customisation
- Inspecting deployed releases

**Hour 4 — Probes**
- Liveness probes: restart unhealthy containers
- Readiness probes: control traffic routing
- Startup probes: handle slow-starting containers
- Configuring HTTP, TCP, and exec probe types

**Hour 5 — Horizontal Pod Autoscaling (HPA)**
- How HPA works with the metrics-server
- Configuring CPU and memory-based autoscaling
- Observing scale-out behaviour under load
- Setting minimum and maximum replicas

**Hour 6 — Hands-On Lab: Helm + Probes + HPA**
- Deploy an application using a Helm chart with custom values
- Configure liveness and readiness probes
- Enable HPA and simulate load to trigger scaling
- Observe and verify autoscaling behaviour

**Hour 7 — Observability**
- `kubectl top nodes` and `kubectl top pods`
- Reading and filtering container logs
- Kubernetes events: what they tell you and when to check them
- Overview of Prometheus and Grafana for cluster monitoring (live demo)

**Hour 8 — Final Hands-On Lab & Wrap Up**
- Full application deployment: own GHCR image with Ingress, Secrets, RBAC, probes, and HPA
- Recap of key concepts across all 3 days
- Final Q&A and open discussion
- Feedback and closing
```

---

### Task 7: Add sections 08–11 and commit

**Files:**
- Modify: `devops-k8s/original.md`

- [ ] **Step 1: Append sections 08–11**

Append the following to `devops-k8s/original.md`:

```markdown

## 08 Assessment Method

- Continuous lab exercises with trainer observation and technical validation
- Daily recap checks to reinforce prior learning
- Final hands-on project: deploy a complete application from own GHCR registry with Ingress, RBAC, probes, and HPA

## 09 Certification

Participants will receive a Certificate of Completion — *Intermediate Kubernetes Practitioner* — upon successful attendance and participation.

## 10 Tools & Software Required

- Laptop with admin access
- Docker installed (from prerequisite course)
- GitHub account with GHCR image from prerequisite course
- Minikube installed
- kubectl installed
- Helm installed
- Terminal / command-line interface

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Kubernetes Proficiency** | Confident deploying and managing workloads on Kubernetes |
| **Operational Readiness** | Ability to configure networking, storage, and access control in a cluster |
| **Packaging & Delivery** | Foundation for application packaging and deployment using Helm |
| **Scalability** | Ability to implement autoscaling and enforce resource management |
| **Observability** | Awareness of monitoring and health-checking practices for production readiness |
| **Career Progression** | Prepared to progress into advanced Kubernetes and cloud-native topics |
```

- [ ] **Step 2: Verify full file structure**

Run: `grep "^## " devops-k8s/original.md`

Expected output:
```
## 01 Course Overview
## 02 Target Audience
## 03 Entry Requirements
## 04 Course Objectives
## 05 Learning Outcomes
## 06 Training Methodology
## 07 Course Outline
## 08 Assessment Method
## 09 Certification
## 10 Tools & Software Required
## 11 Expected Outcomes & Impact
```

- [ ] **Step 3: Commit**

```bash
git add devops-k8s/original.md
git commit -m "feat: add kubernetes intermediate 3-day training proposal"
```

---

## Self-Review

**Spec coverage:**
- ✅ 3-day structure (Progressive Depth) — covered across Tasks 4–6
- ✅ Continuation course framing — section 01 and 03 entry requirements
- ✅ CLIENT TBC branding — header
- ✅ HRDCorp sections 01–11 — all present
- ✅ GHCR integration in Day 1 — Hour 7 + Lab
- ✅ Docker vs K8s comparison — Day 1 Hours 1–2
- ✅ Minikube lab environment — Hour 3 + addons noted
- ✅ Helm usage-only (no chart authoring) — Day 3 Hours 2–3
- ✅ Jobs & CronJobs — Day 3 Hour 1
- ✅ Probes — Day 3 Hour 4
- ✅ HPA — Day 3 Hour 5
- ✅ Observability — Day 3 Hour 7
- ✅ RBAC — Day 2 Hour 6
- ✅ PVC + Storage — Day 2 Hour 3
- ✅ Ingress — Day 2 Hour 4
- ✅ ConfigMaps + Secrets — Day 2 Hour 1
- ✅ Assessment + Certification — sections 08–09
- ✅ Expected Outcomes & Impact table — section 11

**Placeholder scan:** None found.

**Type consistency:** N/A (markdown document, no code types).
