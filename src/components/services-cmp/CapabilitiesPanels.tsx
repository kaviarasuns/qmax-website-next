interface PanelsCapability {
  id: string;
  headline: string;
  intro: string;
  learnMoreHref: string;
  bullets: { title: string; items: string[] }[];
}

interface CapabilitiesPanelsProps {
  capabilities: PanelsCapability[];
  activeIdx: number;
  getInTouchHref: string;
}

export function CapabilitiesPanels({
  capabilities,
  activeIdx,
  getInTouchHref,
}: CapabilitiesPanelsProps) {
  return (
    <>
      {capabilities.map((cap, i) => (
        <div
          key={cap.id}
          role="tabpanel"
          className={activeIdx === i ? "block [animation:panelIn_460ms_ease]" : "hidden"}
        >
          <div className="grid grid-cols-[1fr_1.4fr] items-start gap-24 max-[900px]:grid-cols-1 max-[900px]:gap-8">
            <div>
              <h3 className="mb-8 max-w-[480px] text-2xl font-light tracking-wide md:text-3xl">
                {cap.headline}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="inline-block rounded-md border-[1.5px] border-foreground bg-transparent px-7 py-[7px] text-foreground no-underline transition-colors duration-200 hover:bg-foreground hover:text-white hover:no-underline"
                  href={cap.learnMoreHref}
                >
                  Learn more
                </a>
                <a
                  className="inline-block rounded-md bg-red-500 px-7 py-[7px] text-white no-underline transition-colors duration-200 hover:bg-red-600 hover:text-white hover:no-underline"
                  href={getInTouchHref}
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div>
              <p className="mb-9">{cap.intro}</p>
              <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-7">
                {cap.bullets.map((b) => (
                  <div key={b.title}>
                    <h4 className="mb-[18px] text-lg font-light tracking-wide md:text-xl">
                      {b.title}
                    </h4>
                    <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                      {b.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-[22px] before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
