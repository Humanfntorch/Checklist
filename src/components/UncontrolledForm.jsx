import React from "react";
import { useRef } from "react";
/* Uncontrolled form is similar to the OG HTML form
    React allows the DOM to handle input data.

    We can access the input from the DOM by using a ref to 
    access the element
*/

const UncontrolledForm = () =>
{   
    const ref = useRef();
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        alert(ref.current.value);
    };


    return (
        <React.Fragment>
            <h1> React Uncontrolled Form Handling</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    {/* We can not use value="x" in the tag as it overrides the value in the DOM...
                    it immediately convert it to read only
                    use defaultValue="x" instead
                    Typically we avoid placing an init value in uncontrolled forms*/}
                    First Name: <input type="text" defaultValue="Jacob" ref={ref} />
                </label>
                {/* Creates a submit button. Excluding will allow us to simply press return to submit*/ }
                <input type="submit" />
            </form>
        </React.Fragment>
    );
}
export default UncontrolledForm;