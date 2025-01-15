import React, { useEffect } from "react";
import HeaderSec from "./HeaderSec";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer ,toast } from "react-toastify";
import '../App.css'

const dtat = [
  {
    key: 1,
    text: "This course is exclusively designed for KISS Tech students, offering advanced-level explanations to provide in-depth knowledge and understanding of the subject.",
    img: "https://unblast.com/wp-content/uploads/2021/07/Food-Delivery-App-Template-0.jpg",
    tittle: "UI UX Design",
    available:true,
    EachCourse: [
      {
        key: 1,
        topic:'UI UX design',
        heading: "chapter 1",
        text: " exclusively designed for KISS Tech students,",
        documents: [
          {
            pdf1: "https://kisstechofficial.github.io/study-material/chapter1.pdf",
            subHeading: [
              { title: "product thinking", page: 1 },
              { title: "product info", page: 3 },
              { title: "product evolution", page: 5 },
              { title: "Activity 1", page: 6 },
              { title: "product thinking", page: 7 },
              { title: "problem statement", page: 10 },
              { title: "Activity 2", page: 11 },
              { title: "Hierarchy of needs", page: 12 },
              { title: "Activity 3", page: 15 },
              { title: "UX pyramid", page: 16 },
              { title: "Activity 4", page: 20 },
            ],
          },
        ],
      },
      {
        key: 2,
        topic:'UI UX design',
        heading: "chapter 2",
        text: " exclusively designed for KISS Tech students,",
        documents: [
          {
            pdf1: "https://kisstechofficial.github.io/study-material/chapter2.pdf",
            subHeading: [
              { title: "user journey", page: 1 },
              { title: "story board", page: 5 },
              { title: "life table", page: 7 },
              { title: "activity", page: 8 }
            ],
          },
        ],
      },
      {
        key: 3,
        topic:'UI UX design',
        heading: "chapter 3",
        text: " exclusively designed for KISS Tech students,",
        documents: [
          {
            pdf1: "https://kisstechofficial.github.io/study-material/chapter3.pdf",
            subHeading: [
              { title: "empathize", page: 1 },
              { title: "quantitative", page: 3 },
              { title: "quantitative", page: 7 },
              { title: "activity 1", page: 8 },
              { title: "MBTI", page: 9 },
              { title: "activity 2", page: 11 },
              { title: "mental model", page: 12 },
              { title: "activity 3", page: 13 },
              { title: "in depth interview", page: 14 },
              { title: "activity 4", page: 15 },
              { title: "user interview", page: 16 },
              { title: "activity 5", page: 21 },
              { title: "stakeholder interview", page: 22 },
              { title: "activity 6", page: 24 },
            ],
          },
        ],
      },
      {
        key: 4,
        topic:'UI UX design',
        heading: "chapter 4",
        text: " exclusively designed for KISS Tech students,",
        documents: [
          {
            pdf1: "https://kisstechofficial.github.io/study-material/chapter4.pdf",
            subHeading: [
              { title: "define", page: 1 },
              { title: "empathy maping", page: 2 },
              { title: "persona", page: 5 },
              { title: "activity 1", page: 6 },
              { title: "activity 2", page: 7 },
              { title: "activity 3", page: 8 },
              { title: "activity 4", page: 12 },
              { title: "user stories", page: 13 },
              //{ title: "in depth interview", page: 1 },
              { title: "activity ", page: 14 },
            ],
          },
        ],
      },
      {
        key: 5,
        topic:'UI UX design',
        heading: "chapter 5",
        text: " exclusively designed for KISS Tech students,",
        documents: [
          {
            pdf1: "https://kisstechofficial.github.io/study-material/chapter5.pdf",
            subHeading: [
              { title: "ideation", page: 1 },
              { title: "charcteristics", page: 3 },
              { title: "activity 1", page: 6 },
              { title: "activity 2", page: 7 },
              { title: "idea generation", page: 8 },
              { title: "frame work", page: 11 },
              { title: "MVP", page: 16 },
              //{ title: "", page: 19 },
              { title: "activity ", page: 29 },
              { title: "task flow", page: 20 },
              { title: "activity", page: 23 },
              { title: "user flow", page: 24 },
              { title: "activity", page: 28 },
              { title: "scope document", page: 29 },
            ],
          },
        ],
      },
      {
        key: 6,
        topic:'UI UX design',
        heading: "chapter 6",
        text: " exclusively designed for KISS Tech students,",
        documents: [
          {
            pdf1: "https://kisstechofficial.github.io/study-material/chapter6.pdf",
            subHeading: [
              { title: "prototype", page: 1 },
              { title: "activity 1", page: 7 },
            ],
          },
        ],
      },
      {
        key: 7,
        topic:'UI UX design',
        heading: "chapter 7",
        text: " exclusively designed for KISS Tech students,",
        documents: [
          {
            pdf1: "https://kisstechofficial.github.io/study-material/chapter7.pdf",
            subHeading: [
              { title: "testing", page: 1 },
              { title: "activity 1", page: 10 },
            ],
          },
        ],
      },
      {
        key: 8,
        topic:'UI UX design',
        heading: "chapter 8",
        text: " exclusively designed for KISS Tech students,",
        documents: [
          {
            pdf1: "https://kisstechofficial.github.io/study-material/chapter8.pdf",
            subHeading: [
              { title: "UX design recall", page: 1 },
            ],
          },
        ],
      },
    ]
  },


  {
    key: 2,
    text: "This course is exclusively designed for KISS Tech students, offering advanced-level explanations to provide in-depth knowledge and understanding of the subject.",
    img: "https://unblast.com/wp-content/uploads/2021/07/Food-Delivery-App-Template-0.jpg",
    tittle: "Web Development",
    links: "https://tjay1505.github.io/pdf-fold/reactjs_tutorial.pdf",
    available:false
  },
  {
    key: 3,
    text: "This course is exclusively designed for KISS Tech students, offering advanced-level explanations to provide in-depth knowledge and understanding of the subject.",
    img: "https://unblast.com/wp-content/uploads/2021/07/Food-Delivery-App-Template-0.jpg",
    tittle: "Data Science",
    links: "https://tjay1505.github.io/pdf-fold/reactjs_tutorial.pdf",
    available:false

  },
  {
    key: 4,
    text: "This course is exclusively designed for KISS Tech students, offering advanced-level explanations to provide in-depth knowledge and understanding of the subject.",
    img: "https://unblast.com/wp-content/uploads/2021/07/Food-Delivery-App-Template-0.jpg",
    tittle: "Machine Learning",
    links: "https://tjay1505.github.io/pdf-fold/reactjs_tutorial.pdf",
    available:false

  },
];


export default function Course() {

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

  const navi = useNavigate();
  return (
    <>
      <HeaderSec word={"Course"} />
      <div className="col-12 d-flex flex-wrap align-items-start justify-content-center mt-4  gap-2">
        {dtat.map((e) => (
          <Card key={e.key} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e.img} />
            <Card.Body>
              <Card.Title>{e.tittle}</Card.Title>
              <Card.Text>{e.text}</Card.Text>
              <Button
                variant="primary"
                onClick={() =>{
                  if(e.available){
                    navi("/course-details", {
                      state: { courseData: e.EachCourse },
                    })
                  } else{
                    toast.info('coming sooon',{autoClose:1000})
                  }
                  }
                }
                className="jk-bg-clr border-0"
              >
                Go to Course
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <ToastContainer
      className="toast-container"
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </>
  );
}
