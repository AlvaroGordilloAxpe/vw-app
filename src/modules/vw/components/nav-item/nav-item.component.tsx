import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import cn from 'classnames'
import * as NavigationMenu from '@/common/components/ui/navigation-menu'

export const VWNavItemComponent = forwardRef<
    ElementRef<'a'>,
    ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenu.Link asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-fg focus:bg-accent focus:text-accent-fg',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-bold leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-fg">
                        {children}
                    </p>
                </a>
            </NavigationMenu.Link>
        </li>
    )
})

VWNavItemComponent.displayName = 'NavItemLink'
