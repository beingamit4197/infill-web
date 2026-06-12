import { Link } from "react-router-dom"
import { DocLayout } from "../components/DocLayout"
import { GITHUB_ISSUES_URL } from "../lib/site"

export function PrivacyPolicyPage() {
  return (
    <DocLayout title="Infill Privacy Policy">
      <p>
        <strong className="text-primary">Last updated:</strong> June 10, 2026
      </p>

      <p>
        Infill is a Chrome extension that helps developers and QA teams fill web
        forms with sample data. This policy explains what information the
        extension accesses and how it is used.
      </p>

      <h2>Information we access</h2>
      <ul>
        <li>
          <strong>Form fields on the active page</strong> when you click Scan
          Page, Fill, or related actions. This includes field labels, types,
          names, placeholders, and current values needed to generate or apply
          test data.
        </li>
        <li>
          <strong>Basic page context</strong> such as page title, URL,
          headings, and a short text excerpt to make AI-generated values more
          relevant.
        </li>
        <li>
          <strong>Your OpenAI API key</strong>, if you choose to save one in
          extension settings.
        </li>
      </ul>

      <h2>How information is used</h2>
      <ul>
        <li>To scan forms and fill fields on pages you choose.</li>
        <li>
          To send form and page context to OpenAI when you explicitly use AI
          Analyze, Shuffle, or similar AI features.
        </li>
        <li>
          To download placeholder images from third-party image services when
          filling image upload fields.
        </li>
      </ul>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell your data.</li>
        <li>We do not run scans or fills unless you trigger them.</li>
        <li>
          We do not collect analytics or track browsing history in the
          background.
        </li>
      </ul>

      <h2>Data storage</h2>
      <p>
        Your OpenAI API key is stored locally in Chrome extension storage on
        your device if you save it in settings. It is not uploaded to an Infill
        server.
      </p>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>OpenAI</strong> — used only when you run AI features with
          your API key.
        </li>
        <li>
          <strong>Image placeholder services</strong> such as Lorem Flickr, UI
          Avatars, or Picsum — used to fetch sample images for file upload
          fields.
        </li>
      </ul>

      <h2>Permissions</h2>
      <p>Infill requests Chrome permissions to:</p>
      <ul>
        <li>Access the active tab when you use the extension.</li>
        <li>Inject scripts to scan and fill forms.</li>
        <li>Store your API key locally.</li>
        <li>Open the optional side panel UI.</li>
      </ul>

      <h2>Data deletion</h2>
      <p>
        You can remove your saved OpenAI API key from the extension settings or
        uninstall the extension to remove locally stored data.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, open an issue at{" "}
        <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
          github.com/beingamit4197/infill/issues
        </a>{" "}
        or visit our <Link to="/support">support page</Link>.
      </p>
    </DocLayout>
  )
}
