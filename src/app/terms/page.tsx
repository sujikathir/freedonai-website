import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="font-display font-bold text-3xl text-charcoal mb-6">Terms of Service</h1>
      <p className="text-gray-body mb-4">
        This is a placeholder. Add your terms of service here before launch.
      </p>
      <Link href="/" className="text-coral font-semibold hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
