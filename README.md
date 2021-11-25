# expo 와 node.js 초기환경설정 완료 파일입니다.
---

아래 명령어를 입력해서 사용하면 끝입니다.

```bash
git clone https://github.com/rnjsrnrdnjs/react-native-node.js-app-init
```

# 파일구조

![스크린샷(443)](https://user-images.githubusercontent.com/49832278/143409383-ec656404-50d0-402e-828c-99fb3958fd60.png)

---
파일구조는 크게 node , RN 두가지로 나뉩니다.

1. node
express 환경에서 node.js 관련 초기 환경설정을 모두 끝낸파일입니다.

중요한 파일들만 보도록 하겠습니다.

- node/api/route 폴더
get, post ,delete, put 등의 restAPI 라우팅을 위한 폴더입니다. 
![스크린샷(444)](https://user-images.githubusercontent.com/49832278/143409419-7a496597-d496-4f1d-88f6-779733117998.png)\
- node/config/config.js
mysql 연동을위한 환경설정으로 로컬호스트에서 사용시 127.0.0.1 로 사용가능합니다.
![스크린샷(445)](https://user-images.githubusercontent.com/49832278/143409423-5913b863-1e6a-4118-af87-25f278d3f80e.png)

- node/models/index.js
sequelize orm을 통해 디비 모델구축 입니다. 
![스크린샷(446)](https://user-images.githubusercontent.com/49832278/143409426-85ac8513-ae20-4caa-a9a8-bbaedd239cc5.png)

- node/loaders/express.js
익스프레스 환경설정은 이곳에서 하시면 됩니다.
![스크린샷(447)](https://user-images.githubusercontent.com/49832278/143409428-2488999f-edde-4217-b442-29570596079e.png)

app.js 는 처음 시작하는 파일로 https,http 등의 서버를 여는데 사용됩니다.

각자 편한환경에 맞게 사용하시면 됩니다.


2. RN
expo 환경으로 rn 개발시 초기 필요한 모든 설정을 끝내둔 파일입니다.

- app.js 파일
![스크린샷(448)](https://user-images.githubusercontent.com/49832278/143409439-4188a524-f844-4b70-bbb8-a868f797cba5.png)
추가적인 파일들은 components에 뷰를 만드시면 됩니다.
기본적으로 처음에 필요할만할
   - 네비게이션
   - 노치프로바이더
   - react-native-dotenv
   - 화면방향 고정
   - vw,vh모듈
   등등을 설치해뒀습니다. 추후에 필요하신 파일을 추가로 다운받으시면 됩니다.

