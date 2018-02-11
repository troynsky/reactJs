import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends Component {

    constructor() {
        super();
        this.state = {
            question: '',
            answer: ''
        };
        this.handleClick = this.handleClick.bind(this);

    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <h2>Верстка калькулятора</h2>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="4"><input value={this.state.question} style={{textAlign: 'right'}}/></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><input value={this.state.answer} style={{textAlign: 'right'}}/></td>
                    </tr>

                    <tr>
                        <td>
                            <Button label={'1'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'2'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'3'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'c'} handleClick={this.handleClick}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Button label={'4'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'5'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'6'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'+'} handleClick={this.handleClick}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Button label={'7'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'8'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'9'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'-'} handleClick={this.handleClick}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Button label={'*'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'0'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'/'} handleClick={this.handleClick}/>
                        </td>
                        <td>
                            <Button label={'='} handleClick={this.handleClick}/>
                        </td>
                    </tr>
                    </tbody>
                </table>


            </div>
        );
    }

    handleClick(event) {
        const value = event.target.value;

        switch (value) {
            case '=': {
                // Знаю знаю так лучше никогда не делать, случайно введи два плюса и ошибка - но у нас идеальный мир ))
                const answer = eval(this.state.question).toString();
                this.setState({answer});
                break;
            }
            case 'c': {
                this.setState({question: '', answer: ''});
                break;
            }
            default: {
                this.setState({question: this.state.question += value});
                break;
            }
        }

    }


}

export default App;
