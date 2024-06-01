import { memo } from "react";

const ResetButton = () => {
  return (
    <>
      <button type="reset" className="btn btn-outline-danger rounded-0">
        <i className="fa fa-history" aria-hidden="true"></i> Reset
      </button>
    </>
  );
};

export default memo(ResetButton);
// memo -> HOC higher order component
// ResetButton --> Pure Component
