import { useState, useEffect } from "react";

export default function PracticalExp({ formId, isSubmitted }) {
    const [practicalExpInfo, setPracticalExpInfo] = useState({
        company: "",
        jobTitle: "",
        jobDescription: "",
        startDate: "",
        endDate: "",
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            setIsEditing(false);
        }
    }, [isSubmitted]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPracticalExpInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            {isEditing ? (
                <div className="input-container">
                    <form
                        className="general-form"
                        id={`practical-exp-form-${formId}`}
                        onSubmit={(e) => {
                            e.preventDefault();
                            setIsEditing(false);
                        }}
                    >
                        <div className="input-box">
                            <label htmlFor={`name-${formId}`}>Company</label>
                            <input
                                type="text"
                                id={`name-${formId}`}
                                name="company"
                                value={practicalExpInfo.company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor={`study-${formId}`}>Job Title</label>
                            <input
                                type="text"
                                id={`study-${formId}`}
                                name="jobTitle"
                                value={practicalExpInfo.jobTitle}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor={`job-description-${formId}`}>Job Description</label>
                            <textarea
                                id={`job-description-${formId}`}
                                name="jobDescription"
                                value={practicalExpInfo.jobDescription}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="input-box">
                            <label htmlFor={`start-of-study-${formId}`}>Start Date</label>
                            <input
                                type="date"
                                id={`start-of-study-${formId}`}
                                name="startDate"
                                value={practicalExpInfo.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor={`end-of-study-${formId}`}>End Date</label>
                            <input
                                type="date"
                                id={`end-of-study-${formId}`}
                                name="endDate"
                                value={practicalExpInfo.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" form={`practical-exp-form-${formId}`}>
                            Submit
                        </button>
                    </form>
                </div>
            ) : (
                <div className="info-container">
                    <p>Company: {practicalExpInfo.company}</p>
                    <p>Job Title: {practicalExpInfo.jobTitle}</p>
                    <p>Job Description: {practicalExpInfo.jobDescription}</p>
                    <p>Start Date: {practicalExpInfo.startDate}</p>
                    <p>End Date: {practicalExpInfo.endDate}</p>
                    {!isSubmitted && (
                        <button type="button" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                    )}
                </div>
            )}
        </>
    );
}