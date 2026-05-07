import React, { useEffect, useState } from "react";

const CaseDetailsView = () => {
  // const [case, setCase]=useState([])
  const [isUploadModel, setIsUploadModel] = useState(false);

  const fetchCase = () => {};

  useEffect(() => {
    fetchCase();
  }, []);
  const handleCancle = () => {
    setIsUploadModel(false);
  };

  return (
    <div>
      Case Details
      <div>
        <div>document </div>
        <div>
          <button>Download</button>
          <button onClick={handleCancle}>Cancle</button>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailsView;
