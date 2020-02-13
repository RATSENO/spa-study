import React from 'react';

class FormComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            inputValue : '',
            selectValue : ''
        }
    }

    handleUserNameInput = (e) => {
        this.setState({
            inputValue : e.target.value
        })
    }

    handleTitleSelect = (e) => {
        this.setState({
            selectValue : e.target.value
        })
    }

    render(){
        return(
            <div>
                <form>
                    이름 : <input type="text" name="username" onChange={this.handleUserNameInput}></input><br/>
                    직책 : 
                    <select onChange={this.handleTitleSelect}>
                        <option>선택</option>
                        <option value="first">대리</option>
                        <option value="second">과장</option>
                        <option value="third">차장</option>
                        <option value="fourth">부장</option>
                    </select><br/>
                    합 - <span>{this.state.inputValue} : {this.state.selectValue}</span>
                </form>
            </div>
        )
    }
}

export default FormComponent;