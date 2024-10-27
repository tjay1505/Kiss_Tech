import party from 'party-js'
import app from "../assets/newAss/app1.png";
import ui from "../assets/newAss/ui.png";
import vid from "../assets/newAss/video.png";
import web from "../assets/newAss/web.png";
import pro1 from '../assets/newAss/pro1.jpg'
import pro2 from '../assets/newAss/pro2.jpeg'
import pro3 from '../assets/newAss/pro3.jpeg'
import pro4 from '../assets/newAss/pro4.jpeg'

export const ServiceData = [
  {
    img: vid,
    h1: "video editing",
    p: "Enhance your video editing skills and achieve a professional quality look with courses led by top-rated industry experts.",
    links: "c1",
    subData:{
      sh:'video editing',
      on1:'65,000',
      off1:'75,000',
      on2:'34,000',
      off2:'39,000'
    }
  },
  {
    img: app,
    h1: "App development",
    p: "Elevate your app development skills and create polished, professional-quality applications with courses taught by top-rated industry experts.",
    links: "c2",
    subData:{
      sh:'App development',
      on1:'38,000',
      off1:'45,000',
      on2:'20,000',
      off2:'24,000'
    }
  },
  {
    img: web,
    h1: "Web development",
    p: "Boost your web development skills and craft high-quality, professional websites with courses taught by top-rated industry experts.",
    links: "c3",
    subData:{
      sh:'Web development',
      on1:'20,000',
      off1:'25,000',
      on2:'11,000',
      off2:'14,000'
    }
  },
  {
    img: ui,
    h1: "UI / UX design",
    p: "Master the art of UI/UX Design with our comprehensive UI/UX courses. Become a proficient UI/UX designer and unlock numerous career opportunities with our UI/UX courses in Chennai",
    links: "c4",
    subData:{
      sh:'UI / UX design',
      on1:'15,000',
      off1:'20,000',
      on2:'8,500',
      off2:'12,000'
    }
  },
];


export const GoClick = (event) => {
    party.confetti(event.target,{
        count:party.variation.range(25,35)
    })
}


const ProductData = [
  {
    id: 1,
    img: pro1,
    txt: "Booking.com",
    links:'https://www.behance.net/gallery/210826903/Mobile-app-cafe-Hajjar-cafe-complete-UIUX-Csae-Sudy'
  },
  {
    id: 2,
    img: pro2,
    txt: "Grocery store",
    links:'https://www.behance.net/gallery/210828437/UI-UX-DESIGN-CASE-STUDY-GROCERY-SRORE-APP'
  },
  {
    id: 3,
    img: pro3,
    txt: "nacros",
    links:'https://www.behance.net/gallery/210827609/NACROS-redesign-ui-project'
  },
  {
    id: 4,
    img: pro4,
    txt: "vida ev",
    links:'https://www.behance.net/gallery/210793915/VIDA-REWORK-PROJCT-UI-UX-DESIGN'
  },
];

export var first5 = ProductData.slice(0,2 );
export var last5 = ProductData.slice(-2)

import r1 from '../assets/newAss/r1.jpg'
import r2 from '../assets/newAss/r2.jpg'
import r3 from '../assets/newAss/r3.jpg'
import r4 from '../assets/newAss/r4.jpg'

export const TestymonData = [
  {
    id: 1,
    names: "Divya",
    stars: 5,
    p: "Recently i completed my UI UX design course and i got job in 1 month",
    img:r1
  },
  {
    id: 2,
    names: "sumithra",
    stars: 4,
    p: "best place to learn and very friendly mentors and thanx for kiss tech",
    img:r2
  },
  {
    id: 3,
    names: "yamuna",
    stars: 5,
    p: "i have visited many intitue before joining kiss tech, and i really felt something good at mentors",
    img:r4
  },
  {
    id: 4,
    names: "robert",
    stars: 5,
    p: "the major advantage about the insitute was the 100% placement assist ",
    img:r3
  },
];
