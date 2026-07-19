import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DocsPage } from "./pages/DocsPage"
import { HomePage } from "./pages/HomePage"
import { OpenAiKeyGuidePage } from "./pages/OpenAiKeyGuidePage"
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage"
import { SupportPage } from "./pages/SupportPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/openai-api-key" element={<OpenAiKeyGuidePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
