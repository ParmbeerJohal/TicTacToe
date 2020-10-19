import React, { useState, useEffect } from 'react';
import { Button, Table, Col, InputGroupAddon, InputGroup, Input } from 'reactstrap';
import axios from 'axios';

export const TicTacToe: React.FC<any> = () => {

    const [turn, setTurn] = useState('X');

    const [array, setArray] = useState(['','','','','','','','','']);

    const [winner, setWinner] = useState('');

    const [bool, setBool] = useState(false);

    
    useEffect(() => {
        const gameString = array.join('');
        console.log('gameString: ', gameString);

        // 8 possible ways to win
        if (
            (array[0] === array[1] && array[0] === array[2]) && (array[0] === 'X' || array[0] === 'O') ||
            (array[3] === array[4] && array[3] === array[5]) && (array[3] === 'X' || array[3] === 'O') ||
            (array[6] === array[7] && array[6] === array[8]) && (array[6] === 'X' || array[6] === 'O') ||
            (array[0] === array[3] && array[0] === array[6]) && (array[0] === 'X' || array[0] === 'O') ||
            (array[1] === array[4] && array[1] === array[7]) && (array[1] === 'X' || array[1] === 'O') ||
            (array[2] === array[5] && array[2] === array[8]) && (array[2] === 'X' || array[2] === 'O') ||
            (array[0] === array[4] && array[0] === array[8]) && (array[0] === 'X' || array[0] === 'O') ||
            (array[2] === array[4] && array[2] === array[6]) && (array[2] === 'X' || array[2] === 'O')
        ) {
            setWinner('You Win!');
            setBool(true);
        }

        // TODO: Update backend
    });

    // When username is submitted, it gets
    // stored in the backend database and a new
    // user and board is created
    const submitUser = async (e: any) => {
        const data = {username: e.target.value};
        const response = await axios.post(
            'http://localhost:8000/tictactoe/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data
            }
        
        );
        console.log(response);
    }

    const clickHandler = (e: any) => {
        array[e.target.id] = turn;
        setArray([...array]);
        console.log("Array after click: ", array);

        if(turn === 'X') {
            setTurn('O');
        } else {
            setTurn('X');
        }
        e.target.disabled = true;
    };

    return (
    <Col>
    <div className="row justify-content-center mt-5">
        <div className="col-auto">
            <Table className="table table-responsive" bordered>
                <thead className="row justify-content-center">
                    { winner === '' ? (<>turn: {turn}</>) : (<>winner: {winner}</>)}
                </thead>
                <tbody>
                    <tr>
                        <td><Button id="0" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[0]} onClick={(e: any) => clickHandler(e)}>{array[0]}</Button></td>
                        <td><Button id="1" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[1]} onClick={(e: any) => clickHandler(e)}>{array[1]}</Button></td>
                        <td><Button id="2" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[2]} onClick={(e: any) => clickHandler(e)}>{array[2]}</Button></td>
                    </tr>
                    <tr>
                        <td><Button id="3" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[3]} onClick={(e: any) => clickHandler(e)}>{array[3]}</Button></td>
                        <td><Button id="4" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[4]} onClick={(e: any) => clickHandler(e)}>{array[4]}</Button></td>
                        <td><Button id="5" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[5]} onClick={(e: any) => clickHandler(e)}>{array[5]}</Button></td>
                    </tr>
                    <tr>
                        <td><Button id="6" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[6]} onClick={(e: any) => clickHandler(e)}>{array[6]}</Button></td>
                        <td><Button id="7" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[7]} onClick={(e: any) => clickHandler(e)}>{array[7]}</Button></td>
                        <td><Button id="8" disabled={bool} className="btn btn-light" size="lg" style={{height: '10vh', width: '10vw'}} value={array[8]} onClick={(e: any) => clickHandler(e)}>{array[8]}</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
    <h1>enter username:</h1>
    <InputGroup>
        <Input placeholder="enter your username here" />
        <InputGroupAddon addonType="append">
          <Button color="success" onClick={(e) => submitUser(e)}>Submit</Button>
        </InputGroupAddon>
      </InputGroup>
    </Col>
    );
};