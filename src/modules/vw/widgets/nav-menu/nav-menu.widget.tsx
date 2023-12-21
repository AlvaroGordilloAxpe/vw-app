import styles from './nav-menu.module.css'
import * as NavigationMenu from '@/common/components/ui/navigation-menu'
import { VWNavItemComponent as NavItemLink } from '@/vw/components/nav-item'

const items: { title: string; href: string; description: string }[] = [
    {
        title: 'Documents List',
        href: '/vw/tests-list',
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Analytics',
        href: '/vw/analytics',
        description:
            'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Search Data',
        href: '/vw/searches',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
]

export function VWNavMenuWidget() {
    return (
        <div data-testid="vw-nav-menu-widget" className={styles.container}>
            <NavigationMenu.Root>
                <NavigationMenu.List className={styles.NavigationMenuList}>
                    <NavigationMenu.Item className="sm:contents md:hidden lg:hidden xl:hidden">
                        <NavigationMenu.Trigger>
                            Main Menu
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content>
                            <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {items.map((item) => (
                                    <NavItemLink
                                        key={item.title}
                                        title={item.title}
                                        href={item.href}
                                    >
                                        {item.description}
                                    </NavItemLink>
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
        </div>
    )
}
//<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"></ul>
