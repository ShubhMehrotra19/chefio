import React from 'react'
import Card from '../Card/Card'
import Contacticon from './ContactComponent/Contacticon'
import LeaveReview from '../LeaveReview/LeaveReview'

function Contact() {
    const reviews =[
        {
            profile: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600',
            Pname: 'Ashante Oman',
            rating: '3.4',
            review: 'I live in the dorms and sometimes we just don’t want to make. Chefio has helped me to make great dishes. I am now nicknamed chef Ashante!',
            position: { top: '70%', left: '38%' }
        },
        {
            profile: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
            Pname: 'Anne Starkway',
            rating: '4.1',
            review: 'This is the only cooking app that has so much to offer even for the basic free plan! Loved it!',
            position: { top: '20%', left: '38%' }       
        },
        {
            profile: 'https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=600',
            Pname: 'Vineet Prakash',
            rating: '4.3',
            review: "Hi there! I just upgraded my plan and I'm absolutely in love with it. Thank you so much for this app!",
            position: { top: '45%', left: '78%' }       
        }
    ]
    return (
        <section className='mx-20 flex relative z-10'>
        <div className=' w-1/2 pt-10 flex flex-col justify-start items-start'> 
        <div className='flex justify-center items-start gap-3'>
        <div className="text-black text-6xl font-bold font-serif capitalize mb-3">Contact Us</div>
        <Contacticon />
        </div>
        <div className="text-black text-2xl font-normal font-['Poppins'] mb-8">Cooked with Chefio? We will love to <br /> know your experience. </div>
        <LeaveReview />
        </div>
        <img className=' pl-12 mt-6 scale-90' src="/images/helping_contactPage.png" alt="plate" />
            {reviews.map((review, index) => (
          <Card key={index} {...review} />
        ))}
        </section> 
    )
}

export default Contact
