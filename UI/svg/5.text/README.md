# Text

- text를 넣을 수 있게 해줍니다.<br />
  ![](normalText.svg)

```html
<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
  <style>
    .svg {
      background: #ddd;
    }

    text {
      font-size: 1.5rem;
      font-weight: bold;
      fill: tomato;
    }

    path {
      fill: transparent;
    }
  </style>
  <!-- 글을 써주기 위한 text -->
  <text x="20" y="50">Sangheon ZZang Zzang</text>
</svg>
```

- 다음으로는 곡선을 그리고 그걸 위해서 텍스트를 곡선모양 처럼 만들어보겠습니다.
- 1. 먼저 곡선을 그려줍니다.
     ![](curbeText.svg)

```html
<svg class="shapes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="300" height="200">
  <style>
    .shapes {
      width: 300px;
      height: 200px;
      background-color: #ddd;
    }

    path {
      stroke: tomato;
      stroke-width: 5;
      fill: transparent;
    }
  </style>
  <path d="M 50 150 C 50 150, 200 50, 300 250 C 300 250 400 500 500 250"></path>
</svg>
```

- 2. 곡선이 잘 그려진 것을 확인했다면, defs는 나중에 참조하는 영역으로 그안에 곡선을 넣어 주고, text 좌표 값은 빼주어도 됩니다. 그리고 textPath에 defs에 곡선에 지정한 id값을 넣어줍니다.그러면 완성

```html
<svg class="shapes" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
  <style>
    .shapes {
      background-color: #ddd;
    }

    text {
      font-size: 1.5rem;
      font-weight: bold;
      fill: tomato;
    }

    path {
      stroke: tomato;
      stroke-width: 5;
      fill: transparent;
    }
  </style>
  <defs>
    <path id="text-curve" d="M 25 75 C 25 75, 100 25, 150 125 C 150 125 200 250 250 125"></path>
  </defs>
  <text x="0" y="0">
    <textPath href="#text-curve">Sangheon ZZang ZzangSangheon ZZang Zzang Sangheon ZZang</textPath>
  </text>
</svg>
```
