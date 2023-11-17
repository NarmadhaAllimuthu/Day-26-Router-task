
import React from 'react'

function DataScience() {

const dataCourse=[{
  img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/13311397_v617batch2-kul-05-technology-1-2048x1366.jpg",
  title:"Can you achieve a Data Science job with no work experience?",
  content:"The door to data science jobs pretty much remains locked for beginners with no experience",
  date:"20 November 2022 ",
  comment:" No Comments",
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/6.-Data-Science-skills-2048x1072.png",
title:"What Skills Are Needed To Be A Data Scientist?",
content:"According to the recruitment firm Michael Page’s 2021 India Talent Trends report, data science professionals",
date:"13 June 2022",
comment:" No Comments",
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/Data-Science-vs-Data-Analytics-The-Best-Career-Choice-in-2022.png",
title:"Data Science vs Data Analytics | Best Career Choice in 2023",
content:"Our modern world relies heavily on data, which brings changes in many aspects of business",
date:"10 June 2022",
comment:"No Comments",
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2022/09/Pytorch-vs-Tenser-Flow-2048x1072.png",
title:"PyTorch vs TensorFlow | 10 Powerful Differences You Must Know!",
content:"Your pocketbook on Pytorch Vs TensorFlow From personalized shopping and entertainment experiences to face recognitions",
date:"26 September 2022 ",
comment:"No Comments",
},{

img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/conceptual-data-analysis-with-wooden-blocks-magnifying-glass-side-view-1.jpg",
title:"Best Way to Learn Data Science in 2023",
content:"The world of data science is vast and captivating, but with so much information available, finding the best way to learn and master this field can be overwhelming. It is often confusing to choose what’s best for us",
date:"28 August 2023 ",
comment:"No Comments",
},{
  
    img:"https://www.guvi.in/blog/wp-content/uploads/2022/08/Data-Science-interviews.jpg",
  title:"6 Tips & Tricks to Crack Data Science Interviews",
  content:"Data Science enables organizations to understand gigantic data from multiple sources efficiently & helps derive valuable insights to make smarter data-driven decisions",
  date:"30 December 2022",
  comment:"No Comments",
  
}]



  return (
<div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-6">
        {
            dataCourse.map((detail)=>{
                return  <div className="col mb-6 ">
                <div className="card h-100  h-100 border-0">
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

export default DataScience;