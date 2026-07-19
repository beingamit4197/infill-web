import { Link } from "react-router-dom"
import { DocLayout } from "../components/DocLayout"
import { GITHUB_ISSUES_URL } from "../lib/site"

export function OpenAiKeyGuidePage() {
  return (
    <DocLayout title="How to get your OpenAI API key">
      <p>
        Infill uses <strong>your own</strong> OpenAI API key for{" "}
        <strong>AI Analyze</strong> and <strong>AI Shuffle</strong> when OpenAI
        is the active provider. You create the key on OpenAI, paste it into
        Infill once, and it is saved locally in Chrome. You pay OpenAI directly
        for usage — Infill does not store your key on any server.
      </p>

      <p>
        Prefer Gemini instead? Open <strong>AI settings</strong> →{" "}
        <strong>Gemini</strong> and create a key at{" "}
        <a
          href="https://aistudio.google.com/apikey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google AI Studio
        </a>
        .
      </p>

      <p>
        <a
          href="https://platform.openai.com/api-keys"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2.5 border border-white/20 rounded-lg text-primary no-underline hover:bg-surface-container-low transition-colors"
        >
          Open OpenAI API keys page
        </a>
      </p>

      <h2>Step-by-step</h2>

      <h3>1. Create an OpenAI account</h3>
      <ol>
        <li>
          Go to{" "}
          <a
            href="https://platform.openai.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            platform.openai.com/signup
          </a>
          .
        </li>
        <li>Sign up with email, Google, or Microsoft.</li>
        <li>Complete verification if OpenAI asks for it.</li>
      </ol>

      <h3>2. Add billing (required for API use)</h3>
      <ol>
        <li>
          Open{" "}
          <a
            href="https://platform.openai.com/settings/organization/billing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Billing settings
          </a>
          .
        </li>
        <li>
          Add a payment method and set a usage limit if you want a spending
          cap.
        </li>
        <li>
          OpenAI charges per token when you run AI features — typical form fills
          cost a fraction of a cent.
        </li>
      </ol>

      <p>
        <strong>Tip:</strong> Set a monthly budget in OpenAI billing so you
        never get surprised. Infill only calls OpenAI when <em>you</em> click
        AI Analyze or AI Shuffle.
      </p>

      <h3>3. Create an API key</h3>
      <ol>
        <li>
          Go to{" "}
          <a
            href="https://platform.openai.com/api-keys"
            target="_blank"
            rel="noopener noreferrer"
          >
            API keys
          </a>
          .
        </li>
        <li>
          Click <strong>Create new secret key</strong>.
        </li>
        <li>
          Name it something like <code>Infill Chrome</code>.
        </li>
        <li>
          Copy the full key immediately — it starts with <code>sk-</code> and is
          shown only once.
        </li>
      </ol>

      <h3>4. Save settings in Infill</h3>
      <ol>
        <li>
          Click the <strong>Infill</strong> icon in your Chrome toolbar.
        </li>
        <li>
          Open <strong>AI settings</strong> and select the{" "}
          <strong>OpenAI</strong> tab.
        </li>
        <li>
          Select a <strong>model</strong> (GPT-4o mini is recommended).
        </li>
        <li>
          Paste your <code>sk-...</code> key into the <strong>API key</strong>{" "}
          field.
        </li>
        <li>
          Click <strong>Save settings</strong>.
        </li>
        <li>
          You should see a <strong>Ready · OpenAI</strong> badge when settings
          are saved.
        </li>
      </ol>

      <h3>5. Use AI features</h3>
      <ol>
        <li>Open any webpage with a form.</li>
        <li>
          Click <strong>Scan Page</strong> in Infill.
        </li>
        <li>
          Click <strong>AI Analyze</strong> for smart, context-aware fill — or{" "}
          <strong>Shuffle All</strong> for new AI values.
        </li>
      </ol>

      <h2>Where is my key stored?</h2>
      <ul>
        <li>
          Only in <strong>Chrome local storage</strong> on your computer.
        </li>
        <li>Not sent to Infill servers.</li>
        <li>
          Sent to <code>api.openai.com</code> only when you run an AI action
          with OpenAI selected.
        </li>
        <li>
          You can remove settings anytime with <strong>Clear OpenAI</strong> in
          the popup.
        </li>
      </ul>

      <h2>Troubleshooting</h2>

      <h3>“Incorrect API key provided”</h3>
      <ul>
        <li>
          The key was revoked or copied incorrectly — create a new key on OpenAI
          and paste again.
        </li>
        <li>Make sure there are no extra spaces before or after the key.</li>
      </ul>

      <h3>AI Analyze does nothing</h3>
      <ul>
        <li>
          Check that the badge shows <strong>Ready · OpenAI</strong>.
        </li>
        <li>Scan the page first so fields are detected.</li>
        <li>Confirm billing is active on your OpenAI account.</li>
      </ul>

      <h3>I lost my key</h3>
      <ul>
        <li>
          OpenAI does not show old keys again. Create a new secret key and save
          it in Infill.
        </li>
      </ul>

      <h2>More help</h2>
      <ul>
        <li>
          <Link to="/docs">Infill documentation</Link>
        </li>
        <li>
          <Link to="/support">Support &amp; FAQ</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy policy</Link>
        </li>
        <li>
          <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
            Report an issue
          </a>
        </li>
      </ul>
    </DocLayout>
  )
}
