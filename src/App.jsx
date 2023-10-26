// import

// import "□□□"
// import "ファイルパス or パッケージ名"
// import './App.css'

// import ◯◯◯ from "□□□"
// import 名前 from "ファイル"
// const 名前 = 0

// import { △△△ } from "□□□"
// const obj = {a: 0, b: 1}
// console.log(obj.a);

// const {a, b } = {a: 0, b: 1}
// console.log(a);

// パッケージを使えるようにしている
import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios";

import { TextField } from "./components/TextField";

function App() {
	// const [count, setCount] = useState(0)
	// const [list, setList] = useState([])
	const [text, setText] = useState("");

	return (
		<div className="box">
			<div className="icon">
				<img src="/profile01.png" alt="" />
			</div>
			<div className="text01">
				<p>
					ポメラニアンもちは
					<br />犬 と 人間 と おもち の間の<br></br>
					いきものです。
				</p>
			</div>
			<div className="text02">
				<p>
					自分が何者なのか
					<br />
					なやむこともあるけれど
				</p>
			</div>
			<div className="text03">
				<p>
					大抵の日は
					<br />
					のんびりまったり
					<br />
					暮らしています。
				</p>
			</div>
		</div>
	);
}

export default App;
