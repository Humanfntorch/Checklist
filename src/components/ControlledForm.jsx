import { useState } from "react";

const ControlledForm = () =>
{   
    const carBrands = ["Ford", "Cheverolet", "Jeep", "Audi"];
    const carBrandOptions = carBrands.map((carBrand, key) => (
        <option value={carBrand} key={key}>
            {carBrand}
        </option>
    ));
    // We can handle multiple input fields with a single state object
    const [state, setstate] = useState({
        fname: "",
        lname: "",
        message: "",
        carBrand: "",
        isChecked: false,
        gender: "",
        price: 0
    });
    const handleChange = (e) =>
    {   
        // determines whether we are dealing with text/checkbox input types and assigns value for updating accordingly
        const value = (e.target.type === "checkbox" ? e.target.checked : e.target.value)
        /*
            We are updating the state for the "state" object.
            By using the spread operator ({...state}), we create a shallow copy
            of the existing "state" object to avoid directly modifying the original state.
    
            Then, we are updating the property of the "state" object with the name corresponding
            to the input element using computed property names ([e.target.name]).
    
            Finally, we set the value of that property to the current value of the input element
            using the "e.target.value" from the event.
         */
        setstate((state) => ({
            ...state,
            [e.target.name]: value
        }));
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(state);
    }

    return (
        // Similar to calling React.Fragment w/o importing React
        <>
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    {/*name="fname" is required for react to know what state to update per attribute*/}
                    First Name: <input name="fname" type="text" value={state.fname} onChange={handleChange} />
                </label>
                <br/>
                <label>
                    Last Name: <input name="lname" type="text" value={state.lname} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Message: <br/>
                    <textarea name="message" value={state.message} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Car Brand: <br />
                    <select name="carBrand" value={state.carBrand} onChange={handleChange}>
                        <option value={""} disabled>
                            -- Pick a car brand --
                        </option>
                        {carBrandOptions}
                    </select>
                </label>
                <br/>
                <label>
                Is Checked?
                    <input name="isChecked" type="checkbox" checked={state.isChecked} onChange={handleChange} />
                </label>
                <br />
                <label>
                    <input name="gender" type="radio" value="male" checked={state.gender === "male"} onChange={handleChange} />
                    Male
                </label>
                <br />
                <label>
                    <input name="gender" type="radio" value="female" checked={state.gender === "female"} onChange={handleChange} />
                    Female
                </label>
                <br />
                <label>
                    Price (between 0 and $10,000):
                    <input name="price" type="range" min="0" max="10000" value={state.price} onChange={handleChange}/>
                </label>
                <br />
                <input type="submit"/>
            </form>
            <h5> First name: {state.fname} </h5>
            <h5> Last name: {state.lname} </h5>
            <p> Message: {state.message}</p>
            <h5>Favorite car brand: {state.carBrand}</h5>
            <h5> Is it checked? {state.isChecked ? "Yes" : "No"}</h5>
            <h5> Gender : {state.gender}</h5>
            <h5>Price : ${state.price}</h5>
        </>
    );
}
export default ControlledForm;