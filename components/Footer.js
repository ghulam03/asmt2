import React from 'react'
import styles from "./Footer.module.css"
function Footer() {
  return (
    <>
    <div className={styles.containero} >
<h4>Have a project in mind ?Schdule a free consultation today</h4>
<button>contact us</button>
    </div>
    <div>
        <div className={styles.containert}>
            <div className={styles.containerto}>
<div className={styles.icon}>
<p>Icon</p>
<div className={styles.icontext}>
<p>We Deliver</p>
<p>#TechnologySolution</p>
</div>

</div>
<div className={styles.followus}>
<p>Follow us:</p>
<p>icon1</p>
<p>icon2</p>
<p>icon2</p>
</div>

            </div >
            <div>
                <h3>Services</h3>
                <h4>BlockChain</h4>
               < h4>Web Development</h4>
               <h4>Mobile Development</h4>
            </div>
            <div>
                <h3>Industries</h3>
                <h4>Banking</h4>
               < h4>Insurance</h4>
               <h4>Financial Services</h4>
            </div>
            <div>
                <h3>Company</h3>
                <h4>About Us</h4>
               < h4>Team </h4>
               <h4>Award</h4>
            </div>
            <div>
                <h3>Lets Connect</h3>
                <h4>1234567</h4>
               < h4>1234567</h4>
               <h4>1234567</h4>
            </div>
        </div>
        <div className={styles.containerth}>
            <div>
                <h4>
                CopyRight 2023, COTGIN Analytics Pvt Ltd
                </h4>
               
            </div>
            <div className={styles.containertho}>
                
                <h4>Contact Us </h4>
                
                <h4>Term of Use </h4>
                
                <h4>Privacy Policy</h4>
                
                <h4>Sitemap</h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer