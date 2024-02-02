import './App.css';
import { useState } from "react";

function App() {
  let [disp,setdisp]=useState("");
    let [firstval,secval]=useState("");
    let [sign,setsign]=useState("");
    const getdata=(a)=>{
        setdisp(disp+a);
    }

    const caldata=(l)=>{
        secval(disp)
        setdisp("")
        setsign(l);
    }
    const valueget=()=>{
        const lastval=disp;
        switch(sign){
            case 1:
                setdisp(String(parseFloat(firstval)+parseFloat(lastval)));
                break;
            case 2:
                setdisp(String(parseFloat(firstval)-parseFloat(lastval)));
                break;
            case 3:
                setdisp(String(parseFloat(firstval)*parseFloat(lastval)));
                break;
            case 4:
                if(parseFloat(lastval)===0){
                    setdisp("Error");   
                }else{
                    setdisp(String(parseFloat(firstval)/parseFloat(lastval)));
                }
                break;

            case 5:
                if(parseFloat(lastval)===0){
                    setdisp("Error");   
                }else{
                setdisp(String(parseFloat(firstval)%parseFloat(lastval)));
                }
                break;
            default:
                setdisp("not valid");
        }
    }
    const singletimeremove=()=>{
        setdisp((prevdisplay)=>prevdisplay.slice(0,-1));
    }
    const clear=()=>{
        setdisp("")
    }

  return (
    <div className="App">
      <div class="main_div">
        <div class="text">
        <input type="text" value={disp} size={25} className='py-3'></input>
          {/* <input type='text' onChange={(e)=>{setval(e.target.value)}}></input><br/> */}
        </div>
        <div class="six">
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"%"}></input>
          <input type="button" name="" value={"CE"}></input>
          <input type="button" name="" value={"C"} onClick={()=> clear()}></input>
          <input type="button" name="" value={"Del"} onClick={()=> singletimeremove()}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"1/x"}></input>
          <input type="button" name="" value={"x2"}></input>
          <input type="button" name="" value={"1/x"}></input>
          <input type="button" name="" value={"/"} onClick={()=> caldata(4)}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"7"} class="h7" onClick={()=> getdata(7)}></input>
          <input type="button" name="" value={"8"} onClick={()=>getdata(8)}></input>
          <input type="button" name="" value={"9"} onClick={()=>getdata(9)}></input>
          <input type="button" name="" value={"*"} onClick={()=> caldata(3)}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"4"} onClick={()=>getdata(4)}></input>
          <input type="button" name="" value={"5"} onClick={()=>getdata(5)}></input>
          <input type="button" name="" value={"6"} onClick={()=>getdata(6)}></input>
          <input type="button" name="" value={"-"} onClick={()=> caldata(2)}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"1"} onClick={()=>getdata(1)}></input>
          <input type="button" name="" value={"2"} onClick={()=>getdata(2)}></input>
          <input type="button" name="" value={"3"} onClick={()=>getdata(3)}></input>
          <input type="button" name="" value={"+"} onClick={()=>caldata(1)}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"+"}  onClick={()=> caldata(1)}></input>
          <input type="button" name="" value={"0"} onClick={()=>getdata(0)}></input>
          <input type="button" name="" value={"."} onClick={()=>getdata('.')}></input>
          <input type="button" name="" value={"="} onClick={() => valueget()}></input>

        </div>

        
		  </div>
    </div>
  );
}

export default App;
