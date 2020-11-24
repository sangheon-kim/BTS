# Shape

- shpaes svg 보드 크기는 150 \* 150 고정입니다.

## rect (Rectangle)

- 사각형을 그릴때 사용한다.<br />

  <style>.shapes { background-color: #eee; width: 150px; height: 150px;}</style>
    <svg class="shapes" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="75" height="75" rx="0" ry="0" fill="skyblue"></rect>
    </svg> <svg class="shapes" xmlns="http://www.w3.org/2000/svg">
    <rect x="37.5" y="37.5" width="75" height="75" rx="37.5" ry="20" fill="skyblue"></rect>
    </svg>

```html
<!-- 
  * rect *
  x - x좌표 시작점 (그리기 시작한다.) 
  y - y좌표 그리기 시작할 지점
  width - 너비값
  height - 높이값
  rx - 수평축 기울어지는 정도를 의미한다. 지금 위에 두번째 이미지 사진을 보자. (x축을 너비에 반만큼 주니 완전 동그래진다.)
  ry - 수직축(y)에 기울어지는 정도
-->
<svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="75" height="75" rx="0" ry="0" fill="skyblue"></rect>
</svg>
<svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <rect x="37.5" y="37.5" width="75" height="75" rx="37.5" ry="20" fill="skyblue"></rect>
</svg>
```

## circle (Circle)

- x,y 가 정확하게 일치하는 동그라미 그릴 때 사용<br />  
  <svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <circle cx="75" cy="75" r="30" fill="red" stroke="red"/>
  </svg>
  <svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="10" fill="dodgerblue" stroke="yellow" stroke-width="3"/>
  </svg>

```html
<!-- 
  * circle * 
  cx(circle x) - x좌표지점 (가운데 두고싶다면, 보드 위치의 절반)
  cy(circle y) - y좌표지점 (가운데 두고싶다면, 보드 위치의 절반)
  r (radius) - 반지름 길이 지정 * 2한것이 그려지는 원의 지름
-->
<svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <circle cx="75" cy="75" r="30" fill="red" stroke="red" />
</svg>
<svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="10" fill="dodgerblue" stroke="yellow" stroke-width="3" />
</svg>
```

## ellipse

- 타원을 그릴때 사용 <br />
  <svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="75" cy="75" rx="50" ry="20" fill="#00ff00" stroke="red" />
  </svg>
  <svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="0" rx="10" ry="50" fill="purple" stroke="blue" transform="rotate(45)"/>
  </svg>

```html
<!-- 
  * ellipse * 
  cx(circle x) - x좌표지점 (가운데 두고싶다면, 보드 위치의 절반)
  cy(circle y) - y좌표지점 (가운데 두고싶다면, 보드 위치의 절반)
  rx (radius X) - x축 반지름(사각형 기준 너비)
  ry (radius Y) - y축 반지름(사각형 기준 높이)
  - rx, ry가 같으면 circle과 똑같다.
-->
<svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="75" cy="75" rx="50" ry="20" fill="#00ff00" stroke="red" />
</svg>
<svg class="shapes" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="0" rx="10" ry="50" fill="purple" stroke="blue" transform="rotate(45)" />
</svg>
```
