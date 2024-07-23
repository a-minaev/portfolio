import { Metadata } from 'next';
import Header from './_ui/nav-header';

export const metadata: Metadata = {
    title: 'Next.js',
}

export default function Page() {
    return(
        <div>
          <div>
            <Header />
          </div>
        </div>
    )
}