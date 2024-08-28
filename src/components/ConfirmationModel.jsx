import React from 'react';
import styles from '../styles/ConfirmationModal.module.css';

function ConfirmationModal({ isOpen, onClose, onConfirm, userName }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2 className={styles.modalHeader}>Xác nhận câu trả lời</h2>
                <p className={styles.modalText}>
                    Chào <strong>{userName}</strong>, bạn đã hoàn tất 20 câu hỏi.
                </p>
                <p className={styles.modalText}>
                    Nhấn "Xác nhận" để tiếp tục hoặc "Đóng" để kiểm tra lại. Cảm ơn <strong>{userName}</strong>
                </p>
                <div className={styles.modalActions}>
                    <button className={styles.modalButton} onClick={onConfirm}>Xác nhận</button>
                    <button className={`${styles.modalButton} ${styles.cancel}`} onClick={onClose}>Đóng</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
