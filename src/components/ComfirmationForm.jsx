// import React, { useState } from "react";
// import styles from "../styles/ComfirmationForm.module.css";

// function ConfirmationForm({ onSubmit }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         dob: "",
//         phone: "",
//         email: "",
//         occupation: "",
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });

//         // Xóa lỗi khi có sự thay đổi
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             [name]: "",
//         }));
//     };

//     const validate = () => {
//         let errors = {};

//         if (!formData.name.trim()) {
//             errors.name = "Họ và tên không được để trống";
//         }

//         if (!formData.dob) {
//             errors.dob = "Ngày tháng năm sinh không được để trống";
//         }

//         if (!formData.phone.trim()) {
//             errors.phone = "Số điện thoại không được để trống";
//         } else if (!/^[0-9]{10}$/.test(formData.phone)) {
//             errors.phone =
//                 "Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số";
//         }

//         if (!formData.email.trim()) {
//             errors.email = "Email không được để trống";
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             errors.email = "Email không hợp lệ";
//         }

//         if (!formData.occupation) {
//             errors.occupation = "Vui lòng chọn nghề nghiệp";
//         }

//         return errors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//         } else {
//             setErrors({});
//             onSubmit(formData);
//         }
//     };

//     return (
//         <form className={styles.confirmationForm} onSubmit={handleSubmit}>
//             <h2 className={styles.formHeader}>Biểu mẫu xác nhận</h2>
//             <div className={styles.formGroup}>
//                 <label htmlFor="name">Họ và tên:</label>
//                 {errors.name && <p className={styles.error}>{errors.name}</p>}
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     // required
//                 />
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor="dob">Ngày tháng năm sinh:</label>
//                 {errors.dob && <p className={styles.error}>{errors.dob}</p>}
//                 <input
//                     type="date"
//                     id="dob"
//                     name="dob"
//                     value={formData.dob}
//                     onChange={handleChange}
//                     // required
//                 />
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor="phone">Số điện thoại:</label>
//                 {errors.phone && <p className={styles.error}>{errors.phone}</p>}
//                 <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     // required
//                 />
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor="email">Email:</label>
//                 {errors.email && <p className={styles.error}>{errors.email}</p>}
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     // required
//                 />
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor="occupation">Nghề nghiệp:</label>
//                 {errors.occupation && (
//                     <p className={styles.error}>{errors.occupation}</p>
//                 )}
//                 <select
//                     id="occupation"
//                     name="occupation"
//                     value={formData.occupation}
//                     onChange={handleChange}
//                     // required
//                 >
//                     <option value="">Chọn nghề nghiệp</option>
//                     <option value="Học sinh">Học sinh</option>
//                     <option value="Sinh viên">Sinh viên</option>
//                     <option value="Phụ huynh">Phụ huynh</option>
//                 </select>
//             </div>
//             <button type="submit" className={styles.submitButton}>
//                 Xác nhận
//             </button>
//         </form>
//     );
// }

// export default ConfirmationForm;

import React, { useState } from "react";
import styles from "../styles/ComfirmationForm.module.css";

function ConfirmationForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        phone: "",
        email: "",
        occupation: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Xóa lỗi khi có sự thay đổi
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const validate = () => {
        let errors = {};

        if (!formData.name.trim()) {
            errors.name = "Họ và tên không được để trống";
        }

        if (!formData.dob) {
            errors.dob = "Ngày tháng năm sinh không được để trống";
        }

        if (!formData.phone.trim()) {
            errors.phone = "Số điện thoại không được để trống";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            errors.phone =
                "Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số";
        }

        if (!formData.email.trim()) {
            errors.email = "Email không được để trống";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Email không hợp lệ";
        }

        if (!formData.occupation) {
            errors.occupation = "Vui lòng chọn nghề nghiệp";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            onSubmit(formData).finally(() => {
                setIsSubmitting(false);
            });
        }
    };

    return (
        <form className={styles.confirmationForm} onSubmit={handleSubmit}>
            <h2 className={styles.formHeader}>Biểu mẫu xác nhận</h2>
            <div className={styles.formGroup}>
                <label htmlFor="name">Họ và tên:</label>
                {errors.name && <p className={styles.error}>{errors.name}</p>}
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="dob">Ngày tháng năm sinh:</label>
                {errors.dob && <p className={styles.error}>{errors.dob}</p>}
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    // required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone">Số điện thoại:</label>
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    // required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    // required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="occupation">Nghề nghiệp:</label>
                {errors.occupation && (
                    <p className={styles.error}>{errors.occupation}</p>
                )}
                <select
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    // required
                >
                    <option value="">Chọn nghề nghiệp</option>
                    <option value="Học sinh">Học sinh</option>
                    <option value="Sinh viên">Sinh viên</option>
                    <option value="Phụ huynh">Phụ huynh</option>
                </select>
            </div>
            <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Đang gửi..." : "Xác nhận"}
            </button>
        </form>
    );
}

export default ConfirmationForm;
