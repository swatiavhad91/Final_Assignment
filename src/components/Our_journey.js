import React from 'react'
import "../components/Journey.css";
import Footer from './Footer';
import Header from './Header';

export default function Our_journey() {
    return (
      <div>
        <Header/>
        <div className="Journey">
            <div className="icons">
                <div style={{marginLeft:"8%"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="darkslategray" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"/>
</svg></div>
<div style={{marginLeft:"10%"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="blue" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</div>

<div style={{marginLeft:"10%"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="orange" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
</div>

<div style={{marginLeft:"10%"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="skyblue" class="bi bi-alarm" viewBox="0 0 16 16">
  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg>
</div>

<div style={{marginLeft:"9%"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="yellow" class="bi bi-lightbulb" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
</svg>
</div>

<div style={{marginLeft:"8%"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-bullseye" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
</div>

<div style={{marginLeft:"10%"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#A2B969" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
</svg>
</div>
            </div>
            <div>
            <div id="pointer1">2015</div>
            <div id="pointer2">2016</div>
            <div id="pointer3">2017</div>
            <div id="pointer4">2018</div>
            <div id="pointer5">2019</div>
            <div id="pointer6">2020</div>
            <div id="pointer7">2021</div>
            </div>

            <div className="lines">
            <div className="line1">
            <div id="line1"></div>
            <div id="box1">
                <p style={{fontWeight:"bold", textAlign:"center" , color:"white"}}>LOREM IPSUM</p>
                <p style={{textAlign:"center",color:"white"}}>lorem ipsum lorem ipsum</p>
            </div>
            </div>

            <div className="line2">
            <div id="line2"></div>
            <div id="box2">
                <p style={{fontWeight:"bold", textAlign:"center" }}>LOREM IPSUM</p>
                <p style={{textAlign:"center"}}>lorem ipsum lorem ipsum</p>
            </div>
            </div>

            <div className="line3">
            <div id="line3"></div>
            <div id="box3">
                <p style={{fontWeight:"bold", textAlign:"center"}}>LOREM IPSUM</p>
                <p style={{textAlign:"center"}}>lorem ipsum lorem ipsum</p>
            </div>
            </div>

            <div className="line4">
            <div id="line4"></div>
            <div id="box4">
                <p style={{fontWeight:"bold", textAlign:"center"}}>LOREM IPSUM</p>
                <p style={{textAlign:"center"}}>lorem ipsum lorem ipsum</p>
            </div>
            </div>

            <div className="line5">
            <div id="line5"></div>
            <div id="box5">
                <p style={{fontWeight:"bold", textAlign:"center",color:"white"}}>LOREM IPSUM</p>
                <p style={{textAlign:"center",color:"white"}}>lorem ipsum lorem ipsum</p>
            </div>
            </div>

            <div className="line6">
            <div id="line6"></div>
            <div id="box6">
                <p style={{fontWeight:"bold", textAlign:"center"}}>LOREM IPSUM</p>
                <p style={{textAlign:"center"}}>lorem ipsum lorem ipsum</p>
            </div>
            </div>

            <div className="line7">
            <div id="line7"></div>
            <div id="box7">
                <p style={{fontWeight:"bold", textAlign:"center", color:"white"}}>LOREM IPSUM</p>
                <p style={{textAlign:"center", color:"white"}}>lorem ipsum lorem ipsum</p>
            </div>
            </div>
            </div>
         
        </div>
        <Footer/>
        </div>
    )
}
