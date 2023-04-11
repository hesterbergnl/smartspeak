const SentenceForm = (props) => {
    return (
        <form onSubmit={props.smartSentence}>
            <div>
                <h3>Enter text below that you want to sound smarter: </h3>
                <textarea value={props.sentenceEntry} onChange={props.updateSentenceEntry} rows="5" cols="60"/>
            </div>
            <div>
                <button type="submit">Make Smart</button>
            </div>
        </form>
    )
}

export default SentenceForm