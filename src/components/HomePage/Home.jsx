import React from 'react'
import Card from '../Card/Card'

function Home() {
    const reviews =[
        {
            profile: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
            Pname: 'Alexandra Ray',
            rating: '4.3',
            review: 'The dish is really tasty, I made it last week and my kids loved it. I really recommend to everyone.',
            position: { top: '62%', left: '38%' }
        },
        {
            profile: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
            Pname: 'Prakash Swami',
            rating: '4.7',
            review: 'As a college student, sometimes I do not have much ingredients in my kitchen, i used Chefio and found this amazing recipe. Loved it!',
            position: { top: '75%', left: '77%' }       
        }
    ]

    return (
        <section className='mx-20 flex relative z-10'>
        <div className=' w-1/2'> 
        <div className="text-black text-6xl font-bold font-serif capitalize mt-16 leading-tight mb-3">Let Us Start Cooking <br /> With Popular <br /> Recipes </div>
        <div className="text-black text-xl font-semibold font-['Poppins'] capitalize">Have your ingredients but don’t know what to make?</div>
        <div className="text-black text-xl font-semibold font-['Poppins'] capitalize">No need to worry again!</div>
        </div>
        <img className='-mr-24 pl-12' src="src\Assets\images\homepage_plate.png" alt="plate" />
            {reviews.map((review, index) => (
          <Card key={index} {...review} />
        ))}
        </section>
    )
}

export default Home
