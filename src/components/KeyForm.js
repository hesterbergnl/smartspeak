const KeyForm = (props) => {
    return (
        <div>
            <h3>Enter OpenAI API Key:</h3>
            <input value={props.keyEntry} onChange={props.updateKeyEntry} size="60"/>
        </div>
    )
}

export default KeyForm