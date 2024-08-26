import React from 'react'
import "../styles/styles.css"
const Blog = () => {
  return (
    <div>
      <div className="heading">
        <div className="h-left">
          <h4>Featured Post</h4>
          <h2>Step-by-step guide to choosing great <br></br>font pairs</h2>
          <br />
          <h6>By John Doe | May 23, 2022</h6>
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing  cupiditate<br></br> fuga sint nihil aperiam explicabo.</h5>
          <br />
          <button style={{border:'none',backgroundColor:'#FFD050', padding:'1rem'}}>{'Read More >'}</button>
        </div>
        <div className="h-right">
            <img src="../../assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg" alt="" />
        </div>
      </div>

      <div className="posts" style={{display:'flex'}}>
        <div className="p-left">
        <ul style={{margin:'4rem', listStyle:'none'}}>
          <li><img src="../../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg" alt="" /></li>
          <li><img src="../../assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg" alt="" /></li>
          <li><img src="../../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg" alt="" /></li>
          <li><img src="../../assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg" alt="" /></li>
          <li><img src="../../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg" alt="" /></li>
</ul>

        </div>

        <div className="p-right" style={{margin:'5rem'}}>
          <ul style={{listStyle:'none'}}>
  <li>
    <h5>Startup</h5>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores vel alias itaque dicta pariatur voluptatum quia animi facere consequuntur ducimus iste odit, in possimus, vitae perspiciatis! Optio, saepe at?</h3>
    <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut libero quasi maxime accusantium laboriosam, cupiditate nam sint impedit, illo dignissimos facere dolore, voluptates asperiores incidunt mollitia quis id tempora temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur cum, expedita odio eum non at. Dignissimos eligendi reprehenderit nisi et accusamus iure reiciendis itaque </h6>
  </li>
  <li>
    <h5>Startup</h5>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores vel alias itaque dicta pariatur voluptatum quia animi facere consequuntur ducimus iste odit, in possimus, vitae perspiciatis! Optio, saepe at?</h3>
    <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut libero quasi maxime accusantium laboriosam, cupiditate nam sint impedit, illo dignissimos facere dolore, voluptates asperiores incidunt mollitia quis id tempora temporibus.</h6>
  </li>
  <li>
    <h5>Startup</h5>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores vel alias itaque dicta pariatur voluptatum quia animi facere consequuntur ducimus iste odit, in possimus, vitae perspiciatis! Optio, saepe at?</h3>
    <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut libero quasi maxime accusantium laboriosam, cupiditate nam sint impedit, illo dignissimos facere dolore, voluptates asperiores incidunt mollitia quis id tempora temporibus.</h6>
  </li>
  <li>
    <h5>Startup</h5>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores vel alias itaque dicta pariatur voluptatum quia animi facere consequuntur ducimus iste odit, in possimus, vitae perspiciatis! Optio, saepe at?</h3>
    <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut libero quasi maxime accusantium laboriosam, cupiditate nam sint impedit, illo dignissimos facere dolore, voluptates asperiores incidunt mollitia quis id tempora temporibus.</h6>
  </li>
  <li>
    <h5>Startup</h5>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores vel alias itaque dicta pariatur voluptatum quia animi facere consequuntur ducimus iste odit, in possimus, vitae perspiciatis! Optio, saepe at?</h3>
    <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut libero quasi maxime accusantium laboriosam, cupiditate nam sint impedit, illo dignissimos facere dolore, voluptates asperiores incidunt mollitia quis id tempora temporibus.</h6>
  </li>
</ul>

        </div>
      </div>
    </div>
  )
}

export default Blog
