# Design: Kubernetes Intermediate (3-Day) Training Proposal

**Date:** 2026-04-14  
**Status:** Approved  
**Output file:** `devops-k8s/original.md`

---

## Context

New 3-day training proposal for intermediate Kubernetes. Continuation course — participants are expected to have completed the DevOps Fundamentals with Docker course (or equivalent Docker experience). Follows the same HRDCorp SBL proposal structure (sections 01–11) as existing proposals in this repo.

---

## Key Decisions

| Decision | Choice | Reason |
|---|---|---|
| Structure | Progressive Depth (Day 1 Core → Day 2 Config/Storage/RBAC → Day 3 Helm/Scaling/Observability) | Cleanest for HRDCorp outcome mapping, consistent with existing course format |
| Competency level | Internal — "Intermediate Kubernetes Practitioner" | Flexible, no cert dependency |
| Lab environment | Minikube with addons (`ingress`, `metrics-server`) | No cloud accounts needed, offline-capable, consistent with prerequisite course |
| Registry integration | GHCR images from prerequisite Docker course | Creates concrete bridge between courses; participants deploy their own image |
| Helm | Usage only (install/upgrade charts from repos, values overrides) | Chart authoring deferred to advanced course |
| Brand | CLIENT TBC | Will be adjusted post-proposal |

---

## Course Structure

- **Duration:** 3 Days · 24 Hours
- **Format:** Instructor-led, minimum 70% hands-on
- **Prerequisite:** DevOps Fundamentals with Docker (or equivalent)

### Day 1: Kubernetes Core Concepts & Workloads (8 Hours)

| Hour | Topic |
|---|---|
| 1 | Recap & Context: Docker recap, limitations at scale, why orchestration, where K8s fits |
| 2 | Docker vs K8s: side-by-side comparison, K8s architecture (control plane, nodes, etcd, API server) |
| 3 | Minikube Setup + kubectl Basics: install/verify, core commands, contexts, namespaces |
| 4 | Workloads: Pods, ReplicaSets, Deployments, DaemonSets, StatefulSets |
| 5 | Services & Networking: ClusterIP, NodePort, LoadBalancer (`minikube tunnel`), DNS |
| 6 | Rolling Updates & Rollbacks: deployment strategies, `kubectl rollout` |
| 7 | GHCR Integration + YAML Manifests: `imagePullSecrets`, deploy own image, writing/applying manifests |
| 8 | Lab: Deploy own GHCR image as Deployment + Service, rolling update, inspect and debug |

### Day 2: Configuration, Storage & Access Control (8 Hours)

| Hour | Topic |
|---|---|
| 1 | Day 1 recap + ConfigMaps & Secrets (combined — config injection patterns) |
| 2 | Lab: Inject config and secrets into own running app |
| 3 | Persistent Volumes, PVCs & StorageClasses |
| 4 | Ingress: controller setup, path/host routing, TLS basics |
| 5 | Lab: Stateful app with PVC + exposed via Ingress |
| 6 | RBAC: ServiceAccounts, Roles, ClusterRoles, RoleBindings |
| 7 | Resource Requests, Limits, LimitRange, ResourceQuota |
| 8 | Lab: Full stack — Ingress + Secrets + RBAC + Resource limits |

### Day 3: Helm, Scaling & Observability (8 Hours)

| Hour | Topic |
|---|---|
| 1 | Day 2 recap + Jobs & CronJobs |
| 2 | Helm intro (usage only): charts, repos, install/upgrade/rollback |
| 3 | Helm values overrides: deploy public chart with own GHCR image via values |
| 4 | Probes: liveness, readiness, startup — config & debugging |
| 5 | HPA & Autoscaling: metrics-server, HPA config, observe scale-out |
| 6 | Lab: Deploy via Helm + probes + HPA |
| 7 | Observability: kubectl top, logs, events; Prometheus/Grafana overview demo |
| 8 | Final Lab + Wrap Up: full app deployment, recap, Q&A, feedback |

---

## Sections 01–11 Summary

**01 Overview:** Intermediate K8s programme building on Docker/DevOps fundamentals. 80% hands-on. Participants deploy, manage, and scale apps on K8s using industry-standard tooling.

**02 Target Audience:** Same designations as prerequisite course. Prerequisite: completion of DevOps Fundamentals with Docker or equivalent.

**03 Entry Requirements:**
- Completion of DevOps Fundamentals with Docker (or equivalent)
- Comfortable with Docker CLI and Dockerfiles
- Familiarity with command line (Linux/Terminal)
- Laptop with admin access

**04 Course Objectives** (participants will be able to):
1. Understand Kubernetes architecture and core components
2. Deploy and manage containerised applications on Kubernetes
3. Configure networking, storage, and access control in a cluster
4. Package and deploy applications using Helm
5. Apply scaling, health-checking, and observability practices
6. Operate as an Intermediate Kubernetes Practitioner in a real-world environment

**05 Learning Outcomes** (participants will be able to):
- Explain Kubernetes architecture and the role of each component
- Deploy, update, and rollback workloads using kubectl and manifests
- Configure services, Ingress, ConfigMaps, Secrets, and Persistent Volumes
- Implement RBAC for cluster access control
- Install and use Helm charts for application deployment
- Configure autoscaling (HPA) and resource limits
- Monitor application health using probes and basic observability tools

**08 Assessment:** Continuous lab exercises + trainer observation + final hands-on project (deploy complete app from own GHCR registry with Ingress, RBAC, probes, and HPA)

**09 Certification:** Certificate of Completion — Intermediate Kubernetes Practitioner

**10 Tools Required:** Laptop with admin access, Docker + GitHub account (from prerequisite), Minikube, kubectl, Helm, Terminal

**11 Expected Outcomes & Impact:**

| Outcome Area | Expected Impact |
|---|---|
| Kubernetes Proficiency | Confident deploying and managing workloads on K8s |
| Operational Readiness | Ability to configure networking, storage, and access control |
| Packaging & Delivery | Foundation for application packaging with Helm |
| Scalability | Ability to implement autoscaling and resource management |
| Observability | Awareness of monitoring and health-checking practices |
| Career Progression | Prepared to progress into advanced K8s / cloud-native topics |

---

## Minikube Addons Required

```bash
minikube addons enable ingress
minikube addons enable metrics-server
```

LoadBalancer note: use `minikube tunnel` for LoadBalancer type services. Trainer notes should flag "in production this would be a cloud LB."

---

## What's Deferred (Future Advanced Course)

- Helm chart authoring
- GitOps (ArgoCD / Flux)
- Network Policies deep dive
- Multi-cluster / federation
- Security hardening (OPA/Gatekeeper, Pod Security Standards)
