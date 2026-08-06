# 파도픽 (PadoPick)

부산 5개 해변을 위한 맞춤 추천 웹앱입니다. GitHub Pages에서 그대로 배포할 수 있는 순수 HTML/CSS/JavaScript 프로젝트입니다.

## 실제 데이터

- 지도: Leaflet.js + OpenStreetMap 타일(저작권 표기 유지)
- 기상: Open-Meteo `/v1/forecast` — 기온, 체감온도, 날씨 코드, 풍속, 강수량/강수 확률
- 해양: Open-Meteo Marine `/v1/marine` — 파고, 파향, 파도 주기, 해수면 온도
- 시간대: `Asia/Seoul`

API 요청 실패 시 임의의 수치로 대체하지 않고 해당 항목에 오류 문구를 표시합니다. 혼잡도·주차는 시간과 요일 기반 **예상 정보**이며, 수질은 공식 데이터 연동 전까지 **현재 확인되지 않음**으로 표시합니다.

## 실행

정적 서버로 프로젝트 폴더를 열어 `index.html`에 접속하세요. 외부 CDN(Leaflet) 및 Open-Meteo API에 연결할 수 있어야 합니다.
