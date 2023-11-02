
import { useState } from 'react'
import './App.css'
import Cart from './component/Cart'
import Courses from './component/Courses'
import Swal from 'sweetalert2'

function App() {
  const [SelectedCourse, setSelectedCourse] = useState([])
  const [price, setPrice] = useState(0)
  const [hour, setHour] = useState(0)
  const [remainingHour, setRemainingHour] = useState(0)
  // handle select button 
  const handleSelectedCourse = (courseDetails) => {
    const isExist = SelectedCourse.find((item) => item.id == courseDetails.id)

    let count = courseDetails.price;
    let hour = courseDetails.hour;

    if (isExist) {
      return Swal.fire(
        'Opps Sorry',
        'Already Selected this One',
        'warning'
      )
    }
    else {
      

      SelectedCourse.forEach((item) => {
        count = count + item.price
        hour = hour + item.hour
        // console.log(count)
      })
      const totalRemaining = 20 - hour;

      if (totalRemaining < 0) {
        return Swal.fire(
          'Wait!!!',
          'Your Credit Limit is Over',
          'warning'
        )
      }
      else {
        setHour(hour)
        setPrice(count)
        setRemainingHour(totalRemaining)
        setSelectedCourse([...SelectedCourse, courseDetails])
      }
    }
  }
  // console.log(SelectedCourse);
  return (
    <>

      <section className='max-w-screen-xl mx-auto'>
        <header className='text-4xl uppercase text-center font-serif mt-5 mb-5'>Course Registration</header>
        <div className='md:flex gap-5 justify-center'>
          <div className='w-3/4'>
            <Courses
              handleSelectedCourse={handleSelectedCourse}

            ></Courses>
          </div>

          <div className='w-1/4'>
            <Cart
              SelectedCourse={SelectedCourse}
              price={price}
              hour={hour}
              remainingHour={remainingHour}


            ></Cart>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
