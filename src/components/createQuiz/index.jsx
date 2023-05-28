import { useState } from "react";
import RemoveButton from "../closeButton";
import InputMask from "react-input-mask";
import "./create.css";

function CreateQuiz() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cpf, setCPF] = useState("");
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://us-central1-mimetic-blade-388123.cloudfunctions.net/teste-function/quiz/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            name,
            description,
            userCpf: cpf,
            questions,
          },
        }
      );

      if (response.cod) {
        console.log("Quiz data sent successfully!");
      } else {
        console.log("Failed to send quiz data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error sending quiz data:", error);
    }
  };
  return (
    <div className="create-quiz-container">
      <div className="quiz-title">
        <div className="div-group">
          <label>Enter quiz name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="div-group">
          <label>Enter quiz description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="div-group">
          <label>Enter your CPF </label>
          <InputMask
            className="input-cpf"
            mask="999.999.999-99"
            maskPlaceholder="_"
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
        </div>
      </div>
      <div className="question-title">
        <h3>Questions</h3>
      </div>
      {questions.map((question, index) => (
        <div className="question-container" key={index}>
          <input
            type="text"
            value={question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
          />
          <RemoveButton onClick={() => removeQuestion(index)} />
        </div>
      ))}
      <button className="new" onClick={addQuestion}>
        Add Question
      </button>
      <div className="submit-buttons">
        <button className="save" onClick={handleSubmit}>
          Save
        </button>
        <button
          className="cancel"
          onClick={() => {
            window.location.reload();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateQuiz;
