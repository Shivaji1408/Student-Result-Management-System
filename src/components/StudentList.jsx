import React from 'react';

const StudentList = ({ students, onLoad, onAdd, onEdit, onDelete, onView }) => {
    return (
        <div className="student-list-container">
            <div className="header-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.25rem' }}>All Students</h2>
                <div className="actions" style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={onLoad} className="btn primary">Load Students</button>
                    <button onClick={onAdd} className="btn success">Add Student</button>
                </div>
            </div>

            {students.length === 0 ? (
                <div className="card empty-state">
                    <p>No students loaded yet.</p>
                    <button onClick={onLoad} className="btn primary">Load Students</button>
                </div>
            ) : (
                <div className="table-container">
                    <table className="student-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Section</th>
                                <th>Marks</th>
                                <th>Grade</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.section}</td>
                                    <td>{student.marks}</td>
                                    <td>
                                        <span style={{
                                            padding: '0.25rem 0.5rem',
                                            borderRadius: '9999px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            backgroundColor: student.grade === 'A' ? '#dcfce7' : student.grade === 'F' ? '#fee2e2' : '#f3f4f6',
                                            color: student.grade === 'A' ? '#166534' : student.grade === 'F' ? '#991b1b' : '#374151'
                                        }}>
                                            {student.grade}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button onClick={() => onView(student)} className="btn info">View</button>
                                            <button onClick={() => onEdit(student)} className="btn warning">Edit</button>
                                            <button onClick={() => onDelete(student.id)} className="btn danger">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default StudentList;
