import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewMoreButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/burn');
    onClick(); // Call the onClick function passed as a prop
  };

  return (
    <button className="btn btn-primary m-3" onClick={handleViewMore}>
      View More
    </button>
  );
};

export default ViewMoreButton;
