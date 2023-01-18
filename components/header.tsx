import { Box, Tabs } from '@bigcommerce/big-design';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InnerHeader from './innerHeader';

export const TabIds = {
    HOME: 'home',
    PRODUCTS: 'products',
    CUSTOM_DSC_PAGE: 'custom_dsc_page',
    DSC_PRODUCTS: 'dsc_products',
    DSC_EVENT_LISTNERS: 'dsc_event_listeners',
    DSC_WIDGETS: 'dsc_widgets'
};

export const TabRoutes = {
    [TabIds.HOME]: '/',
    [TabIds.PRODUCTS]: '/products',
    [TabIds.CUSTOM_DSC_PAGE]: '/custom_dsc_page',
    [TabIds.DSC_PRODUCTS]: '/dsc_products',
    [TabIds.DSC_EVENT_LISTNERS]: '/dsc_event_listeners',
    [TabIds.DSC_WIDGETS]: '/dsc_widgets'
};

const HeaderlessRoutes = [
    '/orders/[orderId]',
    '/orders/[orderId]/labels',
    '/orders/[orderId]/modal',
];

const InnerRoutes = [
    '/products/[pid]',
];

const HeaderTypes = {
    GLOBAL: 'global',
    INNER: 'inner',
    HEADERLESS: 'headerless',
};

const Header = () => {
    const [activeTab, setActiveTab] = useState<string>('');
    const [headerType, setHeaderType] = useState<string>(HeaderTypes.GLOBAL);
    const router = useRouter();
    const { pathname } = router;

    useEffect(() => {
        if (InnerRoutes.includes(pathname)) {
            // Use InnerHeader if route matches inner routes
            setHeaderType(HeaderTypes.INNER);
        } else if (HeaderlessRoutes.includes(pathname)) {
            setHeaderType(HeaderTypes.HEADERLESS);
        } else {
            // Check if new route matches TabRoutes
            const tabKey = Object.keys(TabRoutes).find(key => TabRoutes[key] === pathname);

            // Set the active tab to tabKey or set no active tab if route doesn't match (404)
            setActiveTab(tabKey ?? '');
            setHeaderType(HeaderTypes.GLOBAL);
        }

    }, [pathname]);

    useEffect(() => {
        // Prefetch products page to reduce latency (doesn't prefetch in dev)
        router.prefetch('/products');
    });

    const items = [
        { ariaControls: 'home', id: TabIds.HOME, title: 'Home' },
        // { ariaControls: 'products', id: TabIds.PRODUCTS, title: 'Products' },
        // { ariaControls: 'custom_dsc_page', id: TabIds.CUSTOM_DSC_PAGE, title: 'Custom DSC Page' },
        { ariaControls: 'dsc_products', id: TabIds.DSC_PRODUCTS, title: 'Products' },
        { ariaControls: 'dsc_event_listeners', id: TabIds.DSC_EVENT_LISTNERS, title: 'Event Listeners' },
        { ariaControls: 'dsc_widgets', id: TabIds.DSC_WIDGETS, title: 'Widgets'}
    ];

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);

        return router.push(TabRoutes[tabId]);
    };

    if (headerType === HeaderTypes.HEADERLESS) return null;
    if (headerType === HeaderTypes.INNER) return <InnerHeader />;

    return (
        <Box marginBottom="xxLarge">
            <Tabs
                activeTab={activeTab}
                items={items}
                onTabClick={handleTabClick}
            />
        </Box>
    );
};

export default Header;
