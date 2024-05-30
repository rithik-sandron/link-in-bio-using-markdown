import AppLayout from '@/components/AppLayout'
import '../css/app.css'

const App = ({ Component, pageProps }) => <AppLayout><Component {...pageProps} /></AppLayout>

export default App
