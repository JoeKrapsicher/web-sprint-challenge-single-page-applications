import React, {useState} from 'react'
import axios from 'axios'
import logo from './Pizza.jpg'

const initailValues = {
    name: '',
    size: '',
    sauce: '',
    pepperoni: false,
    ham: false,
    bacon: false,
    sausage: false,
}

export default function Form() {

    const [pizzaData, setpizzaData] = useState({
        name: 'Pinapple',
        size: '3',
        sauce: 'bbqSauce',
        pepperoni: false,
        ham: true,
        bacon: false,
        sausage: true,
        info: 'Stuff',
    })

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value;
        setpizzaData({...pizzaData, [name]: valueToUse})
    }

    return(

        <div className="pizza">
            <h1>Build your PIZZA!</h1>
            <img src={logo} alt="PIZZA IMGAGE"></img>
            <h2>Build your PIZZA!</h2>
            <form className="Form">

{/*----------------------------------------------------NAME----------------------------------------------------------*/}              
                <h3> Name </h3>
                <label>First off, Whats your name?
                    <input onChange={change} type="text" value={pizzaData.name} name="name" />
                </label>

{/*----------------------------------------------------SIZE----------------------------------------------------------*/}
                <h3> Size </h3>

                <label>Choice of Size
                    <select onChange={change} name="size"  value={pizzaData.size}>
                        <option name="size" value="">--Select One--</option>
                        <option name="size" value="1">Small</option>
                        <option name="size" value="2">Medium</option>
                        <option name="size" value="3">Gigamax!</option>
                    </select>
                </label>

{/*----------------------------------------------------SAUCE---------------------------------------------------------*/}
            <div className="sauceDiv">
                <h3> SAUWCE!? </h3>

                <label> Red Original
                    <input onChange={change} type="radio" checked={pizzaData.sauce === 'redOriginal'} value="redOriginal" name="sauce"></input>
                </label>

                <label> Garlic Ranch
                    <input onChange={change} type="radio" checked={pizzaData.sauce === 'garlicRanch'} value="garlicRanch" name="sauce"></input>
                </label>

                <label> BBQ Sauce
                    <input onChange={change} type="radio" checked={pizzaData.sauce === 'bbqSauce'} value="bbqSauce" name="sauce"></input>
                </label>

                <label> Spinnach Alfredo
                    <input onChange={change} type="radio" checked={pizzaData.sauce === 'spinnachAlfredo'} value="spinnachAlfredo" name="sauce"></input>
                </label>

            </div>
{/*---------------------------------------------------TOPPINGS-------------------------------------------------------*/}
            <div className="topDiv">
                <h3> Toppings!? </h3>

                <label>Pepperoni
                    <input onChange={change} value="pepperoni" type="checkbox" name="pepperoni" checked={pizzaData.pepperoni} />
                </label>

                <label>Ham
                    <input onChange={change} value="ham" type="checkbox" name="ham" checked={pizzaData.ham} />
                </label>

                <label>Bacon
                    <input onChange={change} value="bacon" type="checkbox" name="bacon" checked={pizzaData.bacon} />
                </label>

                <label>Sausage
                    <input onChange={change} value="sausage" type="checkbox" name="sausage" checked={pizzaData.sausage} />
                </label>

            </div>

{/*----------------------------------------------------ADD INFO-----------------------------------------------------*/}
                <h3> Aditional Info </h3>
                <label>Aditional Info?
                    <input onChange={change} type="text" value={pizzaData.info} name="info"></input>
                </label>

                {/* <button disabled={disabled}>Place your order</button> */}

            </form>
        </div>

    )
}