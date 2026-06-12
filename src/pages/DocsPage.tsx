import { Link } from "react-router-dom"
import { DocLayout } from "../components/DocLayout"
import { GITHUB_ISSUES_URL } from "../lib/site"

export function DocsPage() {
  return (
    <DocLayout title="Infill Docs">
      <p>
        Infill is a Chrome extension that scans web forms and fills them with
        realistic test data for development and QA.
      </p>

      <h2>Quick start</h2>
      <ol>
        <li>Open any page with a form.</li>
        <li>Click the Infill icon in the Chrome toolbar.</li>
        <li>
          Tap <strong>Scan Page</strong> to detect fields.
        </li>
        <li>
          Use <strong>Auto Fill All</strong> or fill fields one by one.
        </li>
      </ol>

      <h2>Actions</h2>
      <ul>
        <li>
          <strong>Auto Fill All</strong> — fills every mapped field on the
          page.
        </li>
        <li>
          <strong>Clear Form</strong> — resets fields on the page.
        </li>
        <li>
          <strong>AI Analyze</strong> — generates context-aware values using
          your OpenAI key.
        </li>
        <li>
          <strong>Shuffle All</strong> — creates new random or AI-shuffled
          values.
        </li>
        <li>
          <strong>Side panel</strong> — open Infill in Chrome&apos;s side panel
          for more space.
        </li>
      </ul>

      <h2>Per-field controls</h2>
      <ul>
        <li>Edit the generated value before filling.</li>
        <li>
          <strong>Fill</strong> — apply that field only.
        </li>
        <li>
          <strong>Shuffle</strong> — generate a new value for that field.
        </li>
        <li>
          <strong>Remove</strong> — hide the field from the current scan list.
        </li>
      </ul>

      <h2>AI features</h2>
      <p>
        AI Analyze and Shuffle need an OpenAI API key. Open{" "}
        <strong>OpenAI API Key</strong> in the popup, paste your key, and click{" "}
        <strong>Save key</strong>. The key stays in your browser and is only
        used when you run AI actions.
      </p>

      <h2>Image uploads</h2>
      <p>
        Infill can fill hidden <code>input[type=&quot;file&quot;]</code> fields
        with contextual sample images. Image URLs are chosen based on the page
        topic and nearby form data such as name or company.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>
          If scan fails, click <strong>Scan Page</strong> again — no tab refresh
          needed.
        </li>
        <li>
          Custom upload widgets without a native file input may not be detected.
        </li>
        <li>Use the side panel on complex forms with many fields.</li>
      </ul>

      <h2>Need help?</h2>
      <p>
        Visit the <Link to="/support">Support page</Link> or{" "}
        <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
          open an issue on GitHub
        </a>
        .
      </p>
    </DocLayout>
  )
}
