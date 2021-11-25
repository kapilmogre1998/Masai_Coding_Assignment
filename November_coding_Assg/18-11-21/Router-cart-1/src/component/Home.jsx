export const Home = () => {
    return (
        <div style={{marginTop:"2em",display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
            <div>
            <img style={{width:"200px",height:"250px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPu8t2QUH98Py8YMMUGSQblxI_LdZPqH9iLg&usqp=CAU" alt="" />
            <a style={{display:"block"}} href="http://localhost:3000/men">Men</a>
            </div>
            <div>
            <img style={{width:"200px",height:"250px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiO9HnNZC7SYcBd9HOPDYa7_H1BE4ku3ukIw&usqp=CAU" alt="" />
            <a style={{display:"block"}} href="/women">Women</a>
            </div>
            <div>
            <img style={{width:"200px",height:"250px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRuQyr_JTz2GTYMnAkKdtf6H7EpFX0CUPuA&usqp=CAU" alt="" />
            <a style={{display:"block"}} href="/children">Children</a>
            </div>
        </div>
    )
}
