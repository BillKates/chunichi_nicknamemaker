// src/main.js
console.log("main.js!!");

// 1, Vue.jsで扱うデータを用意する
const myData = {
	appName: "ニックネームメーカー",// アプリ名
	nickname: "ニックネーム",// ニックネーム
	names: [
		"ビシエド",
		"マルティネス",
		"アキーノ",
		"カリステ",
		"アルモンテ"
	]
}

// 2, Vue.jsの準備をする
const app = Vue.createApp({
	data(){
		return myData;// 扱うデータを指定する
	},
	created(){
		console.log("created!!");
		this.roulette();// roulette関数を実行する
	},
	methods:{
		roulette(){// 現在時刻を取得する関数
			console.log("roulette!!");
			// ランダムを使って1つだけ選択する
			let rdm = Math.random() * this.names.length;// 乱数と配列の要素数を掛け算
			let index = Math.floor(rdm);// 整数に変換(配列の添字)
			this.nickname = this.names[index];// ニックネームの決定
		}
	}
});
app.mount("#app");// 3, Vue.jsを起動する
