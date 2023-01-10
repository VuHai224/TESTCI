import React from "react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import "./Decimal.css";

const Decimal = () => {
  const [decimal, setDecemal] = useState("where magic happens");
  const [err, setErr] = useState(1);
  const handle = (e) => {
    let tmp = e.target.value;
    if (parseInt(tmp) && parseInt(tmp) < 3000) {
      setErr(2);
      setDecemal(convert(parseInt(tmp)));
    } else {
      setErr(3);
      setDecemal("where magic happens");
    }
  };
  const convert = (number) => {
    let str = "";
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    for (let i of Object.keys(roman)) {
      let q = Math.floor(number / roman[i]);
      number -= q * roman[i];
      str += i.repeat(q);
    }
    return str;
  };
  return (
    <div className="main">
      <h2 className="title">Decimal to ROMAN</h2>
      <p className="subtitle">
        Enter your decimal number and magic will happens
      </p>
      <div className="container">
        <div className="input">
          <Input
            label=" "
            rounded
            bordered
            type="text"
            placeholder="Enter your decimal number"
            width="400px"
            color={err == 1 ? "primary" : err == 2 ? "success" : "error"}
            onChange={handle}
          ></Input>
          {err === 3 && (
            <p className="error">
              Your number must be integer and lower than 3000.
            </p>
          )}
          {err === 2 && <p className="success">Look Good.</p>}
        </div>
      </div>
      <h1 className="display">{decimal}</h1>
    </div>
  );
};

export default Decimal;
