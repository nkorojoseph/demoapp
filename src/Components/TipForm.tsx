import { useForm } from './formHooks';


const actionForm = ()=>{
  console.log("hello typescript and react form")
}

export const TipForm= ():JSX.Element => {

  const {inputs,handleOnChange, handleSubmit}  = useForm(actionForm) 
  console.log(inputs)

  return (
    <section className="tip-board">
    <div className="w3-container w3-white w3-round-large test-display">
      <div>
      <form className="w3-container">
      
      <div className="form-group ">
        
          <label>Bill</label> 
          <div className="textinput-flex">
            <i className="w3-xxlarge fa fa-dollar input-icon"></i>
            <input 
                name="bill" 
                className="w3-input w3-hover-gray w3-border-0 w3-light-gray inline-input" 
                id = "inline-input"  
                type="number" 
                onChange = {handleOnChange}
                value = {inputs.bill}
              ></input>
          </div>
                  
      </div>

      <div className="form-group">
          <div className="tip-percent">
            <label htmlFor="tipPercent">Select Tip %</label>
            <div className="percent-list">
                <button 
                  onClick={handleOnChange}
                  name="tip" className="w3-button w3-round-large" type="button" value={inputs.tip = 10}>10%</button>
                <button
                  onClick={handleOnChange}
                  name="tip" className="w3-button w3-round-large" type="button" value={inputs.tip =15}>15%</button>
                <button 
                  onClick={handleOnChange}
                  name="tip" className="w3-button w3-round-large" type="button" value={inputs.tip =20}>20%</button>
                <button 
                  onClick={handleOnChange}
                  name="tip" className="w3-button w3-round-large" type="button" value={inputs.tip =25}>25%</button>
                <button 
                  onClick={handleOnChange}
                  name="tip" className="w3-button w3-round-large" type="button" value={inputs.tip =50}>50%</button>
                <button 
                  onClick={handleOnChange}
                  name="tip" className="w3-button w3-round-large" type="button">Custom</button>
            </div>
          </div>
      </div>

      <div className="form-group">
        
          <label>Number of People</label>
          <div className="textinput-flex">
            <i className="w3-xxlarge fa fa-user input-icon"></i>
            <input 
              onChange={handleOnChange}
              name="noOfPeople" className="w3-input w3-hover-gray w3-border-0 w3-light-gray inline-input" type="number"></input>
          </div>
        
      </div>

    </form>
      </div>
     
      <div className=" total-group">
        <div className="w3-display-container w3-round-large totalling">
          <div className="w3-row-padding">
              <p className="w3-left">
                <span className="w3-text-white"> Tip Amount </span><br/> <span className="person"> /person</span>
              </p>
              <p className="w3-right total-amount" >
                ${(inputs.tip && inputs.noOfPeople && inputs.bill)? ((inputs.tip/100)*inputs.bill)/(inputs.noOfPeople):0}
              </p>
          </div>
          <div className="w3-row-padding ">

            <div className="w3-row-padding">
              <p className="w3-left">
                <span className="w3-text-white">Total </span>  <br/> <span className="person"> /person</span>
                </p>
                <p className="w3-right total-amount">
                  ${(inputs.bill && inputs.noOfPeople) ? (inputs.bill / inputs.noOfPeople) : 0}
                </p>
            </div>   
          </div>
          <div className="w3-row-padding ">
                <button
                    onClick={handleSubmit}
                    className="w3-button w3-round-large  reset_button" type="button">RESET
                </button>
            </div>
        </div>
      </div>

    </div>
  </section>
  )
}



