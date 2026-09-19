# Dynamic Evacuation Decision Board (DEDB)

## 🚨 Overview

**Dynamic Evacuation Decision Board (DEDB)** is a smart emergency evacuation guidance concept designed to help people identify safer evacuation directions during emergency situations.

In conventional emergency systems, fixed exit signs may not be sufficient when a particular route becomes unsafe due to fire, smoke, crowding, structural damage, or other hazards. DEDB aims to provide **dynamic evacuation guidance** based on changing emergency conditions.

The project is developed as a **web-based prototype** to demonstrate how an intelligent evacuation decision system could work in real-world environments.

## 🎯 Problem Statement

During emergencies, people may not know which evacuation route is safe. Static signs always point toward the same exits, even when one of those routes becomes dangerous.

DEDB addresses this problem by proposing a system that can:

* Monitor emergency conditions.
* Identify potentially unsafe routes.
* Dynamically change evacuation directions.
* Guide people toward safer available exits.
* Continue operating during network or power-related issues through backup mechanisms.

## 💡 Proposed Solution

DEDB uses a dynamic decision-making approach for emergency evacuation.

The system can receive information from sensors placed around an environment. Based on the detected conditions, the system determines which evacuation direction should be displayed.

For example:

**Normal Condition**

`EXIT →`

If a fire or hazard blocks that route:

`← SAFE EXIT`

The direction displayed can therefore change according to the situation instead of remaining fixed.

## ⚙️ Working Concept

The proposed system consists of the following stages:

1. **Sensor/Input Collection**

   * Emergency conditions are detected using sensors.
   * Possible inputs include smoke, temperature, crowd density, or other environmental conditions.

2. **Condition Analysis**

   * The collected information is analyzed to identify potentially dangerous areas.

3. **Route Decision**

   * Available evacuation routes are evaluated.
   * Unsafe or blocked routes can be avoided.

4. **Dynamic Direction Update**

   * The recommended evacuation direction is updated according to the current situation.

5. **User Guidance**

   * Direction indicators provide clear instructions to people evacuating the area.

## 🖥️ Prototype

The current implementation is a **web prototype** created to demonstrate the concept and user interface of the Dynamic Evacuation Decision Board.

The prototype represents how emergency information and evacuation directions could be displayed to users.

### Possible Real-World Implementation

The concept can be extended using hardware such as:

* ESP32
* Smoke and temperature sensors
* Crowd-density sensors
* LED indicators
* LCD displays
* Servo-controlled direction signs
* Battery backup

These components are part of the proposed real-world implementation and are not all part of the current web prototype.

## 🏢 Possible Applications

DEDB can potentially be adapted for:

* 🏥 Hospitals
* 🏫 Schools and colleges
* 🛍️ Shopping malls
* 🚇 Metro stations
* 🏢 Office buildings
* 🏭 Industrial facilities
* 🏟️ Large public venues

## 🔑 Key Features

* Dynamic evacuation direction
* Emergency condition monitoring concept
* Safer-route identification
* Real-time decision-making concept
* Manual override capability
* Offline operation concept
* Battery backup concept
* Scalable for different environments
* Simple and easy-to-understand evacuation guidance

## 🏗️ System Architecture

```text
        Emergency Sensors
               ↓
       Data Collection Layer
               ↓
       Emergency Analysis
               ↓
       Route Decision System
               ↓
     Dynamic Direction Board
               ↓
        User Evacuation
```

## 🔮 Future Enhancements

Future versions of DEDB could include:

* AI-based route optimization
* Real-time crowd-density analysis
* IoT-based sensor integration
* Indoor mapping
* Mobile application integration
* Voice-based evacuation instructions
* Integration with building management systems
* Multi-floor evacuation planning
* Automated emergency alerts
* Historical emergency-data analysis

## 💰 Estimated Cost

### Prototype

Approximately **₹2,000–₹3,500**, depending on the hardware components used.

### Real-World Deployment

A basic deployment could be approximately **₹20,000–₹40,000 per zone**, depending on the number of sensors, displays, controllers, and installation requirements.

These are preliminary estimates and may vary depending on hardware specifications and deployment requirements.

## 📌 Project Status

**Current Status:** Web Prototype / Concept Demonstration

The current project demonstrates the DEDB concept through a web-based prototype. Hardware integration and real-world deployment are proposed as future development stages.

## 👩‍💻 Project Goal

The goal of DEDB is to make emergency evacuation guidance more **dynamic, adaptive, and understandable**, helping people make informed evacuation decisions when conditions change during an emergency.

---

### Project Keywords

`Emergency Evacuation` `Smart Safety` `IoT` `ESP32` `Emergency Management` `Dynamic Signage` `Route Guidance` `Smart Building` `Disaster Management` `Web Prototype`
