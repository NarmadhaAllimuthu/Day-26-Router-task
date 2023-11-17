

import React from 'react'

function CyberSecurity() {

const cyberDetails=[{
  img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
content:"Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!",
date:"27 December 2022",
comment:" No Comments",
},{
 
    img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
  title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
  content:"With so many great things coming from technology, it’s highly likely that some potential threats lurk behind every device & platform",
  date:"20 December 2022",
  comment:" 1 Comments",
 
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact-1200x375.jpg",
title:"Top 7 Cyber Security Attacks in Real Life",
content:"Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized access to computer systems.",
date:"10 June 2022 ",
comment:" 1 Comments",
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
content:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you",
date:"22 June 2022",
comment:" No Comments",
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-2048x1072.png",
title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
content:"There are two types of companies: those that have been hacked, and those who don’t yet know they have been hacked.",
date:"1 March 2021",
comment:" No Comments",
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners-1200x571.webp",
title:"The Ultimate Cybersecurity Roadmap for Beginners",
content:"Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore, the annual growth rate of cybersecurity jobs as identified by LinkedIn is 30%.",
date:"1 March 2021",
comment:" No Comments",
}]


  return (
    <div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-6">
        {
            cyberDetails.map((detail)=>{
                return  <div className="col mb-6 ">
                <div className="card h-100 border-0 ">
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

export default CyberSecurity;