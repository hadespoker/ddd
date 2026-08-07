# 바다픽 (BadaPick)

부산 7개 해변을 위한 맞춤 추천 웹앱입니다. GitHub Pages에서 그대로 배포할 수 있는 순수 HTML/CSS/JavaScript 프로젝트입니다.

## 실제 데이터

- 지도: Leaflet.js + OpenStreetMap 타일(저작권 표기 유지)
- 기상: Open-Meteo `/v1/forecast` — 기온, 체감온도, 날씨 코드, 풍속, 강수량/강수 확률
- 해양: Open-Meteo Marine `/v1/marine` — 파고, 파향, 파도 주기, 해수면 온도
- 시간대: `Asia/Seoul`

API 요청 실패 시 임의의 수치로 대체하지 않고 해당 항목에 오류 문구를 표시합니다. 혼잡도·주차는 시간과 요일 기반 **예상 정보**이며, 수질은 부산광역시 공식 자료의 **수질등급**만 표시합니다.

## 관광명소 사진 교체

`script.js`의 `loadNearbyPlaces()` 안에서 각 관광명소는 `name`, `description`, `image` 항목으로 구성됩니다. 사진을 바꾸려면 해당 명소의 `image` 값에 새 이미지 URL을 입력하세요.

```js
{
  name: "광안대교",
  description: "광안리 해변에서 만나는 부산 대표 야경",
  image: "https://example.com/gwangan-bridge.jpg",
}
```

`image`를 빈 문자열로 두거나 이미지가 로딩되지 않으면 기본 바다 이미지가 자동으로 표시됩니다.

### 관광명소 사진 출처

- 묘관음사·황학대: 기장군 문화관광
- 삼성대: 비짓부산 일광해수욕장 관광 콘텐츠
- 학리항: 부산관광아카이브
- 미포철길: 한국관광공사 관광사진
- 월내항: 한국수력원자력 고리원자력본부 보도사진

## 실행

정적 서버로 프로젝트 폴더를 열어 `index.html`에 접속하세요. 외부 CDN(Leaflet) 및 Open-Meteo API에 연결할 수 있어야 합니다.
