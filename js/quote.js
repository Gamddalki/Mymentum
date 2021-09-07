const quotes = [
  {
    quote:
      "오직 마음으로 보아야 잘 보인다는 거야. 가장 중요한 건 눈에 보이지 않아.",
    from: "생텍쥐베리 [어린왕자]",
  },
  {
    quote: "네가 오후 네 시에 온다면 난 세 시부터 행복해지기 시작할거야.",
    from: "생텍쥐베리 [어린왕자]",
  },
  {
    quote: "행복해야 할 이유는 정말 많아!",
    from: "조이 [인사이드아웃]",
  },
  {
    quote:
      "잘못된 일에만 신경 쓰지 마. 항상 즐거움으로 되돌릴 방법은 있으니까!",
    from: "조이 [인사이드아웃]",
  },
  {
    quote: "네가 좋아하는 것을 하고, 네가 하는 것을 사랑해.",
    from: "라푼젤 [라푼젤]",
  },
  {
    quote: "누군가를 위해서라면 기꺼이 녹을 수 있어.",
    from: "올라프 [겨울왕국]",
  },
  {
    quote: "모든 모험은 첫 걸음이 필요해.",
    from: "앨리스 [이상한 나라의 앨리스]",
  },
  {
    quote: "내 기분은 내가 정해. 오늘 나는 행복으로 할래.",
    from: "앨리스 [이상한 나라의 앨리스]",
  },
  { quote: "지칠테지만 믿음을 잃지 마.", from: "아리엘 [인어공주]" },
  {
    quote:
      "매일매일이 좋을 순 없어. 그런데 잘 찾아보면 매일매일 좋은 일은 있다구!",
    from: "티거 [곰돌이 푸]",
  },
];

const quote = document.querySelector("#quote span:first-child");
const from = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
from.innerText = todaysQuote.from;
