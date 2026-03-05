import Information from "./components/Information";
import Education from "./components/Education";
import PracticalExp from "./components/PracticalExp";
import { useState } from "react";

export default function App() {
  const [practicalExpIds, setPracticalExpIds] = useState([]);
  const [educationIds, setEducationIds] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function addMoreEducation() {
    setEducationIds((prev) => [...prev, Date.now()]);
  }

  function deleteEducation(id) {
    setEducationIds((prev) => prev.filter((itemId) => itemId !== id));
  }

  function addMoreExperience() {
    setPracticalExpIds((prev) => [...prev, Date.now()]);
  }

  function deleteExperience(id) {
    setPracticalExpIds((prev) => prev.filter((itemId) => itemId !== id));
  }

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        <Information isSubmitted={isSubmitted} />
        <section className="education-section">
          {educationIds.length > 0 && <h2>Education</h2>}
          {educationIds.map((id) => (
            <div key={id}>
              <Education formId={id} isSubmitted={isSubmitted} />
              {!isSubmitted && <button type="button" onClick={() => deleteEducation(id)}>Delete</button>}
            </div>
          ))}
        </section>
        <section className="practical-section">
          {practicalExpIds.length > 0 && <h2>Practical Experience</h2>}
          {practicalExpIds.map((id) => (
            <div key={id}>
              <PracticalExp formId={id} isSubmitted={isSubmitted} />
              {!isSubmitted && <button type="button" onClick={() => deleteExperience(id)}>Delete</button>}
            </div>
          ))}
        </section>
        {!isSubmitted ? (
          <div className="global-actions" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button type="button" onClick={addMoreEducation}>
              Add Education
            </button>
            <button type="button" onClick={addMoreExperience}>
              Add Job Experience
            </button>
            <button type="button" className="submit-cv-btn" onClick={() => setIsSubmitted(true)}>
              Submit CV
            </button>
          </div>
        ) : (
          <div className="global-actions" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button type="button" className="edit-cv-btn" onClick={() => setIsSubmitted(false)}>
              Edit CV
            </button>
          </div>
        )}
      </main>
    </>
  );
}
