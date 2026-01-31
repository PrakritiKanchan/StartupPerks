# StartupPerks - Startup Benefits Platform

This is a project for a Startup Benefits and Partnerships Platform. It’s designed to help early-stage startups, indie hackers, and small teams get access to premium SaaS tools at discounted or free rates.
Some deals are public, while others are restricted and require user verification.

# 🌐 End-to-End Application Flow:
- User registers and logs in.
- User can browse all available deals.
- Some deals are locked, requiring verification to access.
- User claims eligible deals.
- Claimed deals are shown in the user dashboard with status tracking (e.g., Pending, Approved).
- User can view details of each deal, including partner info, eligibility, and claim options.

# 🔐 Authentication & Authorization:
- JWT-based authentication is used for all protected routes.
- Users must register to claim locked deals.
- Only verified users can access restricted deals.
- Backend checks token validity on every request to secure APIs.

# ⚡ Claiming a Deal Flow:
1. User clicks on a deal card.
2. If unlocked, user can directly claim.
3. If locked, system checks verification status.
4. Upon successful claim, deal is added to the user dashboard.
5. Backend updates claim status (Pending → Approved).
6. Frontend shows feedback animation to confirm claim action.

# 🔗 Frontend & Backend Interaction:
**Frontend** (Next.js + TypeScript + Tailwind CSS)
Fetches deals from backend via REST APIs.
Shows animated transitions, hover effects, and loading skeletons.
Handles user login, registration, and claim actions.

**Backend** (Node.js + Express + MongoDB)
Provides APIs for user authentication, deal listing, deal details, and claiming.
Validates JWT tokens for secure actions.
Stores User, Deal, and Claim entities in MongoDB using Mongoose.

**Interaction Example**:
Frontend sends GET /deals → backend returns all deals.
Frontend sends POST /claim with JWT → backend validates and updates claim.
Frontend updates dashboard with animation and status.

# ⚠️ Known Limitations:
No payment integration for premium deals yet.
Limited search and filter options on deals page.
Some animations are basic due to time constraints.
Dashboard does not support bulk actions for claiming multiple deals.

# 🚀 Improvements for Production:
Add real-time notifications for deal updates.
Enhance animations and micro-interactions for better UX.
Implement role-based access for admins/partners.
Optimize backend queries for scalability with larger datasets.
Add unit and integration tests for frontend and backend.

# 🎨 UI & Performance Considerations:
Used Tailwind CSS for responsive layouts.
High-quality page transitions and hover states implemented.
Loading skeletons improve perceived performance.
Animations are subtle and enhance usability without overwhelming the user.

# 🛠️ Tech Stack:
**Frontend**:
Next.js (App Router)
TypeScript
Tailwind CSS

**Backend**:
Node.js + Express
MongoDB + Mongoose
REST APIs
JWT Authentication

# 📂 Project Structure:
```text
frontend/
 ├── app/
 │    ├── layout.tsx
 │    ├── page.tsx
 │    ├── deals/
 │    │    ├── DealCard.tsx
 │    │    ├── DealFilters.tsx
 │    │    └── DealDetails.tsx
 │    └── dashboard/
 │         └── Dashboard.tsx
backend/
 ├── models/
 │    ├── User.js
 │    ├── Deal.js
 │    └── Claim.js
 ├── routes/
 │    ├── auth.js
 │    ├── deals.js
 │    └── claims.js
 └── server.js
