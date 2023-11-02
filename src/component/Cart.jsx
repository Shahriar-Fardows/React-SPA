

const Cart = ({SelectedCourse , price,hour,remainingHour}) => {
    console.log(SelectedCourse)
    let number = 0;
    return (
        <div className="p-5 border border-sky-500 rounded-xl  ">
             <h2 className="text-center font-semibold font-serif text-base text-blue-500 mb-4">Credit hours Remaining : <span className="text-red-700"> {remainingHour}</span> hr </h2> 
             <hr  />
             <div>
                <h3 className="text-center font-semibold font-serif text-xl text-white-500 mt-4 mb-4">Course Name</h3>
                <hr />
                
                <div className="mt-4">
                
               
                
                {
                    SelectedCourse.map((name)=>(
                        <h4 key={name.id} className=" font-medium font-sans text-sm text-white-500 mb-1">{number=number+1}. {name.name}</h4>
                             
                    ))
                }
                </div>
                <h5 className=" font-semibold font-sans text-lg text-white-500 mb-4">Total Credit Hour :{hour} </h5>
                <hr />
                <h5 className=" font-sans font-semibold text-lg text-white-500 mb-4">Total Price : {price} USD</h5>
             </div>
        </div>
    );
};

export default Cart;