import { Navigate, useParams } from 'react-router-dom';

// Redirect component to handle old /destination/:id routes
const DestinationRedirect = () => {
    const { destinationId } = useParams<{ destinationId: string }>();

    // Redirect to new explore-himachal format
    return <Navigate to={`/explore-himachal/${destinationId}`} replace />;
};

export default DestinationRedirect;
