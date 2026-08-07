const beaches = [
  {
    id: "haeundae",
    name: "해운대해수욕장",
    lat: 35.158885,
    lon: 129.161483,
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Haeundae_Beach_on_a_Sunny_Day.jpg/1280px-Haeundae_Beach_on_a_Sunny_Day.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Haeundae_Beach_on_a_Sunny_Day.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Haeundae_Beach_Night_View.jpg/1280px-Haeundae_Beach_Night_View.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Haeundae_Beach_Night_View.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/View_of_Haeundae_Beach_from_Dongbaek_Island.jpg/1280px-View_of_Haeundae_Beach_from_Dongbaek_Island.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:View_of_Haeundae_Beach_from_Dongbaek_Island.jpg",
      },
    ],
    facility: "샤워·탈의실·산책로",
    food: "밀면",
    types: ["밀면", "돼지국밥", "해산물"],
  },
  {
    id: "gwangalli",
    name: "광안리해수욕장",
    lat: 35.15089,
    lon: 129.11908,
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Gwangalli_Beach_and_Gwangan_Bridge_Busan.jpg/1280px-Gwangalli_Beach_and_Gwangan_Bridge_Busan.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Gwangalli_Beach_and_Gwangan_Bridge_Busan.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/da/Busan_Gwangalli_Night.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Busan_Gwangalli_Night.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sunrise_at_Gwangalli_Beach%2C_Busan.jpg/1280px-Sunrise_at_Gwangalli_Beach%2C_Busan.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Sunrise_at_Gwangalli_Beach,_Busan.jpg",
      },
    ],
    facility: "산책로·카페 거리",
    food: "조개구이",
    types: ["조개구이", "회", "카페"],
  },
  {
    id: "songjeong",
    name: "송정해수욕장",
    lat: 35.179346,
    lon: 129.200546,
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Songjeong_panorama.jpg/1280px-Songjeong_panorama.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Songjeong_panorama.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Songjeong_Beach.jpg/1280px-Songjeong_Beach.jpg",
        source: "https://commons.wikimedia.org/wiki/File:Songjeong_Beach.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/SongJeong_beach_-_panoramio.jpg/1280px-SongJeong_beach_-_panoramio.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:SongJeong_beach_-_panoramio.jpg",
      },
    ],
    facility: "서핑숍·샤워 시설",
    food: "물회",
    types: ["물회", "해산물", "카페"],
  },
  {
    id: "songdo",
    name: "송도해수욕장",
    lat: 35.07564,
    lon: 129.01881,
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Songdo_Beach_Area_and_Namhang_Bridge_in_Busan.jpg/1280px-Songdo_Beach_Area_and_Namhang_Bridge_in_Busan.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Songdo_Beach_Area_and_Namhang_Bridge_in_Busan.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Busan_-_Songdo_beach.jpg/1280px-Busan_-_Songdo_beach.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Busan_-_Songdo_beach.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Busan_songdo_beach.jpg/1280px-Busan_songdo_beach.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Busan_songdo_beach.jpg",
      },
    ],
    facility: "산책로·케이블카 인근",
    food: "해산물",
    types: ["해산물", "조개구이", "카페"],
  },
  {
    id: "dadaepo",
    name: "다대포해수욕장",
    lat: 35.047,
    lon: 128.96323,
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Dadaepo_Beach%2C_Busan%2C_Korea.jpg/1280px-Dadaepo_Beach%2C_Busan%2C_Korea.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:Dadaepo_Beach,_Busan,_Korea.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_%EB%B6%80%EC%82%B0_%EB%8B%A4%EB%8C%80%ED%8F%AC_%ED%95%B4%EB%B3%80_Dadaepo_beach.Busan.South_korea_1.jpg/1280px-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_%EB%B6%80%EC%82%B0_%EB%8B%A4%EB%8C%80%ED%8F%AC_%ED%95%B4%EB%B3%80_Dadaepo_beach.Busan.South_korea_1.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:대한민국_부산_다대포_해변_Dadaepo_beach.Busan.South_korea_1.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_%EB%B6%80%EC%82%B0_%EB%8B%A4%EB%8C%80%ED%8F%AC_%ED%95%B4%EB%B3%80_Dadaepo_beach.Busan.South_korea_2.jpg/1280px-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_%EB%B6%80%EC%82%B0_%EB%8B%A4%EB%8C%80%ED%8F%AC_%ED%95%B4%EB%B3%80_Dadaepo_beach.Busan.South_korea_2.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:대한민국_부산_다대포_해변_Dadaepo_beach.Busan.South_korea_2.jpg",
      },
    ],
    facility: "산책로·낙조분수 인근",
    food: "칼국수",
    types: ["칼국수", "해산물", "분식"],
  },
  {
    id: "ilgwang",
    name: "일광해수욕장",
    lat: 35.2598394371,
    lon: 129.2340292654,
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5.jpg/1280px-%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5_%EC%88%98%EC%83%81%EB%A0%88%EC%A0%80.jpg/1280px-%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5_%EC%88%98%EC%83%81%EB%A0%88%EC%A0%80.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5_%EC%88%98%EC%83%81%EB%A0%88%EC%A0%80.jpg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5_%EC%98%A4%EB%A6%AC%EB%B0%B0.jpg/1280px-%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5_%EC%98%A4%EB%A6%AC%EB%B0%B0.jpg",
        source:
          "https://commons.wikimedia.org/wiki/File:%EC%9D%BC%EA%B4%91%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5_%EC%98%A4%EB%A6%AC%EB%B0%B0.jpg",
      },
    ],
    facility: "주차장·화장실·해변 산책로",
    food: "회",
    types: ["회", "해산물", "카페"],
  },
  {
    id: "imrang",
    name: "임랑해수욕장",
    lat: 35.3160142193,
    lon: 129.2620863763,
    photos: [
      {
        src: "https://www.gijang.go.kr/images/eng/sub/imlang_01.jpg",
        source:
          "https://www.gijang.go.kr/eng/index.gijang?menuCd=DOM_000000503001002000",
        credit: "기장군 문화관광",
      },
      {
        src: "https://www.gijang.go.kr/images/eng/sub/imlang_02.jpg",
        source:
          "https://www.gijang.go.kr/eng/index.gijang?menuCd=DOM_000000503001002000",
        credit: "기장군 문화관광",
      },
      {
        src: "https://www.gijang.go.kr/images/eng/sub/imlang_03.jpg",
        source:
          "https://www.gijang.go.kr/eng/index.gijang?menuCd=DOM_000000503001002000",
        credit: "기장군 문화관광",
      },
    ],
    facility: "무료 주차장·화장실·해변 산책",
    food: "자연산 회",
    types: ["자연산 회", "해산물", "칼국수"],
  },
];
// OpenStreetMap 지오코딩 결과와 각 관광지의 공식 주소를 대조한 위치입니다.
const mapAttractions = [
  {
    name: "더베이101",
    lat: 35.1565941,
    lon: 129.1520866,
    description: "마린시티 야경과 요트 풍경을 즐기기 좋은 명소",
    beach: "해운대해수욕장",
  },
  {
    name: "동백섬",
    lat: 35.1540639,
    lon: 129.1520862,
    description: "해안 산책로와 누리마루 APEC 하우스가 있는 섬",
    beach: "해운대해수욕장",
  },
  {
    name: "청사포 다릿돌전망대",
    lat: 35.1642021,
    lon: 129.1961757,
    description: "바다 위를 걷는 듯한 유리 바닥 전망대",
    beach: "송정해수욕장 · 해운대해수욕장",
  },
  {
    name: "광안대교",
    lat: 35.1456901,
    lon: 129.1283872,
    description: "광안리 해변에서 만나는 부산 대표 야경",
    beach: "광안리해수욕장",
  },
  {
    name: "민락수변공원",
    lat: 35.15426,
    lon: 129.13179,
    description: "바다를 바라보며 쉬기 좋은 수변 공원",
    beach: "광안리해수욕장",
  },
  {
    name: "F1963",
    lat: 35.1771063,
    lon: 129.1149266,
    description: "옛 철강공장을 문화공간으로 바꾼 복합 문화 명소",
    beach: "광안리해수욕장",
  },
  {
    name: "해동용궁사",
    lat: 35.1884335,
    lon: 129.2229764,
    description: "바닷가 절벽 위에 자리한 사찰",
    beach: "송정해수욕장",
  },
  {
    name: "미포철길",
    lat: 35.1581707,
    lon: 129.1728278,
    description: "동해남부선 옛 철길을 따라 걷는 산책 명소",
    beach: "해운대해수욕장 · 송정해수욕장",
  },
  {
    name: "송도해상케이블카",
    lat: 35.0689247,
    lon: 129.0220234,
    description: "송도 바다를 가로지르는 케이블카",
    beach: "송도해수욕장",
  },
  {
    name: "송도용궁구름다리",
    lat: 35.0619206,
    lon: 129.0219475,
    description: "암남공원과 이어지는 해상 보행교",
    beach: "송도해수욕장",
  },
  {
    name: "암남공원",
    lat: 35.0580746,
    lon: 129.015292,
    description: "해안 절벽과 숲길을 함께 즐기는 공원",
    beach: "송도해수욕장",
  },
  {
    name: "다대포 꿈의 낙조분수",
    lat: 35.0465492,
    lon: 128.9683979,
    description: "음악과 빛을 함께 즐기는 분수 광장",
    beach: "다대포해수욕장",
  },
  {
    name: "다대포 해변공원",
    lat: 35.0458529,
    lon: 128.9669187,
    description: "넓은 모래사장과 낙조가 아름다운 공원",
    beach: "다대포해수욕장",
  },
  {
    name: "아미산 전망대",
    lat: 35.0528896,
    lon: 128.9607581,
    description: "낙동강 하구와 다대포 바다를 조망하는 전망대",
    beach: "다대포해수욕장",
  },
  {
    name: "삼성대",
    lat: 35.2594315,
    lon: 129.2338004,
    description: "일광해수욕장 한가운데 자리한 기장의 유서 깊은 명소",
    beach: "일광해수욕장",
  },
  {
    name: "학리항",
    lat: 35.258659,
    lon: 129.2447077,
    description: "어촌과 해안 풍경을 함께 둘러보기 좋은 작은 항구",
    beach: "일광해수욕장",
  },
  {
    name: "황학대",
    lat: 35.2423512,
    lon: 129.2469307,
    description: "기장 해안의 풍경과 이야기를 만나는 유서 깊은 명소",
    beach: "일광해수욕장",
  },
  {
    name: "장안사",
    lat: 35.3743156,
    lon: 129.2329808,
    description: "불광산 자락에 자리한 기장의 대표 사찰",
    beach: "임랑해수욕장",
  },
  {
    name: "묘관음사",
    lat: 35.3231902,
    lon: 129.2660306,
    description: "임랑 인근에서 조용히 둘러보기 좋은 사찰",
    beach: "임랑해수욕장",
  },
  {
    name: "월내항",
    lat: 35.3256921,
    lon: 129.2784701,
    description: "어촌 풍경과 동해 바다를 가까이 만나는 항구",
    beach: "임랑해수욕장",
  },
];
let current = beaches[0],
  purpose = "산책",
  map,
  beachMarkerLayer,
  attractionMarkerLayer,
  mapLayerControl,
  mapLegendControl,
  loaded = false,
  carouselTimer = null,
  carouselIndex = 0;
const weights = { 혼잡도: 3, 파도: 3, 날씨: 4, 주차: 2, 편의시설: 3 };
const beachTraits = {
  haeundae: {
    facility: 95,
    fit: {
      물놀이: 94,
      산책: 78,
      서핑: 45,
      "사진 촬영": 86,
      "가족 여행": 95,
      데이트: 82,
      힐링: 58,
    },
  },
  gwangalli: {
    facility: 88,
    fit: {
      물놀이: 78,
      산책: 90,
      서핑: 48,
      "사진 촬영": 96,
      "가족 여행": 78,
      데이트: 98,
      힐링: 65,
    },
  },
  songjeong: {
    facility: 74,
    fit: {
      물놀이: 82,
      산책: 80,
      서핑: 98,
      "사진 촬영": 84,
      "가족 여행": 72,
      데이트: 72,
      힐링: 88,
    },
  },
  songdo: {
    facility: 83,
    fit: {
      물놀이: 68,
      산책: 91,
      서핑: 38,
      "사진 촬영": 80,
      "가족 여행": 88,
      데이트: 80,
      힐링: 76,
    },
  },
  dadaepo: {
    facility: 76,
    fit: {
      물놀이: 80,
      산책: 93,
      서핑: 55,
      "사진 촬영": 92,
      "가족 여행": 86,
      데이트: 75,
      힐링: 96,
    },
  },
  ilgwang: {
    facility: 72,
    fit: {
      물놀이: 84,
      산책: 92,
      서핑: 65,
      "사진 촬영": 88,
      "가족 여행": 90,
      데이트: 82,
      힐링: 93,
    },
  },
  imrang: {
    facility: 65,
    fit: {
      물놀이: 80,
      산책: 88,
      서핑: 70,
      "사진 촬영": 86,
      "가족 여행": 88,
      데이트: 78,
      힐링: 98,
    },
  },
};
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const weatherText = (c) =>
  c === 0
    ? ["☀️", "맑음"]
    : c <= 2
      ? ["🌤️", "대체로 맑음"]
      : c === 3
        ? ["☁️", "흐림"]
        : c <= 48
          ? ["🌫️", "안개"]
          : c <= 67
            ? ["🌧️", "비"]
            : c <= 77
              ? ["❄️", "눈"]
              : c <= 82
                ? ["🌦️", "소나기"]
                : ["⛈️", "뇌우"];
const value = (primary, fallback = null) => {
  const first = Number(primary);
  if (primary !== null && primary !== undefined && Number.isFinite(first))
    return first;
  const second = Number(fallback);
  return fallback !== null && fallback !== undefined && Number.isFinite(second)
    ? second
    : null;
};
function nowText() {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}
function congestion(b) {
  const d = new Date(),
    h = +new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Seoul",
      hour: "numeric",
      hour12: false,
    }).format(d),
    weekend = [0, 6].includes(d.getDay());
  let score =
    (h >= 11 && h <= 17 ? 3 : 1) +
    (weekend ? 2 : 0) +
    (b.id === "haeundae" || b.id === "gwangalli" ? 1 : 0);
  return score >= 5 ? "혼잡" : score >= 3 ? "보통" : "여유";
}
function parking(b) {
  let c = congestion(b);
  return c === "혼잡" ? "부족" : c === "보통" ? "보통" : "여유";
}
async function getJSON(url, label, attempt = 0) {
  console.info("[PadoPick API]", label, url);
  const r = await fetch(url);
  console.info("[PadoPick API response]", label, r.status);
  if (!r.ok && attempt < 2 && (r.status === 429 || r.status >= 500)) {
    const wait = 650 * (attempt + 1);
    console.warn(
      "[PadoPick API retry]",
      label,
      r.status,
      `${wait}ms 후 재시도`,
    );
    await new Promise((resolve) => setTimeout(resolve, wait));
    return getJSON(url, label, attempt + 1);
  }
  if (!r.ok) throw new Error(label + " HTTP " + r.status);
  return r.json();
}
function nearest(hourly) {
  if (!hourly?.time?.length) return null;
  const now = Date.now();
  let index = 0,
    min = Infinity;
  hourly.time.forEach((t, i) => {
    let d = Math.abs(new Date(t + "+09:00") - now);
    if (d < min) {
      min = d;
      index = i;
    }
  });
  return index;
}
async function fetchBeach(b) {
  const q = `latitude=${b.lat}&longitude=${b.lon}&timezone=Asia%2FSeoul`;
  try {
    const w = await getJSON(
      `https://api.open-meteo.com/v1/forecast?${q}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation&hourly=precipitation_probability`,
      "weather",
    );
    let i = nearest(w.hourly);
    b.weather = {
      temp: w.current?.temperature_2m,
      feel: w.current?.apparent_temperature,
      code: w.current?.weather_code,
      wind: w.current?.wind_speed_10m,
      rain: w.current?.precipitation,
      prob: i === null ? null : w.hourly.precipitation_probability?.[i],
      time: w.current?.time || null,
    };
  } catch (e) {
    console.error("[PadoPick API error] weather", b.name, e);
    b.weather = null;
  }
  try {
    const m = await getJSON(
      `https://marine-api.open-meteo.com/v1/marine?${q}&current=wave_height,wave_direction,wave_period,sea_surface_temperature&hourly=wave_height,wave_direction,wave_period,sea_surface_temperature`,
      "marine",
    );
    let i = nearest(m.hourly),
      c = m.current || {};
    b.marine = {
      wave: value(c.wave_height, i === null ? null : m.hourly.wave_height?.[i]),
      dir: value(
        c.wave_direction,
        i === null ? null : m.hourly.wave_direction?.[i],
      ),
      period: value(
        c.wave_period,
        i === null ? null : m.hourly.wave_period?.[i],
      ),
      sea: value(
        c.sea_surface_temperature,
        i === null ? null : m.hourly.sea_surface_temperature?.[i],
      ),
      time: c.time || null,
    };
  } catch (e) {
    console.error("[PadoPick API error] marine", b.name, e);
    b.marine = null;
  }
}
function score(b) {
  const weatherCode = value(b.weather?.code),
    wave = value(b.marine?.wave),
    traits = beachTraits[b.id],
    purposeFit = traits?.fit?.[purpose];
  if ((weatherCode === null && wave === null) || !Number.isFinite(purposeFit))
    return null;
  const parts = [];
  if (weatherCode !== null) {
    const weather = weatherCode <= 3 ? 100 : weatherCode <= 67 ? 60 : 25;
    parts.push([weather, weights.날씨]);
  }
  if (wave !== null) {
    const waveScore =
      purpose === "서핑"
        ? Math.max(15, 100 - Math.abs(wave - 1.1) * 60)
        : purpose === "물놀이"
          ? Math.max(20, 100 - Math.max(0, wave - 0.6) * 100)
          : Math.max(30, 100 - wave * 35);
    parts.push([waveScore, weights.파도]);
  }
  parts.push(
    [{ 여유: 100, 보통: 65, 혼잡: 30 }[congestion(b)], weights.혼잡도],
    [{ 여유: 100, 보통: 60, 부족: 25 }[parking(b)], weights.주차],
    [traits.facility, weights.편의시설],
  );
  const totalWeight = parts.reduce((sum, [, weight]) => sum + weight, 0),
    priority =
      parts.reduce((sum, [value, weight]) => sum + value * weight, 0) /
      totalWeight,
    result = Math.round(priority * 0.82 + purposeFit * 0.18);
  return Number.isFinite(result) ? result : null;
}
function rank(b) {
  let ordered = [...beaches]
    .filter((x) => score(x) !== null)
    .sort((a, c) => score(c) - score(a));
  let n = ordered.findIndex((x) => x.id === b.id);
  return n < 0 ? null : n + 1;
}
function showClean(id) {
  const b = beaches.find((x) => x.id === id),
    quality = {
      haeundae: { score: 5, cod: "0.3", coli: 14 },
      gwangalli: { score: 8, cod: "1.0", coli: 113 },
      songjeong: { score: 5, cod: "0.3", coli: 203 },
      songdo: { score: 5, cod: "0.9", coli: 428 },
      dadaepo: { score: 7, cod: "1.6", coli: 120 },
    }[id];
  let box = $("#cleanDetail");
  if (!box) {
    box = document.createElement("section");
    box.id = "cleanDetail";
    box.className = "clean-detail";
    $("#cards").insertAdjacentElement("afterend", box);
  }
  $$("[data-clean]").forEach((x) =>
    x.classList.toggle("selected", x.dataset.clean === id),
  );
  box.innerHTML = `<p class="eyebrow">BUSAN OFFICIAL WATER QUALITY</p><h3>${b.name} 청결 정보</h3><p><b>수질등급: 적합</b> · 총점 ${quality.score}점</p><p>COD ${quality.cod} mg/L · 대장균군수 ${quality.coli} MPN/100mL</p><p>부산광역시 보건환경정보 공개시스템의 해수욕장 수질 공개 표 기준입니다. 해당 표의 채수일 표기는 5월 15일이며, 최신 측정은 아래 공식 자료에서 확인하세요.</p><p><a href="https://heis.busan.go.kr/environmental/water_04_002.aspx" target="_blank" rel="noopener">부산광역시 공식 수질 자료 보기 ↗</a></p>`;
  box.classList.add("visible");
}
function card(b) {
  let w = b.weather ? weatherText(b.weather.code) : ["⌁", "정보 없음"],
    s = score(b),
    r = rank(b);
  return `<button class="card" data-detail="${b.id}" onclick="window.openDetail('${b.id}')"><div class="photo" style="background-image:url('${b.photos[0].src}')"><span class="badge">${r === null ? "—" : r + "위 · " + s + "점"}</span></div><h3>${b.name}</h3><p>상세 정보 보기 · <span class="emoji-icon weather-emoji" aria-hidden="true">${w[0]}</span> ${w[1]}</p></button>`;
}
function render() {
  let sorted = [...beaches].sort((a, b) => (score(b) ?? -1) - (score(a) ?? -1));
  $("#cards").innerHTML = sorted.map(card).join("");
  $("#homeStatus").textContent =
    `${nowText()} 기준 최신 API 데이터를 반영했어요.`;
  $("#mapSummary").innerHTML =
    `<div class="panel"><p class="eyebrow">DATA NOTICE</p><p class="muted">기상·해양 정보는 Open-Meteo API에서 새로 불러옵니다. 혼잡도·주차는 예상 정보이며 수질은 현재 확인되지 않음으로 표시합니다.</p></div>`;
  renderMap();
}
function renderMap() {
  if (!map) {
    map = L.map("leafletMap", { scrollWheelZoom: true }).setView(
      [35.17, 129.12],
      10,
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
    beachMarkerLayer = L.layerGroup().addTo(map);
    attractionMarkerLayer = L.layerGroup().addTo(map);
    mapLayerControl = L.control
      .layers(
        null,
        {
          "해수욕장": beachMarkerLayer,
          "관광명소": attractionMarkerLayer,
        },
        {
          collapsed: window.innerWidth < 430,
          position: "topright",
        },
      )
      .addTo(map);
    mapLegendControl = L.control({ position: "bottomleft" });
    mapLegendControl.onAdd = () => {
      const legend = L.DomUtil.create("div", "map-legend");
      legend.setAttribute("aria-label", "지도 마커 범례");
      legend.innerHTML = `<b>지도 범례</b><span><i class="legend-pin beach-pin"></i>해수욕장</span><span><i class="legend-pin attraction-pin">★</i>관광명소</span>`;
      L.DomEvent.disableClickPropagation(legend);
      return legend;
    };
    mapLegendControl.addTo(map);
  }
  beachMarkerLayer.clearLayers();
  attractionMarkerLayer.clearLayers();
  beaches.forEach((b) => {
    let w = b.weather ? weatherText(b.weather.code) : ["⌁", "불러올 수 없음"],
      wave = b.marine?.wave;
    L.marker([b.lat, b.lon])
      .addTo(beachMarkerLayer)
      .bindPopup(
        `<div class="popup"><h3>${b.name}</h3><p><span class="emoji-icon weather-emoji" aria-hidden="true">${w[0]}</span> ${w[1]} · ${b.weather?.temp ?? "정보 없음"}°C</p><p>풍속 ${b.weather?.wind ?? "정보 없음"} km/h · 파도 ${wave ?? "불러올 수 없음"}${wave !== null && wave !== undefined ? "m" : ""}</p><p>맞춤 점수 <b>${score(b)}점</b></p><button onclick="window.openDetail('${b.id}')">상세 보기</button></div>`,
      );
  });
  const attractionIcon = L.divIcon({
    className: "attraction-marker-shell",
    html: '<span class="attraction-marker-icon" aria-hidden="true"><i>★</i></span>',
    iconSize: [34, 38],
    iconAnchor: [17, 36],
    popupAnchor: [0, -32],
  });
  mapAttractions.forEach((place) => {
    L.marker([place.lat, place.lon], {
      icon: attractionIcon,
      title: place.name,
      alt: `${place.name} 관광명소`,
    })
      .addTo(attractionMarkerLayer)
      .bindPopup(
        `<div class="popup attraction-popup"><p class="popup-type">관광명소</p><h3>${place.name}</h3><p>${place.description}</p><p class="nearby-beach"><b>가까운 해수욕장</b><br>${place.beach}</p></div>`,
      );
  });
  const allMarkerPoints = [
    ...beaches.map((b) => [b.lat, b.lon]),
    ...mapAttractions.map((place) => [place.lat, place.lon]),
  ];
  map.fitBounds(L.latLngBounds(allMarkerPoints), {
    padding: [34, 34],
    maxZoom: 11,
  });
  setTimeout(() => map.invalidateSize(), 50);
}
function stopCarousel() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = null;
  }
}
function startCarousel(b) {
  stopCarousel();
  carouselIndex = 0;
  const images = b.photos,
    track = $("#detailTrack"),
    dots = $("#detailDots");
  track.innerHTML = [...images, images[0]]
    .map(
      (img) =>
        `<article class="detailSlide" style="background-image:url('${img.src}')"><a class="photoSource" href="${img.source}" target="_blank" rel="noopener">사진: ${img.credit || "Wikimedia Commons"} ↗</a></article>`,
    )
    .join("");
  dots.innerHTML = images
    .map((_, i) => `<span class="detailDot ${i === 0 ? "on" : ""}"></span>`)
    .join("");
  const move = (animate = true) => {
    track.style.transition = animate ? "transform .85s ease-in-out" : "none";
    track.style.transform = `translateX(-${carouselIndex * 100}%)`;
    [...dots.children].forEach((dot, i) =>
      dot.classList.toggle("on", i === carouselIndex % images.length),
    );
  };
  track.ontransitionend = (e) => {
    if (e.propertyName === "transform" && carouselIndex === images.length) {
      carouselIndex = 0;
      move(false);
    }
  };
  move(false);
  carouselTimer = setInterval(() => {
    carouselIndex += 1;
    move(true);
  }, 3000);
}
function openDetail(id) {
  current = beaches.find((b) => b.id === id);
  startCarousel(current);
  $("#detailName").textContent = current.name;
  $("#detailScore").textContent = score(current);
  $("#detailScoreNote").textContent =
    "사용자 가중치와 최신·예상 정보를 함께 계산";
  $("#updatedAt").textContent = "데이터 갱신 시각: " + nowText();
  let w = current.weather,
    m = current.marine,
    wx = w ? weatherText(w.code) : ["⌁", "현재 정보를 불러올 수 없습니다"];
  const facts = [
    [
      "🌡️",
      "현재 기온",
      w ? `${w.temp}°C` : "현재 정보를 불러올 수 없습니다",
      "실제 API",
    ],
    [
      "♨️",
      "체감온도",
      w ? `${w.feel}°C` : "현재 정보를 불러올 수 없습니다",
      "실제 API",
    ],
    [wx[0], "날씨", w ? wx[1] : "현재 정보를 불러올 수 없습니다", "실제 API"],
    [
      "🌊",
      "파도 높이",
      m?.wave === null || !m
        ? "해양 데이터를 불러올 수 없습니다"
        : m.wave + "m",
      "실제 API",
    ],
    [
      "🧭",
      "파도 방향",
      m?.dir === null || !m ? "해양 데이터를 불러올 수 없습니다" : m.dir + "°",
      "실제 API",
    ],
    [
      "⏱️",
      "파도 주기",
      m?.period === null || !m
        ? "해양 데이터를 불러올 수 없습니다"
        : m.period + "초",
      "실제 API",
    ],
    [
      "💧",
      "해수면 온도",
      m?.sea === null || !m ? "해양 데이터를 불러올 수 없습니다" : m.sea + "°C",
      "실제 API",
    ],
    [
      "💨",
      "풍속",
      w ? `${w.wind} km/h` : "현재 정보를 불러올 수 없습니다",
      "실제 API",
    ],
    [
      "☔",
      "강수 확률",
      w && w.prob !== null ? `${w.prob}%` : "현재 정보를 불러올 수 없습니다",
      "실제 API",
    ],
    ["👥", "예상 혼잡도", congestion(current), "예상 정보"],
    ["🅿️", "주차 여유", parking(current), "예상 정보"],
    ["🧪", "수질", "현재 확인되지 않음", "공식 출처 미연결"],
    ["🚿", "편의시설", current.facility, "정적 안내"],
  ];
  $("#facts").innerHTML = facts
    .map(
      (x) =>
        `<div class="fact"><span class="emoji-icon" aria-hidden="true">${x[0]}</span><p>${x[1]}</p><b>${x[2]}</b><small>${x[3]} · ${nowText()}</small></div>`,
    )
    .join("");
  $("#basis").innerHTML = [
    `날씨 적합성: 실제 예보 데이터 (${w ? wx[1] : "불러올 수 없음"})`,
    `파도 적합성: 실제 해양 예보 데이터 (${m?.wave ?? "불러올 수 없음"}${m?.wave !== null && m ? "m" : ""})`,
    `혼잡도: 예상 정보 (${congestion(current)})`,
    `주차: 예상 정보 (${parking(current)})`,
    `편의시설: 정적 기본 정보 (${current.facility})`,
  ]
    .map((x) => `<li>${x}</li>`)
    .join("");
  go("detail");
}
function go(id) {
  if (id !== "detail") stopCarousel();
  $$(".page").forEach((p) => p.classList.toggle("active", p.id === id));
  $$(".nav").forEach((n) => n.classList.toggle("on", n.dataset.go === id));
  if (id === "map") setTimeout(() => map?.invalidateSize(), 100);
  window.scrollTo(0, 0);
}
function setup() {
  const ps = [
    ["🏊", "물놀이"],
    ["🚶", "산책"],
    ["🏄", "서핑"],
    ["📷", "사진 촬영"],
    ["👪", "가족 여행"],
    ["💙", "데이트"],
    ["🌿", "힐링"],
  ];
  $("#purpose").innerHTML = ps
    .map(
      ([icon, label]) =>
        `<button class="choice ${label === purpose ? "on" : ""}" data-purpose="${label}"><span class="emoji-icon" aria-hidden="true">${icon}</span><span>${label}</span></button>`,
    )
    .join("");
  $("#sliders").innerHTML = Object.entries(weights)
    .map(
      ([k, v]) =>
        `<div class="weight"><div><span>${k}</span><b id="w${k}">${v}</b></div><input data-weight="${k}" type="range" min="1" max="5" value="${v}"></div>`,
    )
    .join("");
  const rail = $("#cards");
  let drag = false,
    moved = false,
    startX = 0,
    startLeft = 0,
    pressedCard = null;
  rail.style.cursor = "grab";
  rail.style.userSelect = "none";
  rail.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    drag = true;
    moved = false;
    pressedCard = e.target.closest("[data-detail]");
    startX = e.clientX;
    startLeft = rail.scrollLeft;
    rail.setPointerCapture(e.pointerId);
    rail.style.cursor = "grabbing";
  });
  rail.addEventListener("pointermove", (e) => {
    if (!drag) return;
    let delta = e.clientX - startX;
    if (Math.abs(delta) > 4) moved = true;
    rail.scrollLeft = startLeft - delta;
  });
  rail.addEventListener("pointerup", () => {
    drag = false;
    rail.style.cursor = "grab";
    if (!moved && pressedCard) openDetail(pressedCard.dataset.detail);
    pressedCard = null;
  });
  rail.addEventListener("pointercancel", () => {
    drag = false;
    pressedCard = null;
    rail.style.cursor = "grab";
  });
  rail.addEventListener(
    "click",
    (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    },
    true,
  );
}
function toast(t) {
  let e = $("#toast");
  e.textContent = t;
  e.classList.add("show");
  setTimeout(() => e.classList.remove("show"), 2200);
}
function loadNearbyPlaces() {
  const fallback = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#d9efff"/><stop offset="1" stop-color="#82c9fa"/></linearGradient></defs><rect width="640" height="420" fill="url(#g)"/><circle cx="500" cy="105" r="44" fill="#fff" opacity=".8"/><path d="M0 302c102-70 181-48 271 5 85 50 171 60 369-30v143H0z" fill="#fff" opacity=".86"/><path d="M0 338c120-53 204-19 292 14 91 34 184 29 348-36v104H0z" fill="#0f82eb" opacity=".45"/></svg>')}`;
  const attractions = {
    haeundae: [
      {
        name: "더베이101",
        description: "마린시티 야경과 요트 풍경을 즐기기 좋은 명소",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/%EB%B6%80%EC%82%B0_%EB%8D%94%EB%B2%A0%EC%9D%B4101.jpg/960px-%EB%B6%80%EC%82%B0_%EB%8D%94%EB%B2%A0%EC%9D%B4101.jpg",
      },
      {
        name: "동백섬",
        description: "해안 산책로와 누리마루 APEC 하우스가 있는 섬",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Dongbaek_Island_20200522_016.jpg/330px-Dongbaek_Island_20200522_016.jpg",
      },
      {
        name: "청사포 다릿돌전망대",
        description: "바다 위를 걷는 듯한 유리 바닥 전망대",
        image:
          "https://visitbusan.net/archive/upload/2025/02/20/20250220170806195858_m.png",
      },
    ],
    gwangalli: [
      {
        name: "광안대교",
        description: "광안리 해변에서 만나는 부산 대표 야경",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gwangan_Bridge1.jpg/330px-Gwangan_Bridge1.jpg",
      },
      {
        name: "민락수변공원",
        description: "바다를 바라보며 쉬기 좋은 수변 공원",
        image:
          "https://visitbusan.net/archive/upload/2025/02/20/20250220170806286248_m.png",
      },
      {
        name: "F1963",
        description: "옛 철강공장을 문화공간으로 바꾼 복합 문화 명소",
        image:
          "https://visitbusan.net/archive/upload/2025/09/12/20250912104023941963_m.png",
      },
    ],
    songjeong: [
      {
        name: "해동용궁사",
        description: "바닷가 절벽 위에 자리한 사찰",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Haedong_Yonggungsa_Temple%2C_Busan%2C_South_Korea.jpg/960px-Haedong_Yonggungsa_Temple%2C_Busan%2C_South_Korea.jpg",
      },
      {
        name: "청사포 다릿돌전망대",
        description: "해안 풍경을 가까이 감상하는 전망대",
        image:
          "https://visitbusan.net/archive/upload/2025/02/20/20250220170806195858_m.png",
      },
      {
        name: "미포철길",
        description: "동해남부선 옛 철길을 따라 걷는 산책 명소",
        image: "assets/attractions/mipo-railroad.jpg",
      },
    ],
    songdo: [
      {
        name: "송도해상케이블카",
        description: "송도 바다를 가로지르는 케이블카",
        image:
          "https://visitbusan.net/archive/upload/2025/02/20/20250220153350487710_m.png",
      },
      {
        name: "송도용궁구름다리",
        description: "암남공원과 이어지는 해상 보행교",
        image:
          "https://visitbusan.net/archive/upload/2025/02/20/20250220134657799518_m.png",
      },
      {
        name: "암남공원",
        description: "해안 절벽과 숲길을 함께 즐기는 공원",
        image:
          "https://visitbusan.net/archive/upload/2025/02/20/20250220153350437923_m.png",
      },
    ],
    dadaepo: [
      {
        name: "다대포 꿈의 낙조분수",
        description: "음악과 빛을 함께 즐기는 분수 광장",
        image:
          "https://visitbusan.net/archive/upload/2025/02/21/20250221130807952547_m.png",
      },
      {
        name: "다대포 해변공원",
        description: "넓은 모래사장과 낙조가 아름다운 공원",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Dadaepo_Beach%2C_Busan%2C_Korea.jpg/1280px-Dadaepo_Beach%2C_Busan%2C_Korea.jpg",
      },
      {
        name: "아미산 전망대",
        description: "낙동강 하구와 다대포 바다를 조망하는 전망대",
        image:
          "https://visitbusan.net/archive/upload/2025/02/20/20250220153350579165_m.png",
      },
    ],
    ilgwang: [
      {
        name: "삼성대",
        description: "일광해수욕장 한가운데 자리한 기장 지역의 유서 깊은 명소",
        image: "assets/attractions/samseongdae.jpg",
      },
      {
        name: "학리항",
        description: "어촌과 해안 풍경을 함께 둘러보기 좋은 작은 항구",
        image: "assets/attractions/hakri-port.png",
      },
      {
        name: "황학대",
        description: "일광 해안의 풍경과 이야기를 만나는 기장 명소",
        image: "assets/attractions/hwanghakdae.jpg",
      },
    ],
    imrang: [
      {
        name: "장안사",
        description: "불광산 자락에 자리한 기장의 대표 사찰",
        image:
          "https://visitbusan.net/archive/upload/2025/02/20/20250220170806102578_m.png",
      },
      {
        name: "묘관음사",
        description: "임랑 인근에서 조용히 둘러보기 좋은 사찰",
        image: "assets/attractions/myogwaneumsa.jpg",
      },
      {
        name: "월내항",
        description: "어촌 풍경과 동해 바다를 가까이 만나는 항구",
        image: "assets/attractions/wolnae-port.jpg",
      },
    ],
  };
  const out = $("#foodTypes"),
    items = attractions[current.id] || [];
  out.innerHTML = items
    .map(
      (item, i) =>
        `<article class="food"><div class="foodCopy"><b>${i + 1}. ${item.name}</b><p>${item.description} · 정적 관광 안내</p></div><img class="attractionPhoto" src="${item.image || fallback}" alt="${item.name} 사진" loading="lazy"></article>`,
    )
    .join("");
  out.querySelectorAll(".attractionPhoto").forEach((img) =>
    img.addEventListener(
      "error",
      () => {
        img.src = fallback;
      },
      { once: true },
    ),
  );
}
document.addEventListener("click", (e) => {
  let g = e.target.closest("[data-go]");
  if (g) go(g.dataset.go);
  if (e.target.closest(".close-page,.back")) go("home");
  let d = e.target.closest("[data-detail]");
  if (d) openDetail(d.dataset.detail);
  let p = e.target.closest("[data-purpose]");
  if (p) {
    purpose = p.dataset.purpose.trim();
    $$(".choice").forEach((x) => x.classList.toggle("on", x === p));
  }
});
document.addEventListener("input", (e) => {
  if (e.target.dataset.weight) {
    weights[e.target.dataset.weight] = +e.target.value;
    $("#w" + e.target.dataset.weight).textContent = e.target.value;
  }
});
$("#recommendBtn").onclick = () => {
  if (!loaded)
    return toast(
      "실제 데이터를 불러오는 중이에요. 잠시 후 다시 시도해 주세요.",
    );
  let candidates = beaches.filter((b) => score(b) !== null);
  if (!candidates.length)
    return toast(
      "현재 기상·해양 API 정보를 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.",
    );
  let b = candidates.sort((a, b) => score(b) - score(a))[0];
  openDetail(b.id);
  toast(`${b.name}을(를) 추천해요.`);
};
$("#foodBtn").onclick = () => {
  $("#foodArea").textContent = "NEAR " + current.name;
  go("food");
  loadNearbyPlaces();
};
$("#searchFood").onclick = () =>
  window.open(
    `https://map.kakao.com/?q=${encodeURIComponent(current.name + " " + current.food)}`,
    "_blank",
    "noopener",
  );
window.openDetail = openDetail;
function loadLeaflet() {
  return new Promise((resolve, reject) => {
    if (window.L) return resolve();
    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(css);
    let s = document.createElement("script");
    s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s.onload = resolve;
    s.onerror = () => reject(new Error("Leaflet CDN load failed"));
    document.head.appendChild(s);
  });
}
async function init() {
  setup();
  document.querySelector("#home .heading h2").textContent = "해변정보";
  try {
    await loadLeaflet();
    for (let i = 0; i < beaches.length; i += 2)
      await Promise.all(beaches.slice(i, i + 2).map(fetchBeach));
    loaded = true;
    render();
    toast("실제 기상·해양 데이터를 불러왔어요.");
  } catch (e) {
    console.error("[PadoPick init]", e);
    $("#homeStatus").textContent = "일부 실제 정보를 불러올 수 없습니다.";
    $("#cards").innerHTML =
      '<div class="loading">현재 정보를 불러올 수 없습니다. 잠시 후 새로고침해 주세요.</div>';
  }
}
init();
const officialQuality = {
  haeundae: { grade: "적합" },
  gwangalli: { grade: "적합" },
  songjeong: { grade: "적합" },
  songdo: { grade: "적합" },
  dadaepo: { grade: "적합" },
  ilgwang: { grade: "적합" },
  imrang: { grade: "적합" },
};
const baseOpenDetail = openDetail;
openDetail = function (id) {
  baseOpenDetail(id);
  const q = officialQuality[id],
    fact = [...document.querySelectorAll("#facts .fact")].find(
      (x) => x.querySelector("p")?.textContent === "수질",
    );
  if (fact && q)
    fact.innerHTML = `<span class="emoji-icon" aria-hidden="true">🧪</span><p>수질</p><b>수질등급: ${q.grade}</b><small>부산광역시 공식 자료</small>`;
};
window.openDetail = openDetail;
const baseRender = render;
render = function () {
  baseRender();
  const note = $("#mapSummary .muted");
  if (note)
    note.textContent =
      "기상·해양 정보는 Open-Meteo API, 수질은 부산광역시 보건환경정보 공개시스템 자료를 사용합니다. 혼잡도·주차는 예상 정보입니다.";
};
