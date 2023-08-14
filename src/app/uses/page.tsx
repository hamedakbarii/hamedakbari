import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { Reactions } from '@/components/views/mdx/ui/reactions';
import { Coding } from '@/components/views/uses/coding';
import { ExtensionsGrid } from '@/components/views/uses/extensions';
import { Everyday, GamingPc } from '@/components/views/uses/hardware';
import { Software } from '@/components/views/uses/software';
import { Tabs } from '@/components/views/uses/tabs';
import { Website } from '@/components/views/uses/website';
import { ReactionsProvider } from '@/providers/reactions-provider';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

export default function UsesPage() {
  return (
    <Section id={'uses'} className={'flex-1 gap-24'}>
      <Heading shadow={'purple'} from={'purple'} to={'brand'}>
        What do I use?
      </Heading>
      <ReactionsProvider slug={'blog--uses'}>
        <Reactions />
      </ReactionsProvider>
      <Tabs
        tabsNames={[
          'Everyday',
          'Gaming PC',
          'Software',
          'Browser',
          'Coding',
          'Website',
        ]}
      >
        <Everyday />
        <GamingPc />
        <Software />
        <ExtensionsGrid />
        <Coding />
        <Website />
      </Tabs>
    </Section>
  );
}

export const metadata = getStaticMetadata({
  title: 'Uses – Hirad Arshadi',
  description:
    'Get to know the hardware, software and tools I use on a daily basis',
  exactUrl: 'https://hiradary.me/uses',
  keywords: [
    'hardware',
    'software',
    'apps',
    'tools',
    'extensions',
    'stack',
    'website',
    'tech',
    'uses',
  ],
  image: buildOgImageUrl('uses'),
});
