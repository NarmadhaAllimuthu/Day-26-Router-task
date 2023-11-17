
import React from 'react'

function FullStackDevelopment() {

const courseDetails=[{
    
    img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/giphyFSD.gif",
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
    content:"When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills. Sure, they might be great at their work, but would they be a great employee or someone who fits well within your organization?",
   date:"15 November 2023 ",
   comment:" No Comments"

},{
    
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png",
    title:"The Ultimate Guide to Real-World Full-Stack Development Applications",
    content:"Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.",
   date:"29 July 2023 ",
   comment:" No Comments"

},{
    
  img:"https://www.guvi.in/blog/wp-content/uploads/2021/08/Full-Stack-Development-qa-2048x1072.jpg",
  title:"Know This Before Stepping Into Full Stack Development",
  content:"Full Stack Development, one of the growing fields with booming career opportunities, is a ticket to the big companies",
 date:"3 August 2023 ",
 comment:" No Comments"

},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
  title:"How Long Would It Take to Be a Full Stack Developer?",
  content:"Have you ever wondered how much time it would take to become a skilled Full Stack Developer",
 date:"27 July 2023 ",
 comment:" No Comments"
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/professional-programmer-working-late-dark-office.jpg",
  title:"5 Career Opportunities for Full Stack Development",

  content:"Ever wondered what awesome job opportunities are waiting for you in the field of Full Stack Development? Well, this blog is just for you!",
 date:"27 July 2023 ",
 comment:" No Comments"
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/full-stack-development-book-1536x1097.png",
  title:"Best Books to Learn Full-Stack Development",
  content:"If you’re just starting your journey in full-stack development, it’s essential to build a solid foundation in web development.",
  date:"9 November 2023 ",
  comment:" No Comments"
}
]


  return (
    <div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-6">
        {
            courseDetails.map((detail)=>{
                return  <div className="col  mb-6" id="card">
                <div className="card  h-100 border-0 ">
                  <img src={detail.img} className="card-img-top" alt="img"/>
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

export default FullStackDevelopment;