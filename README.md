# Typing 연습
타자 연습 프로젝트입니다.

<br/>

## 구현 예정 기능
1. 노래 검색 : N사 검색 결과 데이터로 수집
2. CPM, CPC 계산

<br/>

## 디자인 패턴
기본적으로 Compound Component + Custom Hook 패턴을 사용하고 있습니다.

1. Global Component의 경우 Compound Component 패턴     
1-1. Component UI의 자율성 확대     
2. UI로직은 contextAPI사용 대신 Custom Hook을 사용해 외부에서 주입 받는 방식    
2-2. Custom Hook의 내부 로직을 알아야 100%사용이 제어 가능하지만 그만큼 확장성과 UI 로직 재사용성이 높아진다고 생각됨     
4. Business 로직들은 Feature별로 컴포넌트로 분리     
4-1. Global Component인 Board를 사용하는 2개의 페이지에서 각각 다른 API호출이 필요한 경우 ABoard, BBoard라는 Feature 컴포넌트 생성 후 Business 로직 작성     
4-1-1. API 로직까지 Hook으로 분리하는 방법에 대해선 논의 필요 : 재사용성은 높아지지만 그만큼 코드 작업량이 늘어나기때문(심지어 Typescript..)    

<br/>

## Package Manager - Yarn Berry
해당 템플릿의 패키지 관리는 Yarn Berry를 사용하고 있습니다. (첫도입..!)

<br/>

## Vscode Typescript 에러
종종 VsCode에서 typescript관련 에러가 생길때 아래 명령어로 해결
`$ yarn dlx @yarnpkg/sdks vscode`
