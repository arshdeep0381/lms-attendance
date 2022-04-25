import { Layout, LayoutProps } from 'react-admin';
import { CustomAppBar } from './AppBar';

export const AdminLayout = (props: LayoutProps) => {
    return <Layout {...props} appBar={CustomAppBar} />;
};
