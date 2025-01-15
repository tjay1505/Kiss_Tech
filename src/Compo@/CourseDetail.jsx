import React, { useEffect, useState } from 'react'
import HeaderSec from './HeaderSec'
import { useLocation, useNavigate } from 'react-router-dom'
import {Button,Card} from 'react-bootstrap'

export default function CourseDetail() {
  const navi = useNavigate()
  const {state} = useLocation()
  const [eachCourse,setEachCourse] = useState(state.courseData)
  //console.log(state.courseData[0].heading);

  useEffect(()=>{
    document.addEventListener('contextmenu',(e) => {
      e.preventDefault()
    })
    document.addEventListener('keydown',(e) => {
      if(e.key == "F12"){
        e.preventDefault
      }
    })
  },[])

  return (
    <>
      <HeaderSec word={ state.courseData[0].topic || 'course details'} />
      <div className="col-12 d-flex flex-wrap align-items-start justify-content-center mt-4  gap-2">
        {
          state.courseData.map((e) => (
            
            <Card key={e.key} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e.img} />
            <Card.Body>
              <Card.Title>{e.heading}</Card.Title>
              <Card.Text>{e.text}</Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  navi("/pdf",{state:{documents:e.documents}})
                }
                className="jk-bg-clr border-0"
              >
                start
              </Button>
            </Card.Body>
          </Card>
          )
          )
        }
      </div>
    </>
  )
}
