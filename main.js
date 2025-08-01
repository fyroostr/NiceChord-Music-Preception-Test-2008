const player = document.querySelector("audio");

const qs = [
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？",
		c: ["完全相同", "有些不同"]
	}, // 1
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？",
		c: ["完全相同", "有些不同"]
	}, // 2
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？",
		c: ["完全相同", "有些不同"]
	}, // 3
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？",
		c: ["完全相同", "有些不同"]
	}, // 4
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？",
		c: ["完全相同", "不相同，兩個片段的「音高」有些不同", "不相同，兩個片段的「節奏」有些不同"]
	}, // 5
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？",
		c: ["完全相同", "不相同，兩個片段的「音高」有些不同", "不相同，兩個片段的「節奏」有些不同"]
	}, // 6
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？",
		c: ["完全相同", "不相同，兩個片段的「音高」有些不同", "不相同，兩個片段的「節奏」有些不同", "不相同，兩個片段的「音高和節奏」都有些不同"]
	}, // 7
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？",
		c: ["完全相同", "不相同，兩個片段的「音高」有些不同", "不相同，兩個片段的「節奏」有些不同", "不相同，兩個片段的「音高和節奏」都有些不同"]
	}, // 8
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。音樂片段是由電吉他、電貝斯和爵士鼓演奏。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？如果不相同，請指出是哪一個樂器的部份不同。",
		c: ["完全相同", "不相同，兩個片段的「電吉他部份」有些不同", "不相同，兩個片段的「電貝斯部份」有些不同", "不相同，兩個片段的「爵士鼓部份」有些不同"]
	}, // 9
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。音樂片段是由電鋼琴、電貝斯和合成鼓組演奏，請注意聽當中電鋼琴的部份。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？如果不相同，請明確指出它們如何不同。",
		c: ["完全相同", "不相同，電鋼琴彈的「音高」有些不同", "不相同，電鋼琴彈的「節奏」有些不同", "不相同，電鋼琴彈的「音高和節奏」都有些不同"]
	}, // 10
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。音樂片段是由鋼琴、低音提琴和爵士鼓演奏。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？如果不相同，請指出是哪一個樂器的部份不同。",
		c: ["完全相同", "不相同，兩個片段的「鋼琴部份」有些不同", "不相同，兩個片段的「低音提琴部份」有些不同", "不相同，兩個片段的「鋼琴和低音提琴部份」都有些不同"]
	}, // 11
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？如果不相同，請明確指出它們如何不同。",
		c: ["完全相同", "不相同，兩個片段的「音高」有些不同", "不相同，兩個片段的「節奏」有些不同", "不相同，兩個片段的「音高和節奏」都有些不同"]
	}, // 12
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？如果不相同，請明確指出它們如何不同。",
		c: ["完全相同", "不相同，兩個片段的「音高」有些不同", "不相同，兩個片段的「節奏」有些不同", "不相同，兩個片段的「音高和節奏」都有些不同"]
	}, // 13
	{
		d: "按下播放鈕後，會連續播放兩個音樂片段，兩個片段之間會有約兩秒鐘的間隔。音樂片段是由鋼琴、電貝斯和爵士鼓演奏。你有兩次的播放機會，請仔細聽兩個音樂片段，然後回答下面的問題。",
		q: "這兩個音樂片段是否相同？如果不相同，請指出是哪一個樂器的部份不同。",
		c: ["完全相同", "不相同，兩個片段的「鋼琴部份」有些不同", "不相同，兩個片段的「爵士鼓部份」有些不同", "不相同，兩個片段的「鋼琴和爵士鼓部份」都有些不同"]
	}, // 14
	{
		d: "第 15-17 題，將測驗你將音樂視覺化的能力。\n按下播放鈕後，會播放一個音樂片段，請選出最能代表這個音樂片段的圖形。你有兩次的播放機會。",
		q: "以下哪一個圖形，最能代表剛才播放的音樂片段？",
		c: [
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<rect class="rounded" x="100" y="15" width="40" height="40"/>
				<rect class="rounded" x="145" y="40" width="40" height="40"/>
				<rect class="rounded" x="190" y="15" width="40" height="40"/>
				<rect class="rounded" x="235" y="40" width="40" height="40"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<rect class="rounded" x="100" y="15" width="40" height="40"/>
				<rect class="rounded" x="145" y="30" width="40" height="40"/>
				<rect class="rounded" x="190" y="15" width="40" height="40"/>
				<rect class="rounded" x="235" y="40" width="40" height="40"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<rect class="rounded" x="100" y="15" width="40" height="40"/>
				<rect class="rounded" x="145" y="40" width="40" height="40"/>
				<rect class="rounded" x="190" y="15" width="40" height="40"/>
				<rect class="rounded" x="235" y="30" width="40" height="40"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<rect class="rounded" x="100" y="15" width="40" height="40"/>
				<rect class="rounded" x="145" y="30" width="40" height="40"/>
				<rect class="rounded" x="190" y="5" width="40" height="40"/>
				<rect class="rounded" x="235" y="40" width="40" height="40"/>
			</svg>`
		]
	}, // 15
	{
		d: "按下播放鈕後，會播放一個音樂片段，請選出最能代表這個音樂片段的圖形。你有兩次的播放機會。",
		q: "以下哪一個圖形，最能代表剛才播放的音樂片段？",
		c: [
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<rect class="rounded" x="100" y="15" width="40" height="40"/>
				<rect class="rounded" x="145" y="40" width="40" height="40"/>
				<rect class="rounded" x="190" y="15" width="40" height="40"/>
				<rect class="rounded" x="235" y="40" width="40" height="40"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<rect class="rounded" x="100" y="15" width="40" height="40"/>
				<rect class="rounded" x="145" y="30" width="40" height="40"/>
				<rect class="rounded" x="190" y="15" width="40" height="40"/>
				<rect class="rounded" x="235" y="40" width="40" height="40"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<rect class="rounded" x="100" y="15" width="40" height="40"/>
				<rect class="rounded" x="145" y="40" width="40" height="40"/>
				<rect class="rounded" x="190" y="30" width="40" height="40"/>
				<rect class="rounded" x="235" y="55" width="40" height="40"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<rect class="rounded" x="100" y="15" width="40" height="40"/>
				<rect class="rounded" x="145" y="35" width="40" height="40"/>
				<rect class="rounded" x="190" y="5" width="40" height="40"/>
				<rect class="rounded" x="235" y="45" width="40" height="40"/>
			</svg>`
		]
	}, // 16
	{
		d: "按下播放鈕後，會播放一個音樂片段，請選出最能代表這個音樂片段的圖形。你有兩次的播放機會。",
		q: "以下哪一個圖形，最能代表剛才播放的音樂片段？",
		c: [
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<circle cx="55" cy="25" r="5"/>
				<circle cx="70" cy="25" r="5"/>
				<line class="bar" x1="85" y1="10" x2="85" y2="90"/>
				<circle cx="100" cy="70" r="5"/>
				<circle cx="115" cy="70" r="5"/>
				<line class="note" x1="125" y1="60" x2="150" y2="60"/>
				<line class="bar" x1="165" y1="10" x2="165" y2="90"/>
				<circle cx="180" cy="25" r="5"/>
				<circle cx="195" cy="25" r="5"/>
				<line class="note" x1="210" y1="25" x2="235" y2="25"/>
				<line class="bar" x1="250" y1="10" x2="250" y2="90"/>
				<circle cx="265" cy="70" r="5"/>
				<circle cx="280" cy="70" r="5"/>
				<line class="note" x1="290" y1="60" x2="315" y2="60"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<circle cx="55" cy="25" r="5"/>
				<circle cx="70" cy="25" r="5"/>
				<line class="bar" x1="85" y1="10" x2="85" y2="90"/>
				<circle cx="100" cy="70" r="5"/>
				<circle cx="115" cy="70" r="5"/>
				<line class="note" x1="135" y1="60" x2="160" y2="60"/>
				<line class="bar" x1="175" y1="10" x2="175" y2="90"/>
				<circle cx="190" cy="25" r="5"/>
				<circle cx="205" cy="25" r="5"/>
				<line class="note" x1="220" y1="25" x2="245" y2="25"/>
				<line class="bar" x1="260" y1="10" x2="260" y2="90"/>
				<circle cx="275" cy="70" r="5"/>
				<circle cx="290" cy="70" r="5"/>
				<line class="note" x1="310" y1="60" x2="335" y2="60"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<circle cx="55" cy="25" r="5"/>
				<circle cx="70" cy="25" r="5"/>
				<line class="bar" x1="85" y1="10" x2="85" y2="90"/>
				<circle cx="100" cy="70" r="5"/>
				<circle cx="115" cy="70" r="5"/>
				<line class="note" x1="125" y1="60" x2="150" y2="60"/>
				<line class="bar" x1="165" y1="10" x2="165" y2="90"/>
				<circle cx="180" cy="25" r="5"/>
				<circle cx="195" cy="25" r="5"/>
				<circle cx="225" cy="25" r="5"/>
				<line class="bar" x1="240" y1="10" x2="240" y2="90"/>
				<circle cx="255" cy="70" r="5"/>
				<circle cx="270" cy="70" r="5"/>
				<line class="note" x1="280" y1="60" x2="305" y2="60"/>
			</svg>`,
			`<svg viewbox="0 0 380 100" width="380" height="100">
				<rect class="outline" x="1" y="1" width="378" height="98"/>
				<circle cx="55" cy="25" r="5"/>
				<circle cx="70" cy="25" r="5"/>
				<line class="bar" x1="85" y1="10" x2="85" y2="90"/>
				<circle cx="100" cy="70" r="5"/>
				<circle cx="115" cy="70" r="5"/>
				<line class="note" x1="125" y1="60" x2="150" y2="60"/>
				<line class="bar" x1="165" y1="10" x2="165" y2="90"/>
				<circle cx="180" cy="25" r="5"/>
				<circle cx="195" cy="25" r="5"/>
				<line class="note" x1="220" y1="25" x2="245" y2="25"/>
				<line class="bar" x1="260" y1="10" x2="260" y2="90"/>
				<circle cx="275" cy="70" r="5"/>
				<circle cx="290" cy="70" r="5"/>
				<line class="note" x1="300" y1="60" x2="325" y2="60"/>
			</svg>`
		]
	}, // 17
	{
		d: "第 18-20 題，要測試你的心理節拍穩定度。\n按下播放鈕後，會播放一個音樂片段，仔細聽音樂的速度變化。你有兩次的播放機會。",
		q: "這個音樂片段的速度變化為何？",
		c: ["速度完全沒有變化", "越來越快", "越來越慢"]
	}, // 18
	{
		d: "按下播放鈕後，會播放一個音樂片段，仔細聽音樂的速度變化。你有兩次的播放機會。",
		q: "這個音樂片段的速度變化為何？",
		c: ["速度完全沒有變化", "越來越快", "越來越慢"]
	}, // 19
	{
		d: "按下播放鈕後，會播放一個音樂片段，仔細聽音樂的速度變化。你有兩次的播放機會。",
		q: "這個音樂片段的速度變化為何？",
		c: ["速度完全沒有變化", "越來越快", "越來越慢"]
	}, // 20
	{
		d: "最後六題，也就是第 21-26 題，要測試你的節奏辨識力和記憶力。\n按下播放鈕後，會播放一個用鼓演奏的音樂片段，你要算出鼓總共敲了幾下。你有兩次的播放機會。",
		q: "鼓總共敲了幾下？",
		c: ["10", "11", "12", "13"]
	}, // 21
	{
		d: "按下播放鈕後，會播放一個用鼓演奏的音樂片段，你要算出鼓總共敲了幾下。你有兩次的播放機會。",
		q: "鼓總共敲了幾下？",
		c: ["10", "11", "12", "13"]
	}, // 22
	{
		d: "按下播放鈕後，會播放一個用鼓演奏的音樂片段，你要算出鼓總共敲了幾下。你有兩次的播放機會。",
		q: "鼓總共敲了幾下？",
		c: ["17", "18", "19", "20"]
	}, // 23
	{
		d: "按下播放鈕後，會播放一個用鼓演奏的音樂片段，你要算出鼓總共敲了幾下。你有兩次的播放機會。",
		q: "鼓總共敲了幾下？",
		c: ["22", "23", "24", "25"]
	}, // 24
	{
		d: "按下播放鈕後，會播放一個用鼓演奏的音樂片段，你要算出鼓總共敲了幾下。你有兩次的播放機會。",
		q: "鼓總共敲了幾下？",
		c: ["23", "24", "25", "26"]
	}, // 25
	{
		d: "按下播放鈕後，會播放一個用鼓演奏的音樂片段，你要算出鼓總共敲了幾下。你有兩次的播放機會。",
		q: "鼓總共敲了幾下？",
		c: ["28", "29", "30", "31"]
	}, // 26
];
const ps = { test: 0 };
const cs = {};
let as = "";
const corrects = "ababbbadcbdabcacdbcbbdcacb";
const trophies = {
	test1: false,  // Listened to the test clip 10 times
	test2: false,  // Listened to each question only once
	test3: false,  // Each question was revised at least once from the original answer
	test4: false,  // Guessed the answers (didn't listen to each question)
	test5: false,  // After answering the last question, it was revisited from the first question again
};

const sum = () => {
	const eDiv = document.querySelector("div.trophies");
	const list = eDiv.querySelector("ul");
	let has = false;
	list.innerHTML = "";

	trophies.test1 = ps.test >= 10;
	trophies.test2 = Object.entries(ps).filter(([key]) => key !== "test").every(([_, value]) => value === 1);
	trophies.test3 = Object.values(cs).every(value => value > 0);
	trophies.test4 = Object.entries(ps).filter(([key]) => key !== "test").every(([_, value]) => value === 0);

	if (trophies.test1) {
		list.insertAdjacentHTML("beforeend", `<li>一絲不苟：因聽了 10 次測試音樂片段而獲得</li>`);
		has = true;
	}
	if (trophies.test2) {
		list.insertAdjacentHTML("beforeend", `<li>一聽鍾情：因每道題只聽了一遍就回答而獲得</li>`);
		has = true;
	}
	if (trophies.test3) {
		list.insertAdjacentHTML("beforeend", `<li>朝三暮四：因每道題都修改了原本的答案而獲得</li>`);
		has = true;
	}
	if (trophies.test4) {
		list.insertAdjacentHTML("beforeend", `<li>盲人摸象：因所有題目都沒有聽，直接猜而獲得</li>`);
		has = true;
	}
	if (trophies.test5) {
		list.insertAdjacentHTML("beforeend", `<li>走馬觀花：因完成最後一道題後又返回第一題瀏覽而獲得</li>`);
		has = true;
	}
	if (has) {
		eDiv.style.display = "block";
	} else {
		eDiv.style.display = "none";
	}
}

const score = () => {
	let count = 0;
	if (corrects.length === as.length) {
		for (let i = 0; i<corrects.length; ++i) {
			if (corrects[i] === as[i]) {
				count++;
			}
		}
	}

	// TODO

	document.querySelector(`[name="score-total"]`).textContent = count;
	document.querySelector(`[name="score-preception"]`).textContent = "?";
	document.querySelector(`[name="score-rhythm"]`).textContent = "?";
	document.querySelector(`[name="score-memory"]`).textContent = "?";
	document.querySelector(`[name="score-focus"]`).textContent = "?";
	document.querySelector(`[name="score-overall"]`).textContent = "?";
}

const progressBar = () => {
	const p = document.querySelector(".progress");
	p.style.width = `${as.length/qs.length*100}%`;
}

const makeQuiz = () => {
	let current = document.querySelector(".quiz[name='start']");
	for (let i = 0; i < qs.length; ++i) {
		const ir = String(i + 1).padStart(2, '0');
		const newQuiz = document.createElement("div");
		newQuiz.className = "quiz";
		newQuiz.innerHTML = `<h1><button class="arrow" name="prev">&#10094;</button>${ir}<button class="arrow disable" name="next">&#10095;</button></h1>
<p>${qs[i].d.replace("\n", "</p><p>")}</p>
<p><button name="play" value="${ir}">▶ 播放</button> <span></span></p>
<p class="question">${qs[i].q}</p>`;
		newQuiz.innerHTML += qs[i].c.map((text, idx) => {
			const alpha = String.fromCharCode(97 + idx);
			return `<p><label><input type="radio" name="${ir}" value="${alpha}" hidden><b>${alpha}. </b>${text}</label></p>`;
		}).join('\n');
		current.insertAdjacentElement("afterend", newQuiz);
		current = newQuiz;
		ps[ir] = 0;
		cs[ir] = 0;
	}
}

const slideNext = () => {
	const current = document.querySelector(".quiz.active");
	const next = current.nextElementSibling;
	if (next) {
		current.classList.remove("active");
		current.classList.add("pass");
		next.classList.add("active");
	}
}

const slidePrev = () => {
	const current = document.querySelector(".quiz.active");
	const prev = current.previousElementSibling;
	if (prev) {
		current.classList.remove("active");
		prev.classList.add("active");
		prev.classList.remove("pass");
	}
	/* <test5> */
	if (prev.querySelector("h1").textContent.includes("01") && as.length === 26) {
		trophies.test5 = true;
	}
}

const onClick = event => {
	switch (true) {
		case event.target.matches("button[name]"): {
			switch (event.target.name) {
				case "next": {
					slideNext();
					break;
				}
				case "prev": {
					slidePrev();
					break;
				}
				case "play": {
					if (!event.target.classList.contains("disable")) {
						if (player.src && !player.paused && player.currentTime > 0 && !player.ended) {
							onEnded();
						}
						player.src = "assets/" + event.target.value + ".mp3";
						player.currentTime = 0;
						player.play();
						event.target.classList.add("disable");
						event.target.textContent = "播放中…";
						ps[event.target.value]++;
						if (event.target.value !== "test") {
							event.target.nextElementSibling.textContent = `已播放 ${ps[event.target.value]} 次。`;
						}
					}
					break;
				}
			}
			break;
		}
		case event.target.matches("input[type='radio']"): {
			const n = parseInt(event.target.name) - 1;
			if (as.length === n) {
				as += event.target.value;
				progressBar();
			} else if (as.length > n) {
				if (event.target.value !== as[n]) {
					as = as.slice(0, n) + event.target.value + as.slice(n + 1);
					cs[event.target.name]++;
				}
			}
			if (as.length === qs.length) {
				sum();
				score();
			}
			const current = event.target.closest("div.quiz");
			const e = current.querySelector("button.arrow.disable");
			if (e && current.nextElementSibling) {
				e.classList.remove("disable");
			}
			slideNext();
			break;
		}
	}
}

const onEnded = () => {
	const n = new URL(player.src).pathname.split("/").pop().split(".")[0];
	const btn = document.querySelector(`button[name="play"][value="${n}"]`);
	if (n === "test") {
		btn.classList.remove("disable");
		btn.textContent = "测试音量";
	} else {
		if (ps[n] < 2) {
			btn.classList.remove("disable");
			btn.textContent = "▶ 播放";
		} else {
			btn.textContent = "▶ 播放";
		}
	}
}

const init = () => {
	makeQuiz();
	progressBar();
}

player.addEventListener("ended", onEnded);
document.addEventListener("click", onClick);
addEventListener("DOMContentLoaded", init);
