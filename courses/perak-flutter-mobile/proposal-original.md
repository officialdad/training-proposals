# Cross-Platform Mobile App Development with Flutter: REST API Integration, Authentication & App Store Deployment

**TRAINING PROPOSAL** — Pejabat SUK Negeri Perak — Bahagian Digital (BO)

- **Duration:** 4 Days · 28 Hours
- **Classification:** Digital Skills
- **Prepared for Review:** July 2026

---

## 01 Course Overview

This programme gives the officers and ICT personnel of Bahagian Digital a complete, hands-on path from web development to mobile: building real Android and iOS applications with Flutter from a single codebase, integrated with the agency's existing PHP systems over REST APIs. It is designed for an audience that already builds and maintains PHP web applications but is new to mobile and to Dart — the programme bridges from familiar concepts (requests, responses, JSON, CRUD) to the mobile client side, then moves quickly into building, integrating, securing, and shipping a working app.

The course is built around one realistic, recurring scenario: a **government service mini-app** — secure login, a list of records pulled live from an existing PHP REST API, and full create, read, update, and delete against that backend. Every concept (widgets, layouts, navigation, state, networking, authentication, secure storage) is taught in service of getting that app working end to end, then preparing it for release.

The programme closes the loop most courses skip: taking the finished app through signed release builds and the real submission steps for both the **Google Play Store** and the **Apple App Store**. By the end, participants will have built an authenticated CRUD application driven by REST APIs and walked it through publication on both platforms.

## 02 Target Audience

**By Designation**
- Application Developers & Software Engineers (web/PHP background)
- ICT Officers (Pegawai Teknologi Maklumat) and Assistant ICT Officers
- System Analysts and Technical Leads delivering government applications
- Developers responsible for digital services and internal systems
- Web developers moving into mobile application delivery

**By Industry**
- Government & Public Sector (state and federal agencies)
- GLCs and statutory bodies
- Technology & IT services
- Any organisation extending existing web systems to mobile

## 03 Entry Requirements

- **No prior Flutter, Dart, or mobile development experience required** — the programme builds Dart and Flutter from first principles
- Working knowledge of programming and web development (the audience builds and maintains PHP web applications); comfort with variables, functions, loops, and classes is assumed
- Familiarity with REST/HTTP concepts and JSON is an advantage (reinforced during the programme)
- Comfortable editing files, using a code editor, and running commands in a terminal
- **For iOS builds and App Store publishing:** a Mac running macOS with Xcode and an **Apple Developer Program** account (USD 99/year) is required; participants on Windows-only laptops can complete all Android work and follow the iOS publishing portion as a guided walkthrough
- Minimum 8 GB RAM (16 GB recommended) and at least 15 GB free disk space (Android SDK, emulators, and Flutter tooling)
- Stable internet connection for downloading the SDK, packages, and emulator images

## 04 Course Objectives

At the end of this programme, participants will be able to:

1. Set up a complete Flutter development environment and run apps on Android and iOS
2. Write Dart and build Flutter user interfaces using widgets, layouts, navigation, and forms
3. Manage application state and structure a multi-screen Flutter application
4. Integrate a Flutter app with an existing PHP backend over REST APIs, parsing JSON into typed models
5. Implement token-based authentication and secure session handling against the existing system
6. Build a complete CRUD workflow (create, read, update, delete) driven by REST API calls
7. Produce signed release builds and publish a mobile app to the Google Play Store and Apple App Store

## 05 Learning Outcomes

Upon completion of the programme, participants will be able to:

- Install and verify a Flutter toolchain and run an app on an emulator, simulator, and physical device
- Write Dart confidently, mapping its syntax and async model onto existing PHP knowledge
- Compose Flutter UIs from widgets — layouts, lists, forms, and multi-screen navigation
- Manage state across a multi-screen app and structure a clean, maintainable project
- Call an existing PHP REST API from Flutter, parse JSON into typed models, and render live data
- Implement a token-based login, store the token securely, and protect authenticated screens
- Build a full create/read/update/delete flow driven entirely by REST API calls
- Produce signed Android and iOS release builds and submit them to the Google Play Store and Apple App Store

## 06 Training Methodology

| Method | Description |
|---|---|
| **Instructor-Led Technical Sessions** | Expert-facilitated sessions with technical depth |
| **Hands-On Lab Exercises** | Minimum 70% practical application throughout |
| **Live Demonstrations** | Real-time walkthroughs of tools and deployments |
| **Real-World Deployment Scenarios** | Industry-relevant use cases for applied learning |
| **Guided Lab Environments** | Structured environments for safe hands-on practice |
| **Trainer Observation & Feedback** | Continuous feedback and technical validation |

## 07 Course Outline

*4-day programme · 28 hours of intensive, hands-on learning*

### Day 1: Dart, Flutter Foundations & UI Building (7 Hours)

**Hour 1 — Environment Setup for Flutter**
- Installing the Flutter SDK, Dart, and Android Studio / VS Code
- Setting up an Android emulator and iOS simulator (Xcode on macOS)
- Verifying with `flutter doctor` and running the starter app
- Project anatomy: `pubspec.yaml`, `lib/`, and the Flutter CLI

**Hour 2 — Dart Essentials for PHP Developers**
- Dart syntax mapped from PHP: variables, types, functions, classes
- Null safety, `final`/`const`, and strong typing
- Asynchronous code with `Future`, `async`/`await`
- Collections, maps, and the pub.dev package ecosystem

**Hour 3 — How Flutter Works: Widgets & the Widget Tree**
- Everything is a widget: `StatelessWidget` vs `StatefulWidget`
- The `build` method and the widget tree
- Hot reload and hot restart for fast iteration
- `MaterialApp`, `Scaffold`, and the app skeleton

**Hour 4 — Building Layouts**
- Core widgets: Text, Image, Icon, Button
- Layout widgets: Container, Row, Column, Padding, Expanded
- Lists with `ListView` and `ListView.builder`
- Styling, themes, and responsive basics

**Hour 5 — Handling Input & Forms**
- `TextField`, `Form`, and `TextFormField`
- Form validation and controllers
- Buttons, gestures, and user feedback (SnackBar, dialogs)
- Capturing and reading user input

**Hour 6 — Navigation & App Structure**
- `Navigator`: push and pop between screens
- Named routes and passing data between screens
- Tabs, drawers, and bottom navigation
- Structuring a multi-screen app

**Hour 7 — Hands-On Lab: Build a Multi-Screen UI**
- Scaffold the multi-screen shell for the government mini-project
- Build a login screen and a record-list screen (static data)
- Wire navigation between screens
- Apply a consistent theme

### Day 2: State, REST API Integration & Reading Data (7 Hours)

**Hour 1 — Managing State in Flutter**
- `setState` and the `StatefulWidget` lifecycle
- Lifting state up and passing data down
- A simple state management approach (Provider)
- When to reach for state management

**Hour 2 — REST APIs from the Client Side**
- Recap: how your PHP backend exposes REST endpoints (GET/POST/PUT/DELETE)
- The `http` package: making requests from Flutter
- Request headers, query parameters, and JSON bodies
- Reading status codes and handling errors

**Hour 3 — Working with JSON & Models**
- Parsing JSON responses into Dart objects
- Building model classes with `fromJson` / `toJson`
- Mapping API fields to a typed model
- Organising an API service / data layer

**Hour 4 — Fetching & Displaying Data (Read)**
- Calling a GET endpoint and awaiting the response
- `FutureBuilder` to render asynchronous data
- Rendering a list of records from the API
- Loading, empty, and error states

**Hour 5 — Detail Views & Pull-to-Refresh**
- Fetching a single record by ID
- Passing data to a detail screen
- Pull-to-refresh and re-fetching
- Caching basics and avoiding redundant calls

**Hour 6 — Configuration, Environments & Networking Concerns**
- Base URLs and per-environment configuration (dev/staging/prod)
- Connecting to a local PHP backend from an emulator/device
- CORS, timeouts, and common networking pitfalls
- Centralising the API client

**Hour 7 — Hands-On Lab: Read Live Data from the REST API**
- Connect the app to the provided PHP REST API
- Fetch and display a real list of government records
- Build a detail screen for a selected record
- Handle loading and error states gracefully

### Day 3: Authentication & Full CRUD (7 Hours)

**Hour 1 — Authentication Concepts for Mobile**
- Token-based auth (JWT) vs PHP session cookies
- The login flow: credentials → token → authenticated requests
- Where authentication fits against your existing PHP backend
- Designing the login screen and flow

**Hour 2 — Implementing Login**
- Posting credentials to the auth endpoint
- Receiving and parsing the token
- Sending the token in the `Authorization` header
- Handling invalid credentials and errors

**Hour 3 — Secure Token Storage & Session**
- Persisting the token securely with `flutter_secure_storage`
- Keeping the user logged in across app launches
- Logout and clearing the session
- Protecting authenticated screens (auth guards)

**Hour 4 — Create & Update (CRUD: C + U)**
- Building a form to create a new record (POST)
- Editing an existing record (PUT/PATCH)
- Form validation before submission
- Optimistic UI and confirming server success

**Hour 5 — Delete & List Refresh (CRUD: D)**
- Deleting a record (DELETE) with confirmation
- Refreshing the list after create, update, and delete
- Handling partial failures and retries
- Keeping local and server state in sync

**Hour 6 — Robust Error Handling & UX Polish**
- Centralised error handling and user-friendly messages
- Handling expired tokens and re-authentication
- Loading indicators, disabled states, and feedback
- Input validation aligned with backend rules

**Hour 7 — Hands-On Lab: Full CRUD Government Mini-Project**
- Complete the authenticated CRUD flow end to end
- Create, read, update, and delete real records via the REST API
- Enforce login and protect authenticated screens
- Validate inputs and surface clear error messages

### Day 4: Device Features, Build & Publishing to App Stores (7 Hours)

**Hour 1 — App Identity, Icons & Splash**
- App name, package/bundle identifier, and versioning
- Launcher icons and splash screen
- Final theming and UI polish
- Preparing assets for release

**Hour 2 — Useful Device Capabilities**
- App permissions on Android and iOS
- Common plugins (image picker, local notifications) overview
- Reading device and platform information
- Keeping platform differences in mind

**Hour 3 — Preparing for Release: Android**
- Release versus debug builds
- App signing and the keystore
- Building an Android App Bundle (`flutter build appbundle`)
- Configuring `build.gradle` for release

**Hour 4 — Publishing to the Google Play Store**
- Google Play Console: listing, screenshots, and metadata
- Content rating, privacy policy, and data safety
- Uploading the App Bundle and the review process
- Internal testing tracks and staged rollout

**Hour 5 — Preparing for Release: iOS**
- Xcode signing, certificates, and provisioning profiles
- Bundle identifier and capabilities
- Building an iOS archive (`flutter build ipa`)
- Apple Developer Program requirements

**Hour 6 — Publishing to the Apple App Store**
- App Store Connect: listing, screenshots, and metadata
- TestFlight for beta distribution
- Submitting for App Review and common rejection reasons
- Privacy nutrition labels and compliance

**Hour 7 — Final Project: Ship the Government Mini-App**
- Produce signed release builds for Android and iOS
- Walk through the Play Store and App Store submission steps
- Prepare store listings and screenshots
- Present the completed app and deployment plan

## 08 Assessment Method

- Continuous lab exercises across all four days
- Trainer observation and technical validation
- Final hands-on project: an authenticated CRUD app integrated with a REST API and prepared for store submission

## 09 Certification

Participants will receive a Certificate of Completion upon successful attendance and participation.

## 10 Tools & Software Required

- Laptop with administrator access (Windows 10/11, macOS, or Linux) — **macOS required for iOS builds and App Store submission**
- Flutter SDK and Dart — **installed during Day 1**
- Android Studio (Android SDK, emulator, and platform tools) — **installed during Day 1**
- Visual Studio Code with the Flutter and Dart extensions
- Xcode (macOS only) for the iOS simulator, archives, and App Store steps
- A **Google Play Console** developer account (USD 25 one-time) for Android publishing
- An **Apple Developer Program** account (USD 99/year) for iOS publishing
- The agency's existing PHP REST API, or a provided sample PHP backend and dataset, for the integration and CRUD labs
- A physical Android and/or iOS device for on-device testing (optional but recommended)
- Stable internet access for downloading the SDK, packages, and emulator images

## 11 Expected Outcomes & Impact

| Outcome Area | Expected Impact |
|---|---|
| **Cross-Platform Development** | Build a single Flutter codebase that runs on both Android and iOS |
| **Backend Integration** | Connect mobile apps to the agency's existing PHP systems via REST APIs |
| **Authentication & Security** | Implement secure login and protect data with token-based authentication |
| **CRUD Applications** | Deliver complete create, read, update, and delete government service apps |
| **App Store Deployment** | Publish apps to the Google Play Store and the Apple App Store |
