import { Component } from "react";

class Counter extends Component {
    /*컴포넌트에 state를 설정할 때는 constructor 메서드를 작성함. */
    /*constructor(props) {
        super(props);
        //state의 초기값 설정!!
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    };*/

    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state;  //state 조회 시 this.state 조회.

        return (
            < div >
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>

                <button onClick={() => {
                    //this.setState를 사용하여 state에 새로운 값 할당. 
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        }
                    });

                    this.setState(prevState => ({
                        number : prevState.number + 1
                    }));
                }}>

                    +1
                </button>

            </div >

        );
    }
}

export default Counter;