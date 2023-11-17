

import React from 'react'

function Career() {
  const careerDetails=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/06/top-career-options-in-india.jpg",
  title:"Top Career Options in India in 2023",
  content:"In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes a transformation fueled by technological advancements and the growing need for sustainable practices, it’s essential to navigate the shifting landscape strategically.",
  date:"2 November 2023 ",
  comment:" No Comments",
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/05/image-13.png",
  title:"Machine Learning Must-Knows: Reliable Models and Techniques",
  content:"Machine Learning (ML) is a field of Artificial Intelligence (AI) that focuses on the development of algorithms and models that enable computers to learn from data and make predictions or decisions without being explicitly programmed",
  date:"10 November 2023",
  comment:" No Comments",
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/featured-image-how-to-become-ui-ux-designer.webp",
  title:"Is AWS Certification Worth It? | Best AWS Certifications 2023",
  content:"IT runs the world and is everywhere. And if you’re someone who’s least interested in coding and still wants to get into it. You’ve come to the right place. In this blog, we’ll be talking about AWS Certifications.",
  date:"14 August 2023",
  comment:" No Comments",
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/05/How-to-prepare-for-any-job-interview-1200x675.webp",
  title:"How To Prepare for Any Job Interview? | 7 Best Hacks",
  content:"Getting through a job interview opens the gateway to your dream job. But did you know that interview preparation is the real game-changer?",
  date:"14 September 2023",
  comment:" No Comments",
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/06/UIUX_GD.jpg",
  title:"Graphic Designer vs. UI/UX Designer: Key Differences You Should Know",
  content:"It has always been confusing for people to understand the key differences between Graphic designers vs. UI/UX designers. To help you clear your confusion and clear your way to becoming one, this blog has been articulated",
  date:"13 September 2023 ",
  comment:" No Comments",
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/shaking-hand-speaker-2048x1365.jpg",
  title:"Can Mechanical Engineers Become Software Engineers? | Yes!",
  content:"This is a must-read for you if your educational background is in mechanical engineering & yet you aspire for a software engineer job title. ",
  date:"29 July 2023 ",
  comment:" No Comments",
  }]
  return (
    <div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-6">
        {
            careerDetails.map((detail)=>{
                return  <div className="col mb-6 ">
                <div className="card h-100 border-0">
                  <img src={detail.img} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <p className="card-text"> {detail.content}
          </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">{detail.date} &ensp;  {detail.comment}
                   </small>
                  </div>
                </div>
              </div>
             
              
            })
          }
          
          </div>
          </div>
  )
}

export default Career;