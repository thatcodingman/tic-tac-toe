import styles from  './styles.css';
import React, { useEffect, useState } from "react";
function Square({value, onClick}){
    return<button onClick={onClick}  className="square">{value}</button>
}


export default function TicTacToe(){
const [squares, setSquares] = useState(Array(9).fill(''))
const [isXTurn, setIsXturn] = useState(true);
const [status, setStatus] = useState(' ')
function getWinner(squares){
    const winningPattrns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
    ]; 
    for (let i = 0 ;i <winningPattrns.length; i++){
        const [x,y,z] = winningPattrns[i]
        if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x ]
        }

    }
    return null;
}
function handleClick(getCurrentSquare){
 let cpySquares = [...squares];  
 if (getWinner(cpySquares) ||  cpySquares[getCurrentSquare]) return;
 cpySquares [getCurrentSquare] = isXTurn ? 'X' : 'O'; 
 setIsXturn(!isXTurn);
 setSquares(cpySquares); 
}
 useEffect(()=> { 
if (!getWinner(squares) && squares.every((item) => item !== "")){
    setSquares('Draw please retry')
} else if (getWinner(squares)) { 
    setStatus ('Winner is ${getWinner(squares)}. please restart the game')
} else  {

}

 },squares,isXTurn )
return (
    <div className="tic-tac-toe-container"> 
    <div className="row">
    <Square value={squares[0]} onClick={()=>handleClick(0)}/> 
    <Square value={squares[1]} onClick={()=>handleClick(1)}/> 
    <Square value={squares[2]} onClick={()=>handleClick(2)}/> 
    </div> 

<div className="row">
<Square value={squares[3]} onClick={()=>handleClick(3)}/> 
<Square value={squares[4]} onClick={()=>handleClick(4)}/> 
<Square value={squares[5]} onClick={()=>handleClick(5)}/> 

</div>
<div className="row">
<Square value={squares[6]} onClick={()=>handleClick(6)}/> 
<Square value={squares[7]} onClick={()=>handleClick(7)}/> 
<Square value={squares[8]} onClick={()=>handleClick(8)}/>  
</div>
<h1>{status}</h1>
    </div>
)
}