import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: var(--ghostWhite);
  font-family: 'regular', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  .layout-container {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    width: 100%;
    overflow: hidden;

    main {
      flex: 1 1 0%;
      overflow: auto;

      .main-container {
        width: 100%;
        padding: 1.25rem 0;
        margin: 0 auto;
      }
    }
  }
`
