//  seis copyright 2017-2019
//  Headernav.js
//  via apple-picker, mlBench, and danmckeown.info #5
export default () => (
  <header id="topheader">
    <nav id="topnav">
      <ul id="navlist">
        <li id="homelink">
          <a href="../../../..">Home</a>
        </li>
        <li>
          <a href="../../About">About</a>
        </li>
        <li>
          <a href="https://github.com/pacificpelican/seis">
            Code
          </a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      header#topheader {
        font-family: "Inconsolata", "Anonymous Pro", "Hack", Menlo, monospace;
      }
      a,
      a:visited {
        color: black;
      }
      ul#navlist {
        display: flex;
      }
      ul#navlist li {
        margin-right: calc(10px + 3vw);
      }
    `}</style>
  </header>
);
