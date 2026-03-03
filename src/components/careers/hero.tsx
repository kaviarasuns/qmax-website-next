export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-10 md:pt-32 md:pb-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(161,98,7,0.05),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(24,24,27,0.06),_transparent_35%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block rounded-md border border-zinc-300 bg-zinc-100 px-4 py-2">
              <span className="text-lg font-semibold text-zinc-700">We&apos;re Hiring</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
              Design, Develop, and Deploy{' '}
              <span className="text-zinc-700">Cutting-Edge Products</span>
            </h1>

            <p className="mb-8 text-lg text-zinc-700 text-justify">
              We are looking for engineering enthusiasts ready to dive into cutting-edge technology. From Hardware and AI to Industrial Design, you will gain hands-on experience in full-cycle product development. Enjoy a friendly culture that prioritizes your career growth, giving you the opportunity to work with experienced engineers and solve complex challenges every day.
            </p>

            {/* <div className="mt-10 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-6">
              <div>
                <div className="text-3xl font-bold text-zinc-900">11</div>
                <p className="text-sm text-zinc-600">Full-time Roles</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900">8</div>
                <p className="text-sm text-zinc-600">Internship Domains</p>
              </div>
            </div> */}
          </div>

          <div className="relative aspect-square overflow-hidden rounded-3xl border border-zinc-200 lg:aspect-[4/3]">
            <img
              src="/careers/image1.jpg"
              alt="Design and Engineering Team at Work"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
