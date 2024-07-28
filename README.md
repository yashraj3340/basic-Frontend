AssetX: Enhanced Asset Management for Municipal Corporations
Overview
AssetX is a comprehensive asset management solution designed to address the challenges faced by municipal corporations in tracking, maintaining, and optimizing their assets. It consists of two main components: CityAlert, a citizen-facing app for reporting issues, and IndoreAssetX, a web portal for asset management focusing on roadways and streetlights.

Table of Contents
Project Title and Overview
Problem Statement and Background
Objectives and Solution Overview
CityAlert App
IndoreAssetX Web Portal
Data Integration, Analytics, and Community Engagement
Future Enhancements
Installation and Setup
Usage
Contributing
License
Project Title and Overview
Title: Enhanced Asset Management for Municipal Corporations
Subtitle: Indore Municipal Corporation
Team Name: BIG BANG

Problem Statement and Background
Problem Statement
Municipal corporations manage a diverse range of assets. Efficient management is crucial for public safety, optimizing maintenance costs, and improving service quality.

Background
Indore Municipal Corporation faces challenges in tracking, maintaining, and optimizing assets. Current systems are often fragmented and lack real-time tracking capabilities.

Objectives and Solution Overview
Objectives
Asset Tracking and Inventory Management
Predictive Maintenance
Resource Allocation
Data Integration and Analytics
Community Engagement
Solution Overview
CityAlert: A complaint-based app for citizens to report issues.
IndoreAssetX: A web portal for asset management focusing on roadways and streetlights.
CityAlert App
Features
Citizens can shoot and upload videos of issues.
Videos are routed to the corresponding department.
Public visibility of reported issues.
Technology Stack
Developed using React Native and Appwrite (full-stack).
User Interface
Screenshots of the app:

Home Screen
Report Issue Screen
Issue Tracking Screen
IndoreAssetX Web Portal
Features
Overview of different departments (currently roadways and streetlights).
Predictive Maintenance:
Algorithms to predict maintenance/replacement needs.
Resource Allocation:
Tools for budget planning and expenditure tracking.
Decision-support systems for prioritizing asset needs.
Technology Stack
Overview of the technologies used to build the portal.

User Interface
Screenshots of the portal:

Dashboard
Asset Management Screen
Maintenance Scheduling Screen
Data Integration, Analytics, and Community Engagement
Data Integration
Centralized platform integrating data from sensors, maintenance logs, and financial systems.

Analytics
Insights into asset performance and utilization.
Visualization tools for easy data interpretation.
Community Engagement
Features for citizens to report issues.
Portal/App for tracking the status of reported issues.
Future Enhancements
Integration of more departments and assets.
Advanced analytics and reporting features.
Installation and Setup
Prerequisites
Node.js
MongoDB
Python (for ML models)
Steps
Clone the repository.
Install dependencies:
bash
Copy code
npm install
Set up MongoDB and import initial data.
Start the application:
bash
Copy code
npm start
Usage
Running the App
Navigate to http://localhost:3000 to access the CityAlert app.
Use the web portal at http://localhost:3001 for asset management.
API Endpoints
/api/v1/predict: Predictive maintenance endpoint.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
