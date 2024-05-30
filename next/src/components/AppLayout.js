import Navigation from '@/components/Navigation'
import { useFetch } from '@/hooks/useFetch';
const AppLayout = ({ header, children }) => {

    const { swr, errorMsg, loadingMsg } = useFetch();
    const { data, error } = swr({ url: '/' });

    if (error) return errorMsg;
    if (!data) return loadingMsg;

    return (
        <div>
            <Navigation title={data} />
            <header>{header}</header>
            <main>{children}</main>
        </div>
    )
}

export default AppLayout