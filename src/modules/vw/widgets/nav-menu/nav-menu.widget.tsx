import styles from './nav-menu.module.css'
import * as NavigationMenu from '@/common/components/ui/navigation-menu'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

const paths: { title: string; href: string }[] = [
    {
        title: 'Tests List',
        href: '/vw/tests-list',
    },
    {
        title: 'Search Data',
        href: '/vw/searches',
    },
]

const Link = ({ href = '', ...props }) => {
    const pathname = usePathname()

    return (
        <NextLink href={href} passHref legacyBehavior>
            <NavigationMenu.Link
                className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-fg focus:bg-accent focus:text-accent-fg',
                    pathname === href && 'bg-accent text-accent-fg'
                )}
                {...props}
            />
        </NextLink>
    )
}

export function VWNavMenuWidget() {
    return (
        <div data-testid="vw-nav-menu-widget" className={styles.container}>
            <NavigationMenu.Root>
                <NavigationMenu.List>
                    {paths.map(({ href, title }) => (
                        <NavigationMenu.Item key={href}>
                            <Link href={href}>
                                <div className="text-md font-bold leading-none">
                                    {title}
                                </div>
                            </Link>
                        </NavigationMenu.Item>
                    ))}
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}
/*
<NavigationMenu.Root>
    <NavigationMenu.List className={styles.NavigationMenuList}>
        <NavigationMenu.Item className="sm:contents md:hidden lg:hidden xl:hidden">
            <NavigationMenu.Trigger>Main Menu</NavigationMenu.Trigger>
            <NavigationMenu.Content>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {items.map((item) => (
                        <NavItemLink
                            key={item.title}
                            title={item.title}
                            href={item.href}
                        />
                    ))}
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
        {items.map((item) => (
            <NavigationMenu.Item
                key={item.href}
                className="sm:hidden md:contents lg:contents xl:contents"
            >
                <NavigationMenu.Link
                    href={item.href}
                    className={styles.NavigationMenuLink}
                >
                    {item.title}
                </NavigationMenu.Link>
            </NavigationMenu.Item>
        ))}
    </NavigationMenu.List>
</NavigationMenu.Root>
*/
