export function CTA() {
  return (
    <section className="pt-0 pb-12 md:pb-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 items-start">
          <div className="hidden lg:block w-64 flex-shrink-0" aria-hidden="true" />
          <div className="flex-1 min-w-0">
            <div className="border border-zinc-200 rounded-xl p-8 sm:p-10 md:p-16 text-center">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground">
                Ready to Make an Impact?
              </h2>

              <p className="mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-foreground">
                Whether you&apos;re an experienced engineer or just starting your
                career, we have opportunities for you. Let&apos;s build the future
                of technology together.
              </p>

              <a
                href="https://careers.qmaxsys.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-red-500 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-red-600"
              >
                Apply Now
              </a>

              <p className="mt-6 text-xs sm:text-sm text-foreground text-center">
                Questions? Reach out to our recruitment team at{' '}
                <a
                  href="mailto:careers@qmaxsys.com"
                  className="underline underline-offset-2 hover:text-foreground/80 transition-colors"
                >
                  careers@qmaxsys.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
