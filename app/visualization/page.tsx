
import Header from '../_ui/nav-header';
import Dropdown from '../_ui/visualization/dropdown';

export default function Page() {
    return(
        <div>
            <div>
              <Header />
            </div>
            <div>
              <h1> This is the 'visualization' page.</h1>
            </div>
            <div>
              <Dropdown />
            </div>
        </div>
    )
}