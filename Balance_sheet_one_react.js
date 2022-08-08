import React from 'react';
import {useState} from 'react';
import './App.css';
const Balancesheetone=()=>{
    const [data,setdata]=useState({
        cash:NaN,
        receivables_from_customers:NaN,
        equipment:NaN,
        accounts_payable:NaN,
        salary_payable:NaN,
        commonstock:NaN,
        retained_earnings:NaN
});
const [assets,setassets]=useState(0);
const [liabilitiestotal,setliabilitiestotal]=useState(0)
const [stockholderse,setstockholderse]=useState(0)
const [liaandsto,setliaandsto]=useState(0)
const [results,setresults]=useState("");

const getdata=(e)=>{
    setdata({...data,[e.target.name]:e.target.value});

}
const submitcontrol=(e)=>{
    e.preventDefault();
}
const cleardata=(e)=>{
    data.cash=NaN
    data.receivables_from_customers=NaN
    data.equipment=NaN
    data.accounts_payable=NaN
    data.salary_payable=NaN
    data.common_stock=NaN
    data.retained_earnings=NaN
    setassets(0)
    setliabilitiestotal(0)
    setstockholderse(0)
    setliaandsto(0)
    setresults("")
}
const calculate=()=>{
    var totalassets=parseFloat(data.cash)+parseFloat(data.receivables_from_customers)+parseFloat(data.equipment);
    var totalliabilities=parseFloat(data.accounts_payable)+parseFloat(data.salary_payable);
    var stockholderss=parseFloat(data.common_stock)+parseFloat(data.retained_earnings);
    var stocklia=totalliabilities+stockholderss;
    setassets(totalassets)
    setliabilitiestotal(totalliabilities)
    setstockholderse(stockholderss)
    setliaandsto(stocklia)

    if(parseInt(totalassets)===parseInt(stocklia)){
        setresults("BALANCED")
    }else{
        setresults("NOT BALANCED")
    }

}
    return( 

<div className="red">
    <center>
        <div className="title">
        <h3>BALANCE SHEET MODEL ONE</h3>
        </div>

<form onSubmit={submitcontrol}>
    <table>
        <tr>
            <th>ASSETS</th>
            <th>LIABILITIES</th>
            <th>STOCKHOLDERS</th>
        </tr>
        <tr>
            <td className="box">
<label>CASH</label><br/>
<input type="number" name="cash" value={data.cash}  onChange={getdata}/><br/>
<label>RECEIVABLES FROM CUSTOMERS</label><br/>
<input type="number" name="receivables_from_customers" value={data.receivables_from_customers} onChange={getdata}/><br/>
<label>VALUE OF EQUIPMENT</label><br/>
<input type="number" name="equipment" value={data.equipment} onChange={getdata}/><br/>
            </td>
            <td className="box">
            
<label>ACCOUNTS PAYABLE</label><br/>
<input type="number" name="accounts_payable" value={data.accounts_payable} onChange={getdata}/><br/>
<label>SALARY PAYABLE</label><br/>
<input type="number" name="salary_payable" value={data.salary_payable} onChange={getdata}/><br/>
            </td>
            <td className="box">
            <label>COMMON STOCK</label><br/>
<input type="number" name="common_stock" value={data.common_stock} onChange={getdata}/><br/>
<label>RETAINED EARNINGS</label><br/>
<input type="number" name="retained_earnings" value={data.retained_earnings} onChange={getdata}/><br/>
            </td>
        </tr>
    </table>
<table>
    <tr>
        <td><button type="submit" className="calculate mybutton" onClick={calculate}>CHECK THE SHEET</button></td>
        <td><button type="submit" className="clear mybutton"onClick={cleardata}>CLEAR THE VALUES</button></td>
    </tr>
</table>

</form>

</center>
<table className="result">
    <tr>
        <th>ASSETS</th>
        <th>LIABILITIES</th>
        <th>STOCKHOLDERS EQUITY</th>
        <th>EQUITY AND LIABILITIES</th>
        <th>RESULT</th>
    </tr>
    <tr className="values">
        <td><div>{assets}</div></td>
        <td><div>{liabilitiestotal}</div></td>
        <td><div>{stockholderse}</div></td>
        <td><div>{liaandsto}</div></td>
        <td><div>{results}</div></td>
    </tr>
</table>
</div>


)
}
export default Balancesheetone;




