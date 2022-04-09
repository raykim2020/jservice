
export default function GetQuestion({ question }) {
    return (
        <div className="question">
            <h3 className="title">Let's Play</h3>
            <button className="get-question" onClick={question}>Get Question</button>
        </div>
    )
}