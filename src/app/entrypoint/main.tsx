import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import '../providers/i18n/i18n.ts'
import '../styles/index.css'
import App from '../App.tsx'
import { system } from '../providers/chakra-provider/chakra-provider.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
