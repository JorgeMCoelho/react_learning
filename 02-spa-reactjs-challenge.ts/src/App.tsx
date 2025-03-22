import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      <h1>Hello World</h1>
     
      <p>Hello world</p>

      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
