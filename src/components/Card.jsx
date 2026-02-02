// import './style.css'

// const Card = (props)=>{
//     return(
//         <div className="card">
//             <h1>{props.name}</h1>     
//             <p>{props.price}</p>   
//         </div>
//     )
// }

// export default Card;


// function Card(props){
//     return(
//         <div className="card">
//             <h1>{props.name}</h1>     
//         </div>
//     )
// }

// export default Card;


// function Card({name,price,desc}){
//     return(
//         <div className="card">
//             <h1>{name}</h1>  
//             <p>Price:{price}</p>  
//             <p>{desc}</p> 
//         </div>
//     )
// }

// export default Card;


function Card({courses}){
    return(
        <div className="card-container">
            {
                courses.map(course=>(
                    <div className="card" key={course.id}>
                        <img src={course.image} alt="" />
                        <div className="product-info">
                            <h3>{course.name}</h3>
                            <p>{course.description}</p>
                            <div className="bottom">
                                <p>Price:₹{course.price}</p>
                                <div className="btns">
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;