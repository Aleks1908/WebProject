import { NavigationMobile } from './NavigationMobile/NavigationMobile';
import { NavigationDesktop } from './NavigationDesktop/NavigationDesktop';
import { Category } from '../CategoryMobile/Category';
import { useMediaQuery } from 'react-responsive';

export const NavBar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    if (!isMobile) {
        return(
            <NavigationDesktop/>        
            );
    } else {
        return (
            <div>
                <NavigationMobile/>
                <Category/>
            </div>
        )
    }
};
