export function CTA() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-zinc-200 p-8 sm:p-10 md:p-16 text-center">
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">
            Ready to Make an Impact?
          </h2>

          <p className="mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-muted-foreground">
            Whether you&apos;re an experienced engineer or just starting your
            career, we have opportunities for you. Let&apos;s build the future
            of technology together.
          </p>

          <a
            href="https://careers.qmaxsys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-zinc-900 text-white px-8 py-3 text-sm font-semibold hover:bg-zinc-800 transition-colors"
          >
            Apply Now
          </a>

          <p className="mt-6 text-xs sm:text-sm text-muted-foreground">
            Questions? Reach out to our recruitment team at{' '}
            <a
              href="mailto:careers@qmaxsys.com"
              className="underline underline-offset-2 hover:text-zinc-700 transition-colors"
            >
              careers@qmaxsys.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
