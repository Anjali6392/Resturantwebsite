import React from 'react'

function Menucard({ MenuData }) {
    return (
        <>
          <section className= "main-card--container">

            {MenuData.map((curElem) => {
              const{ id, name, category, image, description} = curElem;
                return (
                    <>
                    
                        <div className="card-container" key ={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="Card-author subtle">{""}{category}</span>
                                    <h2 id="card-title">{name}</h2>
                                    <span className="card-description subtle">{description}</span>
                                    <div id="card-read">Read</div>
                                    <img src={image} alt="images" className= 'card-media'/>
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            </section>
        </>
    )
};

export default Menucard;
