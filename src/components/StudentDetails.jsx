import React from 'react';

const StudentDetails = ({ student, onBack }) => {
    if (!student) return null;

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.5rem' }}>Student Profile</h2>
                    <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        backgroundColor: student.grade === 'A' ? '#dcfce7' : student.grade === 'F' ? '#fee2e2' : '#f3f4f6',
                        color: student.grade === 'A' ? '#166534' : student.grade === 'F' ? '#991b1b' : '#374151'
                    }}>
                        Grade {student.grade}
                    </span>
                </div>

                <div className="details-grid">
                    <div className="detail-item">
                        <label>Student ID</label>
                        <span>#{student.id}</span>
                    </div>
                    <div className="detail-item">
                        <label>Full Name</label>
                        <span>{student.name}</span>
                    </div>
                    <div className="detail-item">
                        <label>Section</label>
                        <span>{student.section}</span>
                    </div>
                    <div className="detail-item">
                        <label>Marks Obtained</label>
                        <span>{student.marks} / 100</span>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={onBack} className="btn secondary">Back to List</button>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
