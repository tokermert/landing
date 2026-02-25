import Link from "next/link";

export default function EditorPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-base px-6 py-16 text-zinc-100">
      <section className="w-full max-w-[640px] rounded-[28px] border border-zinc-800 bg-surface p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">bloblob</p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-5xl">Editor</h1>
        <p className="mt-4 text-zinc-400">
          This route is ready for your live generator.
          <br />
          Connect your blob engine here and ship.
        </p>
        <div className="mt-8">
          <Link href="/" className="button-accent">
            Back to landing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
