import { useState } from 'react';

export default function Edit() {
  const [quizData, setQuizData] = useState({ title: '', questions: [] });

  const handleTitleChange = (e) => {
    setQuizData({ ...quizData, title: e.target.value });
  };

  const handleQuestionChange = (index, e) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index] = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar os dados do quiz
    console.log(quizData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={quizData.title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Questions:
          {quizData.questions.map((question, index) => (
            <input
              key={index}
              type="text"
              value={question}
              onChange={(e) => handleQuestionChange(index, e)}
            />
          ))}
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
