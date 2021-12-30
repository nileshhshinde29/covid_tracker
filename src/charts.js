import React from 'react'
import { Chart } from "react-google-charts";
import './App.css';


export default function Charts(props) {
   
    const [pageNo, setpageNo] = React.useState(1)
    const [x, setX] = React.useState(1)
    
    const constant = 5 * pageNo;
    let a = constant - 5
    let b = constant - 4
    let c = constant - 3
    let d = constant - 2
    let e = constant - 1
    
    const deaths = props.data.map(items => items.TotalDeaths)
    const confirmed = props.data.map(items => items.TotalConfirmed)
    const country = props.data.map(items => items.Country)
    
    const clickedFun = (e) => { setpageNo(e) }
    function nextFunction() {
        if (pageNo < country.length / 5) {
            setpageNo(pageNo + 1)
            setX(pageNo+1)
            // let element4=document.getElementById("id4")
            // element4.classList.remove("hide")
        }
        // else if(pageNo >= country.length/5)
        // {   setpageNo(pageNo + 1 )
        //     // let element4=document.getElementById("id5")
        //     // element4.classList.add("hide")
        // }
    }
   
    function privious() {
        if (pageNo >1 ) {
            setpageNo(pageNo - 1)
            setX(pageNo)
            // let element4=document.getElementById("id5")
            // element4.classList.remove("hide")
        }
        // else if(pageNo <= 1)
        // {  // setpageNo(pageNo - 1 )
        //     // let element4=document.getElementById("id4")
        //     // element4.classList.add("hide")
        // }
    }
    
    React.useEffect(()=>{
        var element1 = document.getElementById("id1");
        var element2 = document.getElementById("id2");
        var element3 = document.getElementById("id3");
    

       
        console.log(pageNo)
        // console.log(element1.value)
        
       element1.value==pageNo ? element1.classList.add("active"):element1.classList.remove("active")
       element2.value==pageNo ? element2.classList.add("active"):element2.classList.remove("active")
       element3.value==pageNo ? element3.classList.add("active"):element3.classList.remove("active")
      

    },[pageNo])
       
      
   

    return (
        <div style={{height:"600px", width:"1300px" , border :"1px black solid",padding:"20px",  boxShadow: "rgb(66 0 0 / 20%) 0px 5px 14px 11px", margin:"50px 100px" }}>
            
            <Chart
                width={'1000px'}
                height={'500px'}
                chartType="Bar"
                
                loader={<div>Loading Chart</div>}
                data={[
                    ['Countries', 'Total Confirmed', 'Total Deaths'],

                    a < country.length ? [country[a], confirmed[a], deaths[a]] : [" ", 0, 0],
                    b < country.length ? [country[b], confirmed[b], deaths[b]] : [" ", 0, 0],
                    c < country.length ? [country[c], confirmed[c], deaths[c]] : [" ", 0, 0],
                    d < country.length ? [country[d], confirmed[d], deaths[d]] : [" ", 0, 0],
                    e < country.length ? [country[e], confirmed[e], deaths[e]] : [" ", 0, 0],

                ]}
                options={{
                    // Material design options
                    chart: {
                        title: 'Covid Tracker',
                        subtitle: 'Country Vice Chart of Pendamic 2019-2020',
                    },
                    // colors: ['transparent']
                }}
                // For tests      {pageNo<=0?"page-item":"page-item hide"}
                rootProps={{ 'data-testid': '2' }}
            />
            <div style={{padding:"20px"}}>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={(pageNo) <=1 ?  "page-item disabled":"page-item "}>
                            <button id={"id4"} className="page-link " onClick={privious}>Previous</button>  
                        </li>
                        <li id={"id1"} value={x < 2 ? "-" : x - 1} className={(x-1) <=0 ?"page-item margins hide" :"page-item margins"} ><button className="page-link " onClick={() => clickedFun(x < 1 ? "-" : x - 1)} href="#">{x < 2 ? "-" : x - 1}</button></li>
                       
                        <li  id={"id2"} value={x} className="page-item margins" aria-current="page">
                            <button className="page-link" onClick={() => clickedFun(x)} href="#">{x}</button>
                        </li>
                        <li  id={'id3'} value={(x+1)>= country.length/5 ? "-" : x + 1} className="page-item margins"><a className="page-link " onClick={() => clickedFun(x + 1) } href="#">{ x + 1}</a></li>
                        

                        <li  id={"id5"} className={(pageNo+1)>country.length/5 ? "page-item margins disabled":"page-item margins"}>
                            <button className="page-link disabled" onClick={() => { nextFunction() }} href="#">{`Next  ( total pages ${Math.floor(country.length/5 +1)})`}</button>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}

