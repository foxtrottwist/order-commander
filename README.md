# Order Commander

A full-stack inventory management application that serves as the administrative backend for mobile inventory counting workflows. Built to replace tedious manual processes in grocery retail purchasing with streamlined digital administration.

## Purpose

When grocery store management introduced a new purchasing process requiring daily manual inventory counts and complex cross-referencing with sales data, I needed a system to manage product catalogs and serve data to the mobile counting application. This administrative interface became the foundation for transforming clipboard-based workflows into efficient digital processes.

## Tech Stack

<img src="https://raw.githubusercontent.com/foxtrottwist/foxtrottwist/main/assets/brider-codes.png" alt="Bridge Builder Fox mascot coding" width="600" height="400" align="right">

*Bridger is here to help make inventory administration more accessible and user-friendly.*

**Frontend & Core:**
- React 16.0 - Component-based administrative interface
- Redux - State management for complex inventory data workflows
- React Router DOM - Navigation between inventory management sections
- Styled Components - CSS-in-JS for maintainable administrative styling

**Backend & Data:**
- Node.js 9.3 - Server runtime optimized for API performance
- Express.js 4.16 - RESTful API serving inventory data to the mobile application
- MongoDB with Mongoose 4.12 - Document storage for flexible product schemas
- JWT Authentication - Secure multi-user access and API endpoints

**Development & Tools:**
- ESLint with Airbnb config - Code quality standards for maintainable systems
- Concurrently - Parallel development server management
- Nodemon - Automatic server restarts during development

## Key Features

**Product Catalog Administration**
- Create and organize inventory lists by department or category
- Add, edit, and remove products with flexible attributes
- Manage product data consumed by Take Inventory mobile app

**Multi-User Management**
- Secure user registration and authentication system
- Role-based access to inventory lists and administrative functions
- Team collaboration for department-based inventory management

**API Integration**
- RESTful endpoints serving product data to the mobile counting application
- Seamless integration with Take Inventory React Native companion app
- Data export capabilities for Excel-based purchasing calculations

**Business Workflow Support**
- Designed to complement existing Excel workbooks and purchasing systems
- Maintains data formats compatible with established business processes
- Administrative backend supporting floor-based counting operations

## Getting Started

**Prerequisites:**
- Node.js 9.3.0
- MongoDB instance
- npm 5.6.0

**Installation:**
```bash
# Install server dependencies
npm install

# Install client dependencies
npm install --prefix client

# Set up environment variables
# Create .env file with MongoDB connection and JWT secret

# Run development environment
npm run dev
```

**Development Commands:**
- `npm run server` - Start backend server with auto-reload
- `npm run client` - Start React development server  
- `npm run dev` - Run both frontend and backend concurrently

## Project Context

This administrative system works alongside the Take Inventory mobile app to solve a specific workplace problem: transforming manual inventory processes that consumed hours daily into automated workflows. Together, these applications reduced inventory counting and purchase calculation time by 50%.

The web interface handles product catalog management and user administration, while the mobile app consumes this data for floor-based counting. The system earned recognition from store management and regional leadership, with other locations requesting similar implementations.

**System Integration:** Serves as the data backbone for Take Inventory mobile app, providing product lists via API and supporting Excel export workflows for purchase calculations.

## Companion Application

This application works in conjunction with **[Take Inventory](https://github.com/foxtrottwist/take-inventory)**, a React Native mobile app that consumes the API endpoints for floor-based inventory counting. The mobile app handles the physical counting process, while Order Commander manages the administrative setup and user access.

**Performance Achievement:** Combined system reduced daily inventory management time from 4+ hours to under 2 hours through digital automation and mobile-first counting workflows.