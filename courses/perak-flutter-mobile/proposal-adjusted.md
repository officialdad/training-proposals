# Revised Training Proposal

## Cross-Platform Mobile App Development with Flutter

**Flutter Fundamentals, REST API Integration, Authentication, CRUD & Release Build Preparation**

- **Prepared for:** Pejabat SUK Negeri Perak / Bahagian Digital
- **Duration:** 4 Days
- **Total Training Hours:** 28 Hours
- **Training Mode:** Instructor-led, hands-on, project-based
- **Target Participants:** ICT Officers, PHP/Web Developers, System Analysts, Application Developers
- **Maximum Participants:** 12 pax

---

## 1. Course Overview

This programme is designed to introduce participants to professional cross-platform mobile application development using Flutter. Participants will learn how to build Android and iOS mobile applications from a single codebase.

The course will cover Flutter fundamentals, Dart programming, UI development, navigation, REST API consumption, authentication flow, CRUD operations, session handling, and mobile release build preparation.

The training will be conducted using a trainer-prepared mini project, trainer-provided REST API, and controlled sample dataset. This ensures a smooth learning experience without depending on the client's internal system, production API, staging server, credentials, VPN, or backend readiness.

Participants will complete a government-themed mini application during the training.

## 2. Revised Scope Positioning

This training focuses on teaching participants how to build a Flutter mobile application and consume REST APIs using a controlled training environment.

The training does not include integration with PSUK Perak's actual existing PHP system, internal backend, production database, staging server, or real government API.

Participants will still learn the technical concepts needed for real-world mobile integration, but the hands-on exercises will use trainer-controlled APIs and sample data prepared specifically for learning purposes.

This approach ensures:

- consistent learning environment for all participants
- reduced technical risk during training
- no dependency on internal government systems
- no exposure of confidential data
- faster troubleshooting
- better focus on Flutter and mobile development concepts

## 3. Course Objectives

At the end of the programme, participants will be able to:

1. Understand the fundamentals of Dart programming for Flutter development.
2. Build Flutter user interfaces using widgets, layouts, forms, and navigation.
3. Structure a Flutter project in a clean and maintainable way.
4. Consume REST APIs from a Flutter mobile application.
5. Parse JSON responses into Dart model classes.
6. Implement login and session flow using a trainer-provided authentication API.
7. Build CRUD features including create, read, update, and delete records.
8. Handle loading states, empty states, error states, and API failures.
9. Prepare Android release builds such as APK and AAB.
10. Prepare iOS release builds up to archive and TestFlight upload.
11. Understand the app handover point before public store approval.

## 4. Mini Project

**Government Service Mini App**

The hands-on project will be a sample government-themed mobile application prepared by the trainer.

Suggested project:

**Government Asset / Request Management App**

Core features:

- Login screen
- Dashboard screen
- List of records
- Record detail screen
- Add new record
- Edit existing record
- Delete record
- Profile/session screen
- Logout
- REST API integration
- Error handling
- Android release build
- iOS archive/TestFlight walkthrough

The purpose of this mini project is to simulate a realistic government mobile application workflow without connecting to the client's actual internal system.

## 5. Training Methodology

The training will use a hands-on, project-based approach.

The method includes:

- instructor-led explanation
- live coding demonstration
- guided hands-on lab exercises
- trainer-prepared source code
- trainer-prepared API and dataset
- debugging and troubleshooting guidance
- mini project completion
- final build preparation
- Q&A and technical discussion

The course will prioritize practical implementation. Participants will progressively build the application from Day 1 until Day 4.

## 6. Detailed Course Outline

### Day 1: Dart, Flutter Foundations & UI Development

**Module 1: Flutter Development Environment**

- Flutter SDK overview
- Android Studio / VS Code setup
- Flutter doctor
- Emulator and physical device setup
- Project structure
- Running the first Flutter app

**Module 2: Dart Essentials for Web/PHP Developers**

- Variables and data types
- Functions
- Classes and objects
- Null safety
- Lists and maps
- Async / await
- Futures
- Basic error handling

**Module 3: Flutter Widget Fundamentals**

- StatelessWidget
- StatefulWidget
- Widget tree
- Build method
- Hot reload and hot restart
- MaterialApp and Scaffold
- Common UI widgets

**Module 4: Layout and UI Building**

- Container
- Row and Column
- Padding and margin
- Expanded and Flexible
- ListView
- Card-based UI
- Buttons
- TextField and forms

**Module 5: Navigation and App Structure**

- Screen navigation
- Passing data between screens
- App folder structure
- Separating UI, model, service, and helper files

**Day 1 Hands-On Lab**

Participants will build:

- app shell
- login UI
- dashboard UI
- record list UI
- navigation between screens

### Day 2: REST API, JSON, Models & Data Display

**Module 1: REST API Fundamentals**

- What is REST API
- HTTP methods: GET, POST, PUT/PATCH, DELETE
- Request and response flow
- Headers
- Status codes
- JSON format
- API testing using Postman or browser tools

**Module 2: Calling APIs from Flutter**

- Using HTTP client package
- Creating an API service class
- Setting base URL
- Making GET requests
- Handling success and failure responses
- Timeout and exception handling

**Module 3: JSON to Dart Model**

- Creating model classes
- fromJson and toJson
- Mapping API response to UI
- Handling nullable fields
- Handling list responses

**Module 4: Displaying API Data**

- Loading data from API
- Displaying list of records
- Detail screen from API data
- Loading indicator
- Empty state
- Error state
- Pull-to-refresh

**Day 2 Hands-On Lab**

Participants will build:

- API service layer
- Dart model class
- record list from API
- record detail screen
- loading and error state handling

### Day 3: Authentication, Secure Session & CRUD

**Module 1: Mobile Authentication Concepts**

- Login flow
- Token-based authentication concept
- Difference between web session and mobile token
- Protecting authenticated screens
- Logout flow

**Module 2: Implementing Login**

- Login API call
- Sending username/email and password
- Receiving token/session response
- Handling invalid login
- Navigating after successful login

**Module 3: Session Handling**

- Storing login state
- Secure storage concept
- Keeping user logged in
- Checking session during app startup
- Logout and session clearing

**Module 4: Create and Update Records**

- Building create form
- Form validation
- Sending POST request
- Building edit form
- Sending PUT/PATCH request
- Showing success and error messages

**Module 5: Delete Records**

- Delete confirmation dialog
- Sending DELETE request
- Refreshing list after delete
- Handling delete failure

**Day 3 Hands-On Lab**

Participants will complete:

- login integration
- session handling
- create record
- edit record
- delete record
- refresh list after CRUD actions

### Day 4: App Polish, Android Release Build & iOS TestFlight Preparation

**Module 1: App Finalization**

- App name
- App icon
- Splash screen
- Version number
- Package name
- Bundle identifier
- Environment configuration

**Module 2: Android Release Preparation**

- Debug vs release build
- Keystore overview
- Android signing concept
- Building APK
- Building AAB
- Common Android build issues
- Internal testing upload overview

**Module 3: iOS Release Preparation**

- iOS signing overview
- Apple Developer account requirement
- Bundle identifier
- Xcode archive process
- Flutter build IPA overview
- Uploading to App Store Connect
- TestFlight upload walkthrough

**Module 4: Final Project Review**

- Review completed mini app
- Code walkthrough
- Common improvements
- Production-readiness checklist
- Q&A session

**Day 4 Hands-On Lab**

Participants will:

- finalize app configuration
- generate Android release build
- understand AAB/APK output
- walk through iOS archive and TestFlight upload process
- review the completed mini app flow

## 7. Deployment Scope

The deployment module will cover app build preparation and testing distribution readiness.

**Included for Android**

- Generate release APK
- Generate Android App Bundle / AAB
- Explain keystore and signing concept
- Explain Play Console internal testing upload flow

**Included for iOS**

- Explain Apple Developer account requirement
- Configure bundle identifier
- Archive iOS app using Xcode
- Upload build to App Store Connect
- Distribute via TestFlight

**Not Included**

The following items are excluded from this training scope:

- Google Play production approval process
- Apple App Store public approval process
- App rejection troubleshooting
- Privacy policy preparation
- Google Play Data Safety form completion
- Apple privacy nutrition labels
- Legal or compliance consultation
- Production rollout strategy
- Government app compliance review
- Backend development
- Modification of client's existing API
- Integration with PSUK Perak's real production/staging system
- Debugging client-owned backend issues

The training will bring the app up to release build and testing distribution readiness. Final public store approval remains under the organization's internal governance and platform review process.

## 8. Tools and Software Required

Participants should prepare:

- laptop with administrator access
- Windows/macOS/Linux for Flutter development
- macOS device required for iOS archive/TestFlight hands-on
- Flutter SDK
- Dart SDK
- Android Studio
- Visual Studio Code
- Xcode for macOS users
- stable internet connection
- Android emulator or physical Android device
- optional physical iOS device
- Apple Developer account if hands-on TestFlight upload is required
- Google Play Console access if internal testing upload demonstration is required

The trainer will provide:

- training slides
- starter Flutter project
- completed reference Flutter project
- sample REST API
- sample dataset
- lab instructions
- final checklist

## 9. Assessment Method

Assessment will be based on:

- participation in hands-on labs
- completion of mini project modules
- ability to run the Flutter app
- ability to call REST APIs
- ability to complete login and CRUD flow
- final project demonstration
- trainer observation and Q&A

Participants who attend and complete the hands-on activities will receive a Certificate of Completion.

## 10. Deliverables

The trainer will deliver:

1. 4-day instructor-led training
2. Training materials/slides
3. Starter Flutter project
4. Completed reference Flutter project
5. Trainer-provided REST API/sample backend
6. Hands-on lab guide
7. Android release build walkthrough
8. iOS TestFlight upload walkthrough
9. Certificate of Completion template
10. Limited post-training clarification for training-related questions

## 11. Final Recommendation

Proceed with a controlled trainer-led Flutter training programme using trainer-prepared materials and APIs.

Do not include real PSUK system integration in the base scope.

Do not include Google Play or Apple App Store public approval in the base scope.

Limit deployment coverage to:

- Android APK/AAB release build generation
- Google Play internal testing upload overview
- iOS archive
- TestFlight upload

This provides a safer, more realistic, and more valuable 4-day training experience for participants.
