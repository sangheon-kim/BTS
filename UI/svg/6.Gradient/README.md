# 그라데이션을 적용해보자.

<img src="gradient.svg" width="300" height="300" />

- 선형 그라데이션 (linearGradient)
- 원형 그라데이션 (radialGradient)
- stop을 이용해서 offset값에 비율을 지정해주고, stop-color마다 색상 지정해준다.

`코드를 한번 보자`

```html
<svg id="face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <defs>
    <!-- 수직 그라디언트 (linearGradient)-->
    <linearGradient id="hair-color">
      <!-- 스탑에 offset값 stop-color에 색상값 입력 -->
      <stop offset="0%" stop-color="yellow" />
      <stop offset="50%" stop-color="hotpink" />
      <stop offset="100%" stop-color="deepskyblue" />
    </linearGradient>
    <!-- 원형 그라디언트 (radialGradient) -->
    <radialGradient id="hair-radius">
      <!-- 스탑에 offset값 stop-color에 색상값 입력 -->
      <stop offset="0%" stop-color="yellow" />
      <stop offset="50%" stop-color="hotpink" />
      <stop offset="100%" stop-color="deepskyblue" />
    </radialGradient>
    <style>
      <![CDATA[
      #face {
        background-color: #eee;
      }

      .hair {
        /* fill: url('#hair-radius'); */
        fill: url('#hair-color');
      }

      .right-eye {
        animation: wink 0.5s alternate infinite;
        /* 트랜스폼 오리진은 서클좌표와 동일하게 맞춰주면 완성 */
        transform-origin: 19.31px 41.98px;
      }

      @keyframes wink {
        from {
          transform: scaleY(1);
        }

        to {
          transform: scaleY(0.2);
        }
      }
      ]]>
    </style>
  </defs>
  <title>face_s</title>
  <path
    d="M138.61,133a29.89,29.89,0,1,1,21.14-8.75A29.72,29.72,0,0,1,138.61,133Zm0-55.38a25.49,25.49,0,1,0,18,7.46A25.32,25.32,0,0,0,138.61,77.63Z"
    transform="translate(-107 -64)"
  />
  <g>
    <circle class="right-eye" cx="19.31" cy="41.98" r="4.69" />
    <circle cx="43.8" cy="41.98" r="4.69" />
  </g>
  <path
    d="M138.61,124.88h-.05a21.76,21.76,0,0,1-16.19-7.24l2.47-2.21a18.44,18.44,0,0,0,13.72,6.14h.05a18.44,18.44,0,0,0,13.72-6.14l2.46,2.21A21.73,21.73,0,0,1,138.61,124.88Z"
    transform="translate(-107 -64)"
  />
  <path
    class="hair"
    d="M154.28,72.27a17.56,17.56,0,0,0-3.94.44c-1.76-5-8.37-8.71-16.25-8.71-9.15,0-16.58,5-16.72,11.2C111.23,77.38,107,82,107,87.23c0,7.4,8.32,13.4,18.59,13.4,6.84,0,12.82-2.66,16-6.63a16.61,16.61,0,0,0,12.65,5.53C163,99.53,170,93.43,170,85.9S163,72.27,154.28,72.27Z"
    transform="translate(-107 -64)"
  />
</svg>
```

`fill에 url로 내가 defs에 미리 지정해둔 참조 id인 hair-radius를 넣어주면 원형 그라데이션이 적용된것을 볼 수 있다.`

![](gradientRound.svg)
