import { useState } from 'react';
import styles from './SplitTTER.module.css'

export default function Split() {
  
  const [fromData, setFromData] = useState({
    bill:  "",
    tip: "",
    numberOfpeople: ""
  })

  console.log(fromData);
  


  const handelChange = (e) => {
    const {name, value} = e.target
    setFromData((prevState) => ({
      ...prevState,
      [name]: value,

    }))
      
    console.log(`${name} Value:`, value);
    
  }


  const handleTipButtonClick = (values) => {
    setFromData((prevState) => ({
      ...prevState,
      tip: values,
    }))
  }


  return (
    <div >
      <h1>SPLIT TTER</h1>
     <div className={styles.container}>    
      <div  className={styles.containerFirstchild}>
          <div className="bill">
            <laber className={styles.bill}>Bill</laber>
            <br/>
            <input 
                  type="text" 
                  name="bill"   
                  className={styles.money}
                  value={fromData.bill}
                  onChange={handelChange} 
            />
          </div>

          <div className="Select Tip %">
                <label htmlFor="" className={styles.tip}>Selet Tip %</label>
               <div className={styles.grid}> 
                <button className={styles.box} onClick={() => handleTipButtonClick(5)} >5%</button>
                <button className={styles.box} onClick={() => handleTipButtonClick(10)} >10%</button>
                <button className={styles.box} onClick={() => handleTipButtonClick(15)}>15%</button>
                <button className={styles.box} onClick={() => handleTipButtonClick(25)}>25%</button>
                <button className={styles.box} onClick={() => handleTipButtonClick(50)}>50%</button>

                <input 
                  className={styles.boxinput}  
                  type="text" 
                  placeholder="Custom"
                  />
                </div>
          </div>

          <div className={styles.numberOfpeople}>
                <label htmlFor="" className={styles.peopleNum}>Number Of People</label><br/>
                <input 
                  type="text" 
                  className={styles.peopleInput}
                  name="numberOfpeople"
                  value={fromData.numberOfpeople}
                  onChange={handelChange}
                  />
          </div>

        </div>
          <div className={styles.containerSecondchild}>
             <div className={styles.firstItemcontainer}>

              <div>
                <span className={styles.mount}>Tip amount</span>
                <span className={styles.person}>/ person</span>
              </div>
                <h3>$0.00</h3>
             </div>

             <div className={styles.secondItemcontainer}>
             <div>
                <span className={styles.mount}>Tip amount</span>
                <span className={styles.person}>/ person</span>
              </div>
                <h3>$0.00</h3>
             </div>

             <div className={styles.rest}>
                  <button className={styles.btn}>Reset</button>
              </div>
          </div>

      </div>
    </div>
  );
}

