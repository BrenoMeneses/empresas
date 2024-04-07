import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Router } from "./app/routes"
import { AppThemeProvider } from "./app/shared/contexts"

export function App() {
  return (
    <AppThemeProvider>
      <Router/>
    </AppThemeProvider>
  )
}
