# Student Result Management System

A simple React application to manage student data (Name, Section, Marks, Grade). This project uses **JSON Server** as a backend and **Fetch API** for CRUD operations.

## Features
- **View Students**: Display a list of all students.
- **Add Student**: Create a new student record.
- **Edit Student**: Update existing student details.
- **Delete Student**: Remove a student from the database.
- **View Details**: See detailed information about a specific student.
- **Manual Data Fetching**: Data is loaded only when requested (e.g., clicking "Load Students"), as per project requirements (no `useEffect` for fetching).

## Tech Stack
- **Frontend**: React (Vite)
- **Backend**: JSON Server (Mock REST API)
- **Styling**: CSS

## Folder Structure
```
student-result-app/
│
├── db.json              # JSON Server database
├── src/
│   ├── components/
│   │   ├── StudentList.jsx    # Shows list of students
│   │   ├── StudentForm.jsx    # Add/Edit form
│   │   └── StudentDetails.jsx # Detailed view
│   ├── services/
│   │   └── studentService.js  # API calls (fetch)
│   ├── App.jsx          # Main component & state management
│   └── index.css        # Styles
├── package.json         # Dependencies & scripts
└── README.md            # Project documentation
```

## Setup & Installation

1. **Navigate to the project directory:**
   ```bash
   cd student-result-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

This application requires two servers running simultaneously: **JSON Server** (backend) and **Vite** (frontend).

1. **Start the JSON Server:**
   Open a terminal and run:
   ```bash
   npm run server
   ```
   *Runs on http://localhost:3000/students*

2. **Start the React Application:**
   Open a **new** terminal window/tab and run:
   ```bash
   npm run dev
   ```
   *Runs on http://localhost:5173*

## How to Use
1. **Load Data**: The list is empty initially. Click the **"Load Students"** button to fetch data from the server.
2. **Add Student**: Click "Add Student", fill in the details, and click "Save". You will see an alert confirming success. **Click "Load Students" again** to see the new entry.
3. **Edit Student**: Click "Edit" on any row, modify details, and save. Refresh the list by clicking "Load Students".
4. **Delete Student**: Click "Delete" to remove a student. Refresh the list to see the change.
