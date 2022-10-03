import { useState } from "react";
import Navbar from "../components/navbar";
import Question from "../components/question";
import './landing.css';

const Landing = () => {
    const [questions, setQuestions] = useState([{q: '', a: ''}]);

    const onAddQuestion = () => {
        setQuestions(p=>p.concat({q: '', a: ''}));
    }

    const onSaveClicked = () => {
        console.log(questions);
    }

    return (
        <div className="landing-page">
            <Navbar/>
            <div className="content">
                <div className="questions">
                    {
                        questions.map((question, i)=><Question key={i} data={question} index={i} count={questions.length} setQuestions={setQuestions}/>)
                    }
                </div>
                <div className="btns">
                    <button className="btn-add" onClick={onAddQuestion}>+ ADD QUESTION</button>
                    <button className="btn-save" onClick={onSaveClicked}>SAVE & SHARE</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;