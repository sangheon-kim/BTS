/**
 *
 * @description 전달받은 값이 전달받은 배열에 있는지 확인하는 함수
 * @param {*} array
 * @param {*} n
 * @returns
 */
function notSame(array, n) {
  /**
   * 중복이 있으면 안되니 중복췌크 (every
   * 메서드는 배열 전체를 검사해서 하나라도 false면 false 반환)
   */
  return array.every((e) => n !== e);
}

/**
 * @description 1부터 maxNum 사이에 정수를 리턴
 * @example 5가 들어오면 1~5중에 하나의 정수를 리턴
 * @param {*} MaxNum
 * @returns
 */
function randNumberGenerator(MaxNum) {
  // 0이라는건 계산값에 들어가지 않을것이기에 1부터 출발한다. Math.random()은 0~1사이에 소수점을 반환을 해준다. 0.3452등 그래서 원하는 숫자만큼을 곱해주면
  // 0부터 원하는 숫자 - 1사이에 소수점을 반환해준다. 그래서 뒤에 소수점을 버리기 위해서 parseInt를 사용하고 +1을 해주면 1부터 원하는 숫자까지 나오게 된다.
  return parseInt(Math.random() * MaxNum) + 1;
}

/**
 *
 * @description 숫자를 받아서 해당 길이만큼 1부터 해당 숫자만큼 랜덤 배치
 * @example 5 넣을경우 [1~5까지 랜덤하게 인덱스에 할당]
 * @param {*} num (마지막 숫자)
 * @returns
 */
function getRandomNumberArray(num) {
  // 숫자를 담아줄 배열을 초기화 해줍니다.
  let indexArr = [];

  // 배열의 개수가 같다는건 이제 모두 다 채워진것이기에 같기 전까지는 넣어준다.
  while (indexArr.length < num) {
    let number = randNumberGenerator(num);

    // 현재 배열안에 위에서 생성한 랜덤 값을 가지고 배열에 없는지 확인하고 없으면 그때 푸시해준다.
    if (notSame(indexArr, number)) {
      indexArr.push(number);
    }
  }

  // 다담기면 그때 배열을 리턴해준다.
  return indexArr;
}

function returnVapour({ element = "body", count = 20, delay = -0.5, vapourColor = "#fff", blurValue = 8 }) {
  let vapourDelay = delay;
  // 카운트는 연기 개수다 높으면 높은 수 일수록 연기는 자욱해진다.
  const COUNT = count;
  // 부모 element 선택자를 매개변수로 전달받아, 찾아준다.
  const $parentElem = document.querySelector(element);
  // 연기 생성을 위해 divElement를 만들어주고 클래스 이름을 넣어준다.
  const $vapour = document.createElement("div");
  $vapour.className = "vapour";

  // 위에서 생성한 랜덤한 배열을 forEach로 순회해준다.
  getRandomNumberArray(COUNT).forEach((item) => {
    // span 태그 생성
    const $vapourElem = document.createElement("span");
    // span 태그 attribute에 vapourDelay에 넣어줄 데이터 딜레이 값 넣기
    // $vapourElem.setAttribute("data-delay", `${item}`);
    $vapourElem.style.animationDelay = `${item * vapourDelay}s`;
    // 연기 색상
    $vapourElem.style.background = vapourColor;
    $vapourElem.style.filter = `blur(${blurValue}px)`;
    // 연기 래퍼에 연기들을 넣어준다. 연기 래퍼는 아직 넣어놓지 않았다.
    $vapour.append($vapourElem);
  });

  $parentElem.append($vapour);
}

returnVapour({ element: "body" });
