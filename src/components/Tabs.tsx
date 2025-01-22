import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const SlidingTabBar = ({ handleClick, tabs, activeTab }: { handleClick: Function, tabs: Array<Record<string, string>>, activeTab: number }) => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(activeTab);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
    setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
    setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
  }, [activeTabIndex]);

  return (
    <div className="flew-row relative mx-auto flex h-16 rounded-3xl border border-black/40 bg-neutral-900 px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-150"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-2xl bg-teal-600" />
      </span>
      {tabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => { tabsRef.current[index] = el; }}
            className={`${
              isActive ? `` : `hover:text-neutral-300`
            } my-auto cursor-pointer select-none rounded-full px-4 text-center text-white`}
            onClick={() => { setActiveTabIndex(index); handleClick(tab.value) }}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default SlidingTabBar;
