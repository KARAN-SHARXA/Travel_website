import { useParams, Navigate } from 'react-router-dom';

const BookFixedPackage = () => {
  const { packageId } = useParams<{ packageId: string }>();
  
  if (!packageId) {
    return <Navigate to="/destinations" replace />;
  }

  // Legacy route support: forward to unified booking page
  return <Navigate to={`/book/${packageId}`} replace />;
};

export default BookFixedPackage;
