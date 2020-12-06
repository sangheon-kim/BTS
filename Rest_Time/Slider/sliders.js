// imageURL 리스트를 넣어준다. (이미지 슬라이더기 때문에 image를 기준으로 잡아준다.)
let imageList = [
  "./images/cocacola1.png",
  "./images/cocacola2.png",
  "./images/cocacola3.png",
  "./images/cocacola4.png",
  "./images/cocacola5.png",
  "./images/cocacola6.png",
];

// 기본 셀렉터는 body지만, selector 인수가 넘어오면 해당 selector를 찾아서 그 밑에 슬라이드들을 넣어준다. 두번째 매개변수로는 imageList를받아준다.
((selector = "body", imageList = [], containerName = "swiper1") => {
  // Head 태그 찾기
  var $head = document.getElementsByTagName("head")[0];
  // 스크립트 태그 생성
  const swiperScript = document.createElement("script");
  // HTML 문서에서 Head 태그에 스크립트 append 넣기
  $head.appendChild(swiperScript);
  // 생성한 스크립트 태그에 src URL 넣기
  swiperScript.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
  // 스크립트 태그가 정상적으로 load된걸 확인한 후에 이벤트 정의
  swiperScript.onload = function () {
    new Swiper(`#${containerName}`, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  };

  // 슬라이더 import 해줄 셀렉터 검색
  const $slider = document.querySelector(selector);
  // 컨테이너 div 태그 생성
  const $container = document.createElement("div");
  // 컨테이너에 className을 넣어준다.
  $container.className = `swiper-container`;
  $container.id = containerName;
  // wrapper를 생성하기위해서 div 엘리먼트를 만들어준다.
  const $wrapper = document.createElement("div");
  // wrapper에 클래스 네임으로 swiper-wrapper를 넣어준다.
  $wrapper.className = "swiper-wrapper";
  const isImage = Number($slider.getAttribute("data-image"));
  // imageList순회를 하면서 순회를 해준다.
  imageList.forEach((imageUrl, index) => {
    const result = isImage ? createImageBoard(imageUrl, index) : createBoard(index);

    // wrapper에 image가 들어간 슬라이드를 넣어준다.
    $wrapper.appendChild(result);
  });

  // 반복문이 모두 끝났으니 이제 슬라이드들이 다 들어 있는 wrapper를 컨테이너에 넣어주고,
  // 마지막으로 전체 슬라이더에 container를 넣어준다.
  $container.appendChild($wrapper);
  $slider.appendChild($container);
})(".slider", imageList, "swiper1");

function createImageBoard(imageURL, index) {
  const $slide = document.createElement("div");
  $slide.className = "swiper-slide";
  // image 태그를 만들어준다.
  const $image = document.createElement("img");
  $image.src = imageURL;
  $image.setAttribute("alt", `코카콜라${index}`);

  // 이미지를 위에서 만들어준 slide에 넣어준다.
  $slide.appendChild($image);

  return $slide;
}

function createBoard(index) {
  // slide를 슬라이드용 Element를 만들어준다.
  const $slide = document.createElement("div");
  $slide.className = "swiper-slide";
  const $board = document.createElement("div");
  $board.className = `board board-${index + 1}`;

  // 이미지를 위에서 만들어준 slide에 넣어준다.
  $slide.appendChild($board);

  return $slide;
}

/**
 *
 * @description 스타일 시트를 헤드에 넣어준다. link:CSS를 헤드 태그에 넣어주는 방식이다.
 * @param {*} href link URL
 * @param {*} callback
 * @returns
 */
function loadStyle(href, callback) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href == href) {
      return;
    }
  }
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;

  // 무언가 스타일 태그가 로드되었을때 이벤트 정의를 해줄 콜백을 처리하는 부분이다.
  if (callback) {
    link.onload = function () {
      // 링크가 onload되었을때 이벤트 명시이다.
      callback();
    };
  }
  // head.appendChild(link);
  head.prepend(link);
}

loadStyle("https://unpkg.com/swiper/swiper-bundle.min.css");
