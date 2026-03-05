import { useState, useEffect } from "react";

export default function Education({ formId, isSubmitted }) {
    const [educationInfo, setEducationInfo] = useState({
        schoolName: "",
        schoolStudy: "",
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

        setEducationInfo((prev) => ({
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
                        id={`education-form-${formId}`}
                        onSubmit={(e) => {
                            e.preventDefault();
                            setIsEditing(false);
                        }}
                    >
                        <div className="input-box">
                            <label htmlFor={`school-name-${formId}`}>School Name</label>
                            <input
                                type="text"
                                id={`school-name-${formId}`}
                                name="schoolName"
                                value={educationInfo.schoolName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor={`school-study-${formId}`}>Study</label>
                            <input
                                type="text"
                                id={`school-study-${formId}`}
                                name="schoolStudy"
                                value={educationInfo.schoolStudy}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor={`start-date-${formId}`}>Start Date</label>
                            <input
                                type="date"
                                id={`start-date-${formId}`}
                                name="startDate"
                                value={educationInfo.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor={`end-date-${formId}`}>End Date</label>
                            <input
                                type="date"
                                id={`end-date-${formId}`}
                                name="endDate"
                                value={educationInfo.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" form={`education-form-${formId}`}>
                            Submit
                        </button>
                    </form>
                </div>
            ) : (
                <div className="info-container">
                    <p>School Name: {educationInfo.schoolName}</p>
                    <p>Study: {educationInfo.schoolStudy}</p>
                    <p>Start Date: {educationInfo.startDate}</p>
                    <p>End Date: {educationInfo.endDate}</p>
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