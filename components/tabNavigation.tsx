import { TabInfo } from '@/app/palette/components/contents';

export const TabNavigation = ({
  tabInfo,
  activeTab,
  onClickTab,
}: {
  tabInfo: { id: TabInfo; label: string }[];
  activeTab: TabInfo;
  onClickTab: (tab: TabInfo) => void;
}) => {
  return (
    <section className='bg-white border-b border-gray-200'>
      <nav className='flex space-x-8'>
        {tabInfo.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onClickTab(tab.id)}
            className={`py-4 px-1 border-b-2 font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </section>
  );
};
