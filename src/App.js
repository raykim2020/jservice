import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Counter from './components/ShowScore'
import Header from './components/Header'
import GetQuestion from './components/GetQuestionsBtn'
import Category from './components/Catrgory'
import Points from './components/Points'
import Answer from './components/Answer'
export default function App() {
    const [question, setQuestion] = useState(null)
    const [answerShown, setAnswerShown] = useState(null)
    const getQuestion = async () => {
        try {
            const response = await fetch(`http://jservice.io/api/random`)
            const data = await response.json();
            setQuestion(data[0])
            setAnswerShown(null)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getQuestion()
    }, [])

    console.log(question)
    // console.log(question.value)
    return (
        <div className="App">
            <Header />
            {question &&
                <div>
                    <Counter value={question.value} />
                    <GetQuestion question={getQuestion} />
                    <Category category={question.category} />
                    <Points points={question.value} />
                    <Answer answer={question.answer} answerState={{ answerShown, setAnswerShown }} />
                </div>
            }
        </div>
    )
}