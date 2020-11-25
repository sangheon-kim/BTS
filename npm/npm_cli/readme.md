# NPM CLI

- Node Javascript Platform package Management
- 노드가 모듈을 찾을 수 있도록 모듈을 배치하고 dependecies 충돌을 관리해준다.

## npm-access

**publish된 패키지의 Access Level 설정**

```js
npm access public [<package>]
npm access restricted [<package>]

npm access grant <read-only|read-write> <scope:team> [<package>]
npm access revoke <scope:team> [<package>]

npm access ls-packages [<user>|<scope>|<scope:team>]
npm access ls-collaborators [<package> [<user>]]
npm access edit [<package>]
```

- public / restricted
  - 공개된 패키지인지 제한된 패키지인지 설정
- grant / revoke
  - 사용자와 팀이 패키지에 대해 읽기전용 인지, 읽기 쓰기 가능한지팀별로 권한을 설정하고 박탈할 수 있다.
- ls-pacakges

  - 사용자나 팀이 접근할 수 있는 패키지를 접근 권한에 따라 나열한다.

  ```
  npm access ls-packages

  {
  "sangheon-test-module": "read-write",
  "react-media-all": "read-write",
  "react-uikit-sangheon": "read-write",
  "ui-test-sangheon": "read-write",
  "js-calendar-module": "read-write"
  }
  ```
