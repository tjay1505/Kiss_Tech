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
    p: "Fully Compatible and user-friendly dynamic websites to perform the user’s requirements.",
    links: "https://facebook.com",
  },
  {
    img: app,
    h1: "App development",
    p: "Fully Compatible and user-friendly dynamic websites to perform the user’s requirements.",
    links: "https://facebook.com",
  },
  {
    img: web,
    h1: "Web development",
    p: "Fully Compatible and user-friendly dynamic websites to perform the user’s requirements.m",
    links: "https://facebook.com",
  },
  {
    img: ui,
    h1: "UI / UX design",
    p: "Fully Compatible and user-friendly dynamic websites to perform the user’s requirements.m",
    links: "https://facebook.com",
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
  },
  {
    id: 2,
    img: pro2,
    txt: "Grocery store",
  },
  {
    id: 3,
    img: pro3,
    txt: "nacros",
  },
  {
    id: 4,
    img: pro4,
    txt: "vida ev",
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
