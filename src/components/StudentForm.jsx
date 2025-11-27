import React, { useState } from 'react';

const StudentForm = ({ initialData, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState(
        initialData || {
            name: '',
            section: '',
            marks: '',
            grade: ''
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.section || !formData.marks || !formData.grade) {
            alert('Please fill all fields');
            return;
        }
        onSubmit(formData);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="card">
                <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    {initialData ? 'Edit Student' : 'Add New Student'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. John Doe"
                        />
                    </div>
                    <div className="form-group">
                        <label>Section</label>
                        <input
                            type="text"
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            placeholder="e.g. Class X - A"
                        />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>Marks</label>
                            <input
                                type="number"
                                name="marks"
                                value={formData.marks}
                                onChange={handleChange}
                                placeholder="0-100"
                            />
                        </div>
                        <div className="form-group">
                            <label>Grade</label>
                            <input
                                type="text"
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                placeholder="e.g. A, B, C"
                            />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="button" onClick={onCancel} className="btn secondary">Cancel</button>
                        <button type="submit" className="btn success">
                            {initialData ? 'Update Student' : 'Save Student'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentForm;
