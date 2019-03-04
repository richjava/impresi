export const styles = 
`
body {
  margin: 0;
  text-align: center;
}

*, *:before, *:after {
  box-sizing: border-box;
}

h1,
p {
  font-family: "Montserrat", sans-serif;
}

.item {
  visibility: hidden;
}

.animated {
  visibility: visible;
}

.hide {
  display: none;
}

.background {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.background img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
}

.heading,
.blurb,
.background {
  position: absolute;
  background-color: #333;
}

.heading,
.blurb {
  padding: 15px;
}

.heading h1 {
  font-size: 2.4em;
}

.blurb p {
  font-size: 1.4em;
}

.heading h1,
.blurb p {
  margin: 0;
  color: #fff;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #333;
  width: 100vw;
  height: 100vh;
}

.lds-ripple {
  display: inline-block;
  position: fixed;
  top: 40vh;
  left: calc(50vw - 32px);
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}


@media only screen and (max-width: 600px) {
  .heading,
  .blurb {
    position: static;
    display: block;
  }

  .heading h1 {
    font-size: 5vw;
  }

  .blurb p {
    font-size: 4vw;
  }
}
`;