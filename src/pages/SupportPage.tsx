import { Link } from "react-router-dom"
import { DocLayout } from "../components/DocLayout"
import {
  GEMINI_KEY_GUIDE_URL,
  GITHUB_ISSUES_URL,
  GITHUB_NEW_ISSUE_URL,
  GITHUB_REPO_URL,
  OPENAI_KEY_GUIDE_URL,
} from "../lib/site"

export function SupportPage() {
  return (
    <DocLayout title="Infill Support">
      <p>
        Need help with scanning, filling, AI features, or image uploads? Start
        with the FAQ below. If your issue is not covered, report it on GitHub.
      </p>

      <p>
        <a
          href={GITHUB_NEW_ISSUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2.5 border border-white/20 rounded-lg text-primary font-body-lg text-body-lg no-underline hover:bg-surface-container-low transition-colors"
        >
          Report an issue on GitHub
        </a>
      </p>

      <h2>FAQ</h2>

      <h3>Scan Page shows no fields</h3>
      <ul>
        <li>
          Make sure the page has visible inputs, selects, textareas, or file
          inputs.
        </li>
        <li>
          Click <strong>Scan Page</strong> again after the form loads.
        </li>
        <li>
          Some custom upload UIs without a native file input cannot be detected
          yet.
        </li>
      </ul>

      <h3>Could not connect to this page</h3>
      <ul>
        <li>
          Infill works on normal <code>http</code> and <code>https</code> pages.
        </li>
        <li>
          Chrome internal pages such as <code>chrome://</code> cannot be
          scanned.
        </li>
        <li>
          Click <strong>Scan Page</strong> again instead of refreshing the tab.
        </li>
      </ul>

      <h3>AI Analyze or Shuffle fails</h3>
      <ul>
        <li>
          Open <strong>AI settings</strong> and choose{" "}
          <strong>OpenAI</strong> or <strong>Gemini</strong>.
        </li>
        <li>
          For OpenAI, follow{" "}
          <Link to="/docs/openai-api-key">How to get your OpenAI API key</Link>{" "}
          and paste the key, then click <strong>Save settings</strong>.
        </li>
        <li>
          For Gemini, create a key at{" "}
          <a
            href={GEMINI_KEY_GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google AI Studio
          </a>
          , paste it in the Gemini tab, and save.
        </li>
        <li>
          Make sure the badge shows <strong>Ready</strong> for the active
          provider.
        </li>
        <li>
          Confirm billing or quota is active on your OpenAI or Google AI
          account.
        </li>
        <li>Scan the page first so fields are available.</li>
      </ul>

      <h3>Image upload did not fill</h3>
      <ul>
        <li>
          The page must use a native{" "}
          <code>&lt;input type=&quot;file&quot;&gt;</code>.
        </li>
        <li>Some sites block programmatic file assignment.</li>
        <li>
          Try editing the image URL in the field card, then click{" "}
          <strong>Fill</strong>.
        </li>
      </ul>

      <h3>Extension looks outdated after an update</h3>
      <ul>
        <li>
          Open <code>chrome://extensions</code>.
        </li>
        <li>
          Click <strong>Reload</strong> on Infill.
        </li>
      </ul>

      <h2>Before reporting a bug</h2>
      <ul>
        <li>Infill version shown in the popup footer</li>
        <li>Page URL (remove private tokens if needed)</li>
        <li>What you clicked and what happened</li>
        <li>Screenshot if possible</li>
      </ul>

      <h2>Other links</h2>
      <ul>
        <li>
          <Link to="/docs">Documentation</Link>
        </li>
        <li>
          <a href={OPENAI_KEY_GUIDE_URL}>How to get your OpenAI API key</a>
        </li>
        <li>
          <a
            href={GEMINI_KEY_GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gemini API keys (Google AI Studio)
          </a>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy policy</Link>
        </li>
        <li>
          <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
            GitHub repository
          </a>
        </li>
        <li>
          <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
            All issues
          </a>
        </li>
      </ul>
    </DocLayout>
  )
}
