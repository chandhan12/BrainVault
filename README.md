# BrainVault

**Your Digital Brain for Everything Important**

BrainVault is a full-stack web application built to help users store, organize, and access their important links, tweets, and documents all in one place. Never lose valuable information again! Share your "second brain" with others effortlessly through unique sharable links.

---

![hero](https://github.com/chandhan12/BrainVault/blob/main/Images/Screenshot%202024-12-22%20010608.png)
Features
![features](https://github.com/chandhan12/BrainVault/blob/main/Images/Screenshot%202024-12-22%20010628.png)
Login
![login](https://github.com/chandhan12/BrainVault/blob/main/Images/Screenshot%202024-12-22%20010759.png)
Dashboard
![dashborad](https://github.com/chandhan12/BrainVault/blob/main/Images/Screenshot%202024-12-22%20014508.png)
![dashboard](https://github.com/chandhan12/BrainVault/blob/main/Images/Screenshot%202024-12-22%20015109.png)

## **Features**

- **Store Important Links:**
  - Save YouTube video links, Twitter links, documents, and other links with ease.
  - Add relevant tags to categorize and quickly find your links.

- **Dashboard Display:**
  - View all your saved content in one place.
  - Sidebar filters for quick navigation: filter by YouTube, Twitter, Documents, or Links.

- **Share Your Brain:**
  - Generate a unique sharable link for your collection.
  - Allow others to access your BrainVault through the shared link.

- **Responsive Design:**
  - A clean, user-friendly interface designed with Tailwind CSS.

---

## **Tech Stack**

- **Frontend:** React, TypeScript, Tailwind CSS, React Router Dom
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Validation:** Zod

---

## **How It Works**

### **1. User Content Management**
- Users can add content via a form with the following fields:
  - **Title**: The name of the content
  - **Link**: The URL to the resource
  - **Type**: Content type (YouTube, Twitter, Document, Link)
  - **Tags**: Keywords associated with the link

### **2. Dashboard Overview**
- All content is displayed in a central dashboard.
- Sidebar navigation allows filtering by content type for quick access.

### **3. Share Functionality**
- Users can share their BrainVault by generating a unique link.
- Visitors with the link can view the shared content without the ability to edit.

---

## **Getting Started**

### **Prerequisites**
- Node.js
- MongoDB

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brainvault.git
   cd brainvault
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` folder with the following:
   ```env
   JWT_SECRET=''
   MONGO_URI=your_mongodb_connection_string
   ```

4. Run the project:
   ```bash
   # Start the backend server
   cd backend
   npm run dev

   # Start the frontend development server
   cd ../frontend
   npm start
   ```

5. Open the application:
   Navigate to `http://localhost:5173` in your browser.

---


### **Caption:**
"Your Digital Brain for Everything Important - Store, organize, and access all your important links, tweets, and documents in one place. Never lose valuable information again."

