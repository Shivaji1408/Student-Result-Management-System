import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getAllStudents, addStudent, updateStudent, deleteStudent } from './services/studentService';
import './index.css';

function App() {
    const [students, setStudents] = useState([]);
    const [currentView, setCurrentView] = useState('list'); // 'list', 'form', 'details'
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleLoadStudents = async () => {
        try {
            const data = await getAllStudents();
            setStudents(data);
        } catch (error) {
            console.error('Error loading students:', error);
            alert('Failed to load students. Make sure JSON Server is running.');
        }
    };

    const handleAddClick = () => {
        setSelectedStudent(null);
        setCurrentView('form');
    };

    const handleEditClick = (student) => {
        setSelectedStudent(student);
        setCurrentView('form');
    };

    const handleViewClick = (student) => {
        setSelectedStudent(student);
        setCurrentView('details');
    };

    const handleDeleteClick = async (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                await deleteStudent(id);
                const data = await getAllStudents();
                setStudents(data);
            } catch (error) {
                console.error('Error deleting student:', error);
                alert('Failed to delete student.');
            }
        }
    };

    const handleFormSubmit = async (formData) => {
        try {
            if (selectedStudent) {
                await updateStudent(selectedStudent.id, formData);
            } else {
                await addStudent(formData);
            }
            const data = await getAllStudents();
            setStudents(data);
            setCurrentView('list');
        } catch (error) {
            console.error('Error saving student:', error);
            alert('Failed to save student.');
        }
    };

    const handleCancel = () => {
        setCurrentView('list');
    };

    return (
        <div className="app-container">
            <header className="header">
                <h1>Student Results</h1>
                {currentView !== 'list' && (
                    <button onClick={handleCancel} className="btn secondary">
                        Back to List
                    </button>
                )}
            </header>

            <main>
                {currentView === 'list' && (
                    <StudentList
                        students={students}
                        onLoad={handleLoadStudents}
                        onAdd={handleAddClick}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteClick}
                        onView={handleViewClick}
                    />
                )}

                {currentView === 'form' && (
                    <StudentForm
                        initialData={selectedStudent}
                        onSubmit={handleFormSubmit}
                        onCancel={handleCancel}
                    />
                )}

                {currentView === 'details' && (
                    <StudentDetails
                        student={selectedStudent}
                        onBack={handleCancel}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
