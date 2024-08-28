import React from 'react';
import styles from '../styles/Notification.module.css';

function Notification({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.notificationOverlay}>
            <div className={styles.notificationContent}>
                <h3>Thông báo</h3>
                <p>Vui lòng trả lời tất cả các câu hỏi trước khi nộp bài.</p>
                <button onClick={onClose}>Đóng</button>
            </div>
        </div>
    );
}

export default Notification;
