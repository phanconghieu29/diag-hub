// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import questions from '../data/questions';
// import styles from '../styles/Quiz.module.css';
// import ConfirmationModal from '../components/ConfirmationModel';

// function Quiz({ user }) {
//     const [answers, setAnswers] = useState({});
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleAnswerChange = (questionId, answer) => {
//         setAnswers({ ...answers, [questionId]: answer });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsModalOpen(true);
//     };

//     const handleConfirm = async () => {
//         setIsModalOpen(false);

//         const data = {
//             name: user.name,
//             answers: JSON.stringify(answers),
//         };

//         try {
//             const res = await fetch(
//                 "https://sheet.best/api/sheets/ba77695e-57ca-4473-a8d6-73dbf958f8fb",
//                 {
//                     method: "POST",
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(data),
//                 }
//             );
//             const responseData = await res.json();
//             console.log(responseData);
//             if (res.ok) {
//                 navigate('/thank-you');
//             } else {
//                 console.error('Error response:', responseData);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className={styles.quizFormContainer}>
//             <h2 className={styles.quizHeader}>BÀI TRẮC NGHIỆM DIAG HUB</h2>
//             <form onSubmit={handleSubmit} className={styles.quizForm}>
//                 {questions.map((question, index) => (
//                     <div key={question.id} className={styles.quizQuestionContainer}>
//                         <span className={styles.questionNumber}>{index + 1}</span>
//                         <div>
//                             <p className={styles.quizQuestionText}>{question.questionText}</p>
//                             {question.options.map((option) => (
//                                 <div key={option} className={styles.quizOptionContainer}>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name={`question-${question.id}`}
//                                             value={option}
//                                             checked={answers[question.id] === option}
//                                             onChange={() => handleAnswerChange(question.id, option)}
//                                             className={styles.quizRadioInput}
//                                         />
//                                         {option}
//                                     </label>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//                 <button type="submit" className={styles.quizSubmitButton}>Nộp bài</button>
//             </form>
//             <ConfirmationModal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 onConfirm={handleConfirm}
//                 userName={user.name}
//             />
//         </div>
//     );
// }

// export default Quiz;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import styles from '../styles/Quiz.module.css';
import ConfirmationModal from './ConfirmationModel';
import ConfirmationForm from './ComfirmationForm';

function Quiz({ user }) {
    const [answers, setAnswers] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmationFormOpen, setIsConfirmationFormOpen] = useState(false);
    const navigate = useNavigate();

    const handleAnswerChange = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleConfirm = () => {
        setIsModalOpen(false);
        setIsConfirmationFormOpen(true);
    };

    const handleFormSubmit = async (formData) => {
        const data = {
            name: formData.name,
            dob: formData.dob,
            phone: formData.phone,
            email: formData.email,
            occupation: formData.occupation,
            answers: JSON.stringify(answers),
        };

        try {
            const res = await fetch(
                "https://sheet.best/api/sheets/ba77695e-57ca-4473-a8d6-73dbf958f8fb",
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                }
            );
            const responseData = await res.json();
            console.log(responseData);
            if (res.ok) {
                navigate('/thank-you');
            } else {
                console.error('Error response:', responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.quizFormContainer}>
            {!isConfirmationFormOpen ? (
                <>
                    <h2 className={styles.quizHeader}>BÀI TRẮC NGHIỆM DIAG HUB</h2>
                    <form onSubmit={handleSubmit} className={styles.quizForm}>
                        {questions.map((question, index) => (
                            <div key={question.id} className={styles.quizQuestionContainer}>
                                <span className={styles.questionNumber}>{index + 1}</span>
                                <div>
                                    <p className={styles.quizQuestionText}>{question.questionText}</p>
                                    {question.options.map((option) => (
                                        <div key={option} className={styles.quizOptionContainer}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    value={option}
                                                    checked={answers[question.id] === option}
                                                    onChange={() => handleAnswerChange(question.id, option)}
                                                    className={styles.quizRadioInput}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button type="submit" className={styles.quizSubmitButton}>Nộp bài</button>
                    </form>
                    <ConfirmationModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onConfirm={handleConfirm}
                        userName={user.name}
                    />
                </>
            ) : (
                <ConfirmationForm onSubmit={handleFormSubmit} />
            )}
        </div>
    );
}

export default Quiz;
