
let questions = [{
    "id" : 1,
    "question" : "do you know react",
    "answer" : "yes"
}]

export const Slider = ()=>{
    return (<div data-testid = "slider">
        {
            questions.map(e =><p key={e.id} > {e.question} </p> )
        }
        <button >Prev</button>
        <button>Next</button>
    </div>)
}