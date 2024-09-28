import React from 'react'
import sap from '../assets/gsap.png'
const ServiceData = [{
    img:sap,
    h1:'development1',
    p:'Cum et nihil veritatis. Provident doloribus enim rem nisi blanditiis ',
    links:'https://facebook.com'
},
{
    img:sap,
    h1:'development2',
    p:'Cum et nihil veritatis. Provident doloribus enim rem nisi blanditiis ',
    links:'https://facebook.com'
},
{
    img:sap,
    h1:'development3',
    p:'Cum et nihil veritatis. Provident doloribus enim rem nisi blanditiism',
    links:'https://facebook.com'
},
{
    img:sap,
    h1:'development4',
    p:'Cum et nihil veritatis. Provident doloribus enim rem nisi blanditiism',
    links:'https://facebook.com'
}]

export default function OurService() {
  return (
    <div className='col-12 d-flex flex-md-row flex-column h-auto align-items-center justify-content-center my-3 py-5 bg-secondary jk-service' >
        <div className="col-md-5 col-11 d-flex flex-column align-items-start justify-content-center">
            <p className='fw-bolder text-primary' >Our services</p>
            <h1 className=' fs-2' >Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et nihil veritatis. Provident doloribus enim rem nisi blanditiis aut? Error enim eos numquam temporibus praesentium laudantium voluptatibus hic odit, incidunt consequatur nam culpa accusamus, voluptatem architecto nihil dolores illum, dolorum sint harum ut? Veritatis deleniti at atque, unde id quae!</p>
        </div>
        <div className="col-md-6 col-11 d-flex flex-wrap gap-md-4 gap-5 align-items-center justify-content-center">
            {ServiceData.map((e) => (
                <React.Fragment key={e.h1} >
                    <div className='border d-flex flex-column position-relative align-items-start px-2 justify-content-center col-md-5 col-12 jk-serv-box' >
                        <img src={e.img} className='col-3 position-absolute  jk-serv-img' alt="" />
                        <p className=' fs-5' >{e.h1}</p>
                        <p>{e.p}</p>
                        <a href={e.links}>learn more</a>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}
