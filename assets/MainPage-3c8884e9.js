import{n as o,j as t,C as x}from"./index-f609859e.js";const m=o.button`
  background-color: ${e=>e.background?e.background:e.theme.colors.accentColor};
  border: ${e=>e.theme.borders.bold};

  border-color: ${e=>e.bordercolor?e.bordercolor:e.theme.colors.accentColor};
  border-radius: 16px;
  cursor: pointer;
  padding: 7px 29px 7px 30px;

  font-family: ComfortaaBold;
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.bold};
  line-height: 1.36;
  text-align: center;
  box-shadow: 0px 0px 40px 0px rgba(86, 86, 86, 0.3);
  color: ${e=>e.color?e.color:e.theme.colors.whiteText};

  &:hover,
  &:focus {
    background-color: ${e=>e.hoverbackground?e.hoverbackground:e.theme.colors.whiteText};
    color: ${e=>e.hovercolor?e.hovercolor:e.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    border-radius: 17px;
    padding: 8px 31px 6px 31px;

    font-size: ${e=>e.theme.fontSizes.m};
  }

  @media screen and (min-width: 1920px) {
    border-radius: 30px;
    padding: 14px 69px 11px 68px;

    font-size: ${e=>e.theme.fontSizes.xl};
  }
`,l=({onClick:e,background:n,bordercolor:i,color:d,hoverbackground:s,hovercolor:c,children:p})=>t.jsx(m,{onClick:e,background:n,bordercolor:i,color:d,hoverbackground:s,hovercolor:c,children:p}),h=o.h1`
  font-family: ComfortaaBold;
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.bold};
  line-height: 1.125;

  text-align: left;
  color: ${e=>e.theme.colors.text};

  @media screen and (min-width: 768px) {
    padding-top: 109px;
    margin-bottom: 0;
    width: 200px;
    font-size: ${e=>e.theme.fontSizes.l};
  }

  @media screen and (min-width: 1920px) {
    padding-top: 296px;
    font-size: 40px;
    width: 450px;
  }
`,g=o.span`
  font-family: ComfortaaBold;
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.bold};
  line-height: 1.125;

  text-align: left;
  color: ${e=>e.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.theme.fontSizes.l};
  }

  @media screen and (min-width: 1920px) {
    font-size: 40px;
  }
`,f=({text:e,accentText:n,secondText:i})=>t.jsx(t.Fragment,{children:t.jsxs(h,{children:[e,t.jsx(g,{children:n}),i]})}),b="/gastro-chef-pet-project/assets/pagination-dc904411.svg",u=o.div`
  width: 156px;
  height: 14px;

  background-image: url(${b});

  @media screen and (min-width: 1920px) {
    align-self: center;
  }
`,w=()=>t.jsx(u,{}),$="/gastro-chef-pet-project/assets/bg-main-fa9c5429.png",v="/gastro-chef-pet-project/assets/bg-main-2x-aa452856.png",r="/gastro-chef-pet-project/assets/bg-main-3605527b.png",a="/gastro-chef-pet-project/assets/bg-main-2x-b0525eec.png",k="/gastro-chef-pet-project/assets/hero-avocado-c00d5a39.png",j="/gastro-chef-pet-project/assets/hero-avocado-2x-2e30bc03.png",z="/gastro-chef-pet-project/assets/hero-avocado-21d96c40.png",B="/gastro-chef-pet-project/assets/hero-avocado-2x-9032e47d.png",S="/gastro-chef-pet-project/assets/hero-avocado-050b1f80.png",y="/gastro-chef-pet-project/assets/hero-avocado-2x-40bc1874.png",P=o.section`
  @media screen and (min-width: 768px) {
    padding-bottom: 57px;
  }
  @media screen and (min-width: 1920px) {
    padding-bottom: 39px;
  }
`,C=o(x)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 321px) and (max-width: 1919px) {
    padding-left: 129px;
  }

  /* padding-right: 90px; */
`,T=o.div`
  background-image: url("${$}");
  background-size: cover;
  background-repeat: no-repeat;
  /* box-shadow: 0px 0px 40px 0px rgba(86, 86, 86, 0.4); */

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${v});
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -55px;
    right: 0;
    width: 413px;
    height: 715px;
    background-image: url("${r}");

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${a});
    }
  }

  @media screen and (min-width: 1920px) {
    position: absolute;
    top: -55px;
    right: 0;

    width: 986px;
    height: 1235px;
    background-image: url(${r});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${a});
    }
  }
`,I=o.div`
  z-index: 0;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${e=>e.theme.colors.whiteText};

  @media screen and (min-width: 768px) {
    top: 150px;
    right: 8px;

    width: 307px;
    height: 307px;
  }

  @media screen and (min-width: 1920px) {
    top: 250px;
    right: 8px;

    width: 700px;
    height: 700px;
  }
`,A=o.div`
  background-image: url("${k}");
  background-size: cover;
  border-radius: 50%;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${j});
  }

  @media screen and (min-width: 768px) {
    width: 275px;
    height: 275px;

    background-image: url("${z}");
    background-repeat: no-repeat;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${B});
    }
  }

  @media screen and (min-width: 1920px) {
    width: 625px;
    height: 625px;
    background-image: url("${S}");
    background-repeat: no-repeat;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${y});
    }
  }
`,G=o.p`
  width: 139px;
  font-family: MontserratMedium;
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 1.3;
  text-align: left;
  color: ${e=>e.theme.colors.text};
  margin-top: 5px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 195px;
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: ${e=>e.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1920px) {
    width: 450px;
    margin-top: 15px;
    margin-bottom: 42px;
    font-size: 20px;
  }
`,H=o.span`
  color: ${e=>e.theme.colors.accentColor};
`,M=o.p`
  font-family: MontserratRegular;
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 1.3;
  text-align: left;
  color: ${e=>e.theme.colors.text};
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: ${e=>e.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1920px) {
    margin-top: 0;
    font-size: 20px;
  }
`,W=o.p`
  font-family: MontserratBold;
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.bold};
  line-height: 1;
  text-align: left;
  color: ${e=>e.theme.colors.accentColor};
  margin-top: 3px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.theme.fontSizes.l};
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 35px;
  }
`,R=o.div`
  @media screen and (min-width: 1920px) {
    display: flex;
    gap: 30px;
    height: 60px;
    margin-bottom: 277px;
  }
`,D=()=>t.jsxs(P,{children:[t.jsx(T,{children:t.jsx(I,{children:t.jsx(A,{})})}),t.jsxs(C,{children:[t.jsx(f,{text:"Detox program – ",accentText:"delicious cleansing ",secondText:"of the body"}),t.jsxs(G,{children:["8 bottles of ",t.jsx(H,{children:"natural"})," smoothies and juices."]}),t.jsxs(R,{children:[t.jsx(l,{onClick:()=>{},children:"order",background:"",bordercolor:"",color:"",hoverbackground:"",hovercolor:""}),t.jsxs(M,{children:["Trial day total: ",t.jsx(W,{children:"427 hrn"})]})]}),t.jsx(w,{})]})]}),F=()=>t.jsx(D,{});export{F as default};
