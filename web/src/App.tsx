import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Router } from './Router'
import { ThemeProvider } from './app/contexts/ThemeProvider'
import { AuthProvider } from './app/contexts/AuthContext'
import { Toaster } from './components/ui/sonner'
import 'swiper/css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
