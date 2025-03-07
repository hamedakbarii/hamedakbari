import Icon from '@mdi/react';
import { cx } from 'classix';

import { Heading } from '@/components/core/heading';
import { ButtonLink, Link } from '@/components/core/link';
import { mdiAccountCircleOutline } from '@/components/icons';
import { SocialLinks } from '@/components/molecules/social-links';

import {
  IntroSection,
  TextsContainer,
  TitlesContainer,
  IntroParagraph,
  PhotoContainer,
  Photo,
} from './intro.styles';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <IntroSection id={'intro'}>
      <TextsContainer>
        <TitlesContainer>
          <Heading
            shadow={'blue'}
            // look like h2
            className={'text-2xl'}
          >
            This is&nbsp;
            <Heading
              $as={'span'}
              shadow={'blue'}
              from={'brand'}
              to={'blue'}
              className={'[&>span]:w-[unset]'}
            >
              Hamed Akbari
            </Heading>
          </Heading>
          <WavingHello />
        </TitlesContainer>

        <IntroParagraph>
          Passionate and creative front-end developer based in{' '}
          <Link
            title={'Iran on Google Maps'}
            href={
              'https://www.google.com/maps/place/Tehran,+Tehran+Province,+Iran/@35.7074614,51.1828499,11z/data=!3m1!4b1!4m6!3m5!1s0x3f8e00491ff3dcd9:0xf0b3697c567024bc!8m2!3d35.7218583!4d51.3346954!16zL20vMGZ0bHg?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D'
            }
          >
            Tehran,Iran
          </Link>
        </IntroParagraph>

        <div className={'flex items-center gap-16 flex-wrap'}>
          <ButtonLink title={'About page'} href={'/about'}>
            <Icon path={mdiAccountCircleOutline} size={1} />
            More about me
          </ButtonLink>
          <div
            className={cx(
              'flex items-center transition-colors',
              'border border-divider rounded-6',
              'py-4 pl-12 pr-8 min-h-[2.625rem]',
              'hover:border-accent-dark',
            )}
          >
            <SocialLinks />
          </div>
        </div>
      </TextsContainer>

      <PhotoContainer>
        <Photo
          src={'/static/images/hamed/hamed-2.jpg'}
          alt={"Hamed's Photo"}
          size={168}
          priority
        />
      </PhotoContainer>
    </IntroSection>
  );
};
