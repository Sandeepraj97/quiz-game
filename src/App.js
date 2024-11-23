
import questionData from "./questions.json"
import "./App.css"
import { useState } from "react"
const  App = () =>{
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const [showScore,setShowScore] = useState(false)
    const handleAnswerClick = (selectedOption) =>{
        if(selectedOption === questionData[currentQuestion].correctOption){
            setScore((prevScore) => prevScore + 1)
        }
        if (currentQuestion <questionData.length -1 ){
            setCurrentQuestion((prevQuestion) => prevQuestion + 1)
            
        }else{
            setShowScore(true)
        }
    }
    const handleReset = ()=>{
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }
    return (
        <>
            <div className="qiz-app">
            {
                showScore ? (
                    <div className="score-section" >
                        <h2>You Score: {score}/{questionData.length}</h2>
                        <button onClick={handleReset}>Restart</button>
                    </div>
                ): (
                <div className="question-section">
                    <h1>Question {currentQuestion+1}</h1>
                    <p>{questionData[currentQuestion].question}</p>
                    <div className="options">
                        {
                            questionData[currentQuestion].options.map((option,index)=>(
                                <button onClick={()=> handleAnswerClick(option)} key={index}>{option}</button>
                            ))
                        }
                    </div>
                    
                </div>
                )
            }
            </div>
        </>
    )
}

export default App