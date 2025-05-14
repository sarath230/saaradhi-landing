// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saaradhi – Your AI Charioteer to Higher Revenue</title>
        {/* Tailwind via CDN for now */}
        <script src="https://cdn.tailwindcss.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* --- Hero --- */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-slate-100">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Saaradhi<span className="text-indigo-400">.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg sm:text-xl text-slate-300">
          Your AI-powered sales agent that guides every lead to the finish line.
        </p>
        <a
          href="https://forms.gle/9t2xpuMpNye6Pgp98"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-2xl bg-indigo-500 py-3 px-6 text-lg font-semibold shadow-lg hover:bg-indigo-600 transition"
        >
          Join the wait-list →
        </a>
      </section>

      {/* --- Features --- */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-slate-50 text-slate-900">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          What sets Saaradhi apart
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Genuinely intelligent", "Custom-tuned AI delivers precise, on-brand responses."],
            ["Learns from everything", "Ingests web pages, docs, Notion, videos & images for deep context."],
            ["Sales machine", "Qualifies, persuades, books calls, and captures leads automatically."],
            ["Image-smart", "Understands pictures users drop into chat—no extra plugins."],
            ["Seamless human takeover", "Flip a switch to hand the conversation to a real agent instantly."],
            ["Advanced analytics", "Dashboards reveal funnel drop-offs and revenue impact."],
            ["Custom lead forms", "Collect prospect info right inside the chat interface."],
            ["Continuous improvement", "Gets smarter with every interaction—zero manual retraining."],
            ["Fully customisable", "Fine-tune knowledge, tone, flows, and colours to match your brand."]
          ].map(([title, desc]) => (
            <div key={title} className="p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
