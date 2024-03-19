import PropTypes from 'prop-types'
import { Suspense } from "react";
import loader from '../assets/images/loader.gif'
import ErrorBoundary from './ErrorBoundary';


const LazySuspense = ({component:Component, ...rest}) => {
    return (
        <ErrorBoundary>
          <Suspense fallback={<img src={loader} alt='Loader'/>}>
            <Component {...rest}/>
        </Suspense>
        </ErrorBoundary>
        )
    
}

LazySuspense.propTypes = {
    component: PropTypes.element.isRequired
}

export default LazySuspense