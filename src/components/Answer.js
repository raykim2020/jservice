export default function Answer({ answer, answerState }) {
    const { answerShown, setAnswerShown } = answerState
    const answerVisible = () => {
        return (
            <div className="answer">
                <h3 className="title">Answer:</h3><h3 className="value">{answer}</h3>
            </div>
        )
    };
    const answerHidden = () => {
        return (
            <main className="button-main">
                <button className="button" onClick={() => setAnswerShown(1)}>Reveal Answer</button>
            </main>

        )
    };
    return (
        answerShown === 1 ? answerVisible() : answerHidden()
    );
}