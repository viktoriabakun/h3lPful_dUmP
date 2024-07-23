import clsx from 'clsx';
import { FC } from 'react';

type BadgeColor = 'white' | 'black' | 'blue' | 'red' | 'yellow' | 'green';

interface ColorVariant {
  bg: string;
  border: string;
  title: string;
  value: string;
}

const colorVariants: Record<BadgeColor, ColorVariant> = {
  white: {
    bg: 'bg-white/15',
    border: 'border-white/20',
    title: 'text-white/90',
    value: 'text-white/90',
  },
  black: {
    bg: 'bg-black/75',
    border: 'border-black/70',
    title: 'text-white/90',
    value: 'text-black/80',
  },
  blue: {
    bg: 'bg-blue-500/45',
    border: 'border-blue-500/35',
    title: 'text-white/90',
    value: 'text-blue-500/55',
  },
  red: {
    bg: 'bg-red-500/45',
    border: 'border-red-500/35',
    title: 'text-white/90',
    value: 'text-red-500/55',
  },
  yellow: {
    bg: 'bg-yellow-500/45',
    border: 'border-yellow-500/35',
    title: 'text-white/90',
    value: 'text-yellow-500/55',
  },
  green: {
    bg: 'bg-green-500/45',
    border: 'border-green-500/35',
    title: 'text-white/90',
    value: 'text-green-500/55',
  },
};

interface IBadge {
  title: string;
  value: string;
  color: BadgeColor;
}

export const Badge: FC<IBadge> = ({ title, value, color }) => {
  return (
    <div
      className={clsx(
        'flex w-full items-center justify-center gap-5 rounded-full border py-1.5 pl-1.5 pr-5 font-bold sm:w-fit',
        colorVariants[color].border,
      )}
    >
      <div
        className={clsx(
          'w-full whitespace-nowrap rounded-full px-5 py-1.5 text-xs sm:text-base',
          colorVariants[color].bg,
          colorVariants[color].title,
        )}
      >
        {title}
      </div>
      <div className={clsx('w-full truncate py-1.5 text-xs sm:overflow-visible sm:text-base', colorVariants[color].value)}>{value}</div>
    </div>
  );
};
