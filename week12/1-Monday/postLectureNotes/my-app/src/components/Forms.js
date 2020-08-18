import React, { Component } from 'react'

class Forms extends Component {

    constructor() {
        super()
        this.state = {
            textValue : "",
            isValid: false,
            selectValue: ''
        }
        // this.handleform = this.handleform.bind(this)
    }

    handleForm = (e) =>{

        e.preventDefault()
        console.log("form was submitted")
    }

    handleChange = (e) => {
        // console.log(e.target.value)

        // console.log(e.target.checked)
        let targetType = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        let name = e.target.name;

        this.setState({
            [name]: targetType
        }, () =>{
            console.log(this.state)
        })

        // this.setState({

        //     textValue: e.target.value
        // })
    }

    // handleCheck = (e) => {
    //     this.setState({
    //         isValid: e.target.checked
    //     },()=>{
    //         console.log(this.state.isValid)
    //     })
    // }

    

    render() {
        return (
            <div>
                <h1>React Forms</h1>

                <form onSubmit={this.handleForm}>
                <input name="textValue" type='text' onChange={(e)=>this.handleChange(e)}/>
                {this.state.textValue}


                <input name="isValid" type="checkbox" checked={this.state.isValid} onChange={this.handleChange}/>
                <select name="selectValue" onChange={this.handleChange}>
                    <option value='New York'>New York</option>
                    <option value='Houston'>Houston</option>
                    <option value='Atlanta'>Atlanta</option>
                    <option value='Seattle'>Seattle</option>
                    <option value='Detroit'>Detroit</option>
                </select>

                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Forms