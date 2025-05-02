import React, { useEffect, useState } from 'react';
import MiniBoard from './MiniBoard';


export default function Square({ val, setVal, setIndex, stl, id, board, setboard ,check1,checkwin,checkdraw}) {
  const [check, setCheck] = useState(false);
  const [draw,setDraw] = useState(false);
  const [val2, setVal2] = useState("");

  useEffect(() => {
    if (check) {
        setboard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[id] = val2;
        return newBoard;
      });
    }
    if(draw){
        setboard((prevBoard) => {
            const newBoard = [...prevBoard];
            newBoard[id] = "None";
            return newBoard;
          });
    }
  }, [check, id, val2, setboard,draw]);


  const style1 = {
    width: "300px",
    height: "300px",
    border: "1px solid black",
    borderRadius: "5px",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
  
    pointerEvents: 'none',
    opacity: 1,
  };

  const style2 = {
    width: "300px",
    height: "300px",
    border:val==="X"? "2px solid blue":"2px solid red",
    borderRadius: "5px",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className='square' style={stl ? style2 : style1}>
      <MiniBoard
        setIndex={setIndex}
        val={val}
        setCheck={setCheck}
        setVal={setVal}
        check={check}
        setVall={setVal2}
        draw={draw}
        setDraw={setDraw}
        check1={check1}
        checkwin={checkwin}
        checkdraw={checkdraw}
      />
    </div>
  );
}
