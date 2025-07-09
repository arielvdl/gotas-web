import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import React from 'react'
import { Link } from './link'

const styles = {
  base: [
    'relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold',
    'px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6',
    'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',
    'data-[disabled]:opacity-50',
    '[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] sm:[&>[data-slot=icon]]:my-1 sm:[&>[data-slot=icon]]:size-4',
    'forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText]',
  ],
  solid: [
    'border-transparent bg-[--btn-border]',
    'dark:bg-[--btn-bg]',
    'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg]',
    'dark:before:hidden',
    'dark:border-white/5',
    'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]',
    'after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]',
    'dark:after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]',
    'data-[active]:after:bg-[--btn-hover-overlay] data-[hover]:after:bg-[--btn-hover-overlay]',
    'dark:before:hidden dark:bg-[--btn-bg] dark:after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]',
    'data-[disabled]:shadow-none data-[disabled]:after:shadow-none',
  ],
  colors: {
    'dark/zinc': [
      'text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
      'dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)]',
      '[--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)]',
    ],
    white: [
      'text-zinc-950 [--btn-bg:white] [--btn-border:theme(colors.zinc.950/10%)] [--btn-hover-overlay:theme(colors.zinc.950/2.5%)] data-[active]:[--btn-border:theme(colors.zinc.950/15%)] data-[hover]:[--btn-border:theme(colors.zinc.950/15%)]',
      'dark:text-white dark:[--btn-bg:theme(colors.zinc.800)] dark:[--btn-hover-overlay:theme(colors.white/5%)]',
      '[--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:[--btn-icon:theme(colors.zinc.500)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)]',
    ],
    zinc: [
      'text-white [--btn-bg:theme(colors.zinc.600)] [--btn-border:theme(colors.zinc.700/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
      'dark:text-white dark:[--btn-bg:theme(colors.zinc.700)] dark:[--btn-hover-overlay:theme(colors.white/5%)]',
      '[--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)]',
    ],
  },
}

type ButtonProps = (
  | { color?: keyof typeof styles.colors; outline?: never }
  | { color?: never; outline: true }
) & {
  className?: string
} & (
  | Omit<Headless.ButtonProps, 'className'>
  | (Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'> & { href: string })
)

export function Button({ color = 'dark/zinc', outline, className, ...props }: ButtonProps) {
  const classes = clsx(
    className,
    styles.base,
    outline
      ? [
          'border-zinc-950/10 text-zinc-950 data-[active]:bg-zinc-950/[2.5%] data-[hover]:bg-zinc-950/[2.5%]',
          'dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-[active]:bg-white/5 dark:data-[hover]:bg-white/5',
          '[--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:[--btn-icon:theme(colors.zinc.500)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)]',
        ]
      : [styles.solid, styles.colors[color]]
  )

  return 'href' in props ? (
    <Link {...props} className={classes} />
  ) : (
    <Headless.Button {...props} className={classes} />
  )
} 