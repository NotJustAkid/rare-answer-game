const prompts = [
  {
    question: "한국 과자 이름을 말해 보세요",
    answers: [
      { name: "새우깡", score: 5 },
      { name: "포카칩", score: 10 },
      { name: "빼빼로", score: 15 },
      { name: "홈런볼", score: 20 },
      { name: "초코파이", score: 30 },
      { name: "꼬북칩", score: 40 },
      { name: "오징어집", score: 55 },
      { name: "맛동산", score: 70 },
      { name: "꿀꽈배기", score: 85 },
      { name: "고래밥", score: 95 }
    ]
  },
  {
    question: "라면 브랜드나 종류를 말해 보세요",
    answers: [
      { name: "신라면", score: 5 },
      { name: "진라면", score: 10 },
      { name: "불닭볶음면", score: 15 },
      { name: "짜파게티", score: 20 },
      { name: "너구리", score: 25 },
      { name: "안성탕면", score: 35 },
      { name: "삼양라면", score: 45 },
      { name: "참깨라면", score: 60 },
      { name: "나가사끼짬뽕", score: 80 },
      { name: "틈새라면", score: 95 }
    ]
  },
  {
    question: "바다에 사는 동물을 말해 보세요",
    answers: [
      { name: "고래", score: 5 },
      { name: "상어", score: 10 },
      { name: "돌고래", score: 15 },
      { name: "문어", score: 20 },
      { name: "오징어", score: 25 },
      { name: "해파리", score: 35 },
      { name: "불가사리", score: 45 },
      { name: "해마", score: 60 },
      { name: "쥐가오리", score: 80 },
      { name: "갯민숭달팽이", score: 95 }
    ]
  },
  {
    question: "치킨 메뉴 이름을 말해 보세요",
    answers: [
      { name: "후라이드치킨", score: 5 },
      { name: "양념치킨", score: 10 },
      { name: "간장치킨", score: 15 },
      { name: "뿌링클", score: 20 },
      { name: "마늘치킨", score: 25 },
      { name: "허니콤보", score: 35 },
      { name: "고추바사삭", score: 45 },
      { name: "레드콤보", score: 60 },
      { name: "슈프림양념치킨", score: 80 },
      { name: "블랙알리오", score: 95 }
    ]
  },
  {
    question: "편의점에서 파는 음료를 말해 보세요",
    answers: [
      { name: "콜라", score: 5 },
      { name: "사이다", score: 10 },
      { name: "포카리스웨트", score: 15 },
      { name: "바나나우유", score: 20 },
      { name: "초코우유", score: 25 },
      { name: "비타500", score: 35 },
      { name: "밀키스", score: 45 },
      { name: "데자와", score: 60 },
      { name: "갈아만든배", score: 80 },
      { name: "실론티", score: 95 }
    ]
  },
  {
    question: "과일 이름을 말해 보세요",
    answers: [
      { name: "사과", score: 5 },
      { name: "바나나", score: 10 },
      { name: "딸기", score: 15 },
      { name: "수박", score: 20 },
      { name: "포도", score: 25 },
      { name: "오렌지", score: 35 },
      { name: "망고", score: 45 },
      { name: "두리안", score: 60 },
      { name: "리치", score: 80 },
      { name: "패션프루트", score: 95 }
    ]
  },
  {
    question: "악기 이름을 말해 보세요",
    answers: [
      { name: "피아노", score: 5 },
      { name: "기타", score: 10 },
      { name: "드럼", score: 15 },
      { name: "바이올린", score: 20 },
      { name: "플루트", score: 25 },
      { name: "색소폰", score: 35 },
      { name: "첼로", score: 45 },
      { name: "가야금", score: 60 },
      { name: "오카리나", score: 80 },
      { name: "카혼", score: 95 }
    ]
  },
  {
    question: "보드게임이나 카드게임 이름을 말해 보세요",
    answers: [
      { name: "할리갈리", score: 5 },
      { name: "루미큐브", score: 10 },
      { name: "부루마불", score: 15 },
      { name: "모노폴리", score: 20 },
      { name: "젠가", score: 25 },
      { name: "다빈치코드", score: 35 },
      { name: "스플렌더", score: 45 },
      { name: "뱅", score: 60 },
      { name: "아발론", score: 80 },
      { name: "윙스팬", score: 95 }
    ]
  },
  {
    question: "스마트폰 앱 이름을 말해 보세요",
    answers: [
      { name: "카카오톡", score: 5 },
      { name: "인스타그램", score: 10 },
      { name: "유튜브", score: 15 },
      { name: "네이버", score: 20 },
      { name: "틱톡", score: 25 },
      { name: "쿠팡", score: 35 },
      { name: "당근", score: 45 },
      { name: "에브리타임", score: 60 },
      { name: "토스", score: 80 },
      { name: "왓챠", score: 95 }
    ]
  },
  {
    question: "찌개나 국 요리 이름을 말해 보세요",
    answers: [
      { name: "김치찌개", score: 5 },
      { name: "된장찌개", score: 10 },
      { name: "미역국", score: 15 },
      { name: "된장국", score: 20 },
      { name: "순두부찌개", score: 25 },
      { name: "부대찌개", score: 35 },
      { name: "육개장", score: 45 },
      { name: "감자탕", score: 60 },
      { name: "청국장찌개", score: 80 },
      { name: "추어탕", score: 95 }
    ]
  },
  {
    question: "스포츠 종목을 말해 보세요",
    answers: [
      { name: "축구", score: 5 },
      { name: "야구", score: 10 },
      { name: "농구", score: 15 },
      { name: "배구", score: 20 },
      { name: "수영", score: 25 },
      { name: "배드민턴", score: 35 },
      { name: "테니스", score: 45 },
      { name: "펜싱", score: 60 },
      { name: "양궁", score: 80 },
      { name: "컬링", score: 95 }
    ]
  },
  {
    question: "아이스크림 맛이나 브랜드를 말해 보세요",
    answers: [
      { name: "바닐라", score: 5 },
      { name: "초코", score: 10 },
      { name: "딸기", score: 15 },
      { name: "민트초코", score: 20 },
      { name: "쿠앤크", score: 25 },
      { name: "메로나", score: 35 },
      { name: "월드콘", score: 45 },
      { name: "붕어싸만코", score: 60 },
      { name: "찰옥수수", score: 80 },
      { name: "비비빅", score: 95 }
    ]
  },
  {
    question: "집에서 흔히 볼 수 있는 물건을 말해 보세요",
    answers: [
      { name: "의자", score: 5 },
      { name: "책상", score: 10 },
      { name: "침대", score: 15 },
      { name: "텔레비전", score: 20 },
      { name: "냉장고", score: 25 },
      { name: "전자레인지", score: 35 },
      { name: "선풍기", score: 45 },
      { name: "가습기", score: 60 },
      { name: "체중계", score: 80 },
      { name: "재봉틀", score: 95 }
    ]
  },
  {
    question: "한국 영화 제목을 말해 보세요",
    answers: [
      { name: "기생충", score: 5 },
      { name: "부산행", score: 10 },
      { name: "극한직업", score: 15 },
      { name: "명량", score: 20 },
      { name: "베테랑", score: 25 },
      { name: "택시운전사", score: 35 },
      { name: "범죄도시", score: 45 },
      { name: "국제시장", score: 60 },
      { name: "살인의추억", score: 80 },
      { name: "리틀포레스트", score: 95 }
    ]
  },
  {
    question: "학교 건물이나 시설 이름을 말해 보세요",
    answers: [
      { name: "도서관", score: 5 },
      { name: "강의실", score: 10 },
      { name: "학생회관", score: 15 },
      { name: "식당", score: 20 },
      { name: "체육관", score: 25 },
      { name: "기숙사", score: 35 },
      { name: "컴퓨터실", score: 45 },
      { name: "동아리방", score: 60 },
      { name: "세미나실", score: 80 },
      { name: "창업지원센터", score: 95 }
    ]
  }
];
