# Howsee Project Documentation

This document outlines the user flow and role capabilities for the Howsee platform.

## 1. User Flow

The platform follows a role-based navigation system to ensure a tailored experience for buyers, sellers, and administrators.

### Step 1: Entry & Discovery
- **Landing Page**: Unauthenticated users arrive at a high-conversion landing page showcasing the platform's value proposition.
- **Guest Browsing**: Users can browse the property catalog without an account to see available listings.

### Step 2: Authentication
- **Sign Up / Sign In**: Access via the top navigation.
- **Role Selection**: During registration or login, users select one of three roles:
  - **User (Buyer)**
  - **Constructor (Seller)**
  - **Admin**
- **Persistence**: Authentication state and roles are stored locally to maintain the session.

### Step 3: Role-Based Redirection
Once authenticated, the system automatically redirects users to their respective "home base":
- **Buyers** are kept on the main consumer website (Home Screen).
- **Sellers** are sent to the **Seller Dashboard Overview**.
- **Admins** are sent to the **Admin Dashboard Overview**.

### Step 4: Core Workflows
- **Consumer Workflow**: Search properties -> Filter results -> View details -> Save Favorites.
- **Seller Workflow**: Dashboard Overview -> Upload Property (Wizard) -> Manage Listings -> Manage Billing.
- **Admin Workflow**: Dashboard Analytics -> User Management -> Property Moderation -> System Settings.

---

## 2. Role Abilities & Permissions

### 👤 User (Buyer/Consumer)
The primary customer of the platform.
- **Property Access**: Browse all approved listings.
- **Advanced Filtering**: Use the compact filter system to find properties by type, price, etc.
- **Favorites**: Save preferred properties for later viewing (Heart icon).
- **Profile Management**: Update personal info, view public profile, and manage account settings.

### 🏗️ Constructor (Seller)
Professional users who list properties on the platform.
- **Dashboard Access**: Access the dedicated Seller Dashboard layout.
- **Property Management**:
  - List new properties using a multi-step upload wizard.
  - View and manage existing listings.
- **Analytics**: Track views and engagement for their own listings.
- **Subscription & Billing**:
  - Manage plans and payment methods.
  - **Premium Billing Experience**: Use the interactive 3D credit card animation for added security and ease of use.
- **Support**: Access direct contact and support pages.

### 🛡️ Admin
Platform operators with global oversight.
- **Admin Dashboard**: Full access to the administrative control panel.
- **User Management**: 
  - View list of all platform users.
  - Filter users by role or status.
  - Manage account statuses (Enable/Disable).
- **Property Moderation**:
  - Review all "Pending" listings from sellers.
  - **Approve/Reject** listings to maintain platform quality.
- **Global Analytics**: Monitor total revenue, platform traffic, and user growth trends.
- **Platform Settings**: Configure global variables like site name, support email, and security protocols.
