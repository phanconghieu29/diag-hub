import React, { useState } from 'react';
import styles from '../styles/ComfirmationForm.module.css';

function ConfirmationForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        phone: '',
        email: '',
        occupation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className={styles.confirmationForm} onSubmit={handleSubmit}>
            <h2 className={styles.formHeader}>Biểu mẫu xác nhận</h2>
            <div className={styles.formGroup}>
                <label htmlFor="name">Họ và tên:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="dob">Ngày tháng năm sinh:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone">Số điện thoại:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="occupation">Nghề nghiệp:</label>
                <select
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                >
                    <option value="">Chọn nghề nghiệp</option>
                    <option value="Học sinh">Học sinh</option>
                    <option value="Sinh viên">Sinh viên</option>
                    <option value="Phụ huynh">Phụ huynh</option>
                </select>
            </div>
            <button type="submit" className={styles.submitButton}>Xác nhận</button>
        </form>
    );
}

export default ConfirmationForm;
