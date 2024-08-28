import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/UserInfoForm.module.css";

function UserInfoForm({ setUser }) {
    const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // setUser({ name, phone });
        setUser({ name });
        navigate("/quiz");
    };

    return (
        <div className={styles.userInfoFormContainer}>
            <h2 className={styles.userInfoHeader}>BÀI TRẮC NGHIỆM DIAG HUB</h2>
            <form onSubmit={handleSubmit} className={styles.userInfoForm}>
                <p className={styles.userInfoFormTitle}>
                    CHÀO MỪNG BẠN ĐẾN VỚI BÀI TRẮC NGHIỆM DIAG HUB
                </p>
                <p>
                    Bạn có tò mò <strong>mình là ai</strong> trong 16 nhóm tính
                    cách
                </p>
                <p>
                    Hãy là chính mình và thành thật trả lời các câu hỏi dưới đây
                    trong 5s đầu tiên nhé!
                </p>
                <p>
                    Chỉ chọn 1 đáp án và không bấm reload lại trang trong quá
                    trình trả lời
                </p>
                <p>Bạn đã sẵn sàng chưa? - Sẵn sàng</p>
                <p>
                    Bước 1: Nhập họ và tên ở phần bên dưới <br /> Bước 2: Nhẫn
                    nút "LÀM NGAY"
                </p>
                <div className={styles.userInfoFormCenter}>
                    <label className={styles.userInfoLabel}>Họ và tên</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={styles.userInfoInput}
                        placeholder="Nhập họ và tên"
                    />
                    {/* <label className={styles.userInfoLabel}>
                        Số điện thoại:
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className={styles.userInfoInput}
                        />
                    </label> */}
                    <button
                        type="submit"
                        className={styles.userInfoButton}
                    >
                        LÀM NGAY
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserInfoForm;
