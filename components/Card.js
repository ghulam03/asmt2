import React from 'react'
import styles from "./Card.module.css"
function Card() {
  return (
    <>
     <div className={styles.card}>
        <div 
        className={styles.image}
        >
<h1>Image</h1>
        </div>
        <div className={styles.content}>
<h2>Website Designing</h2>
<h4>
From concept to launch, we are positioned to create a user-centric design for your business. For us, design is more than just typography and a logo, it’s about helping users get what they need. Great user experience leads to customer loyalty 
</h4>
<div className={styles.icon}>
    <p>icon1</p>
    <p>icon2</p>
    <p>icon3</p>
    <p>icon4</p>

</div>
<h7>
    IOS
</h7>
<h7>
    Android
</h7>
<h7>
    Hybrid
</h7>
<h7>
    Flutter
</h7>

<button>Get a Quote</button>
        </div>
        </div>
    </>
   
  )
}

export default Card