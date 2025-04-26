import React from 'react';
import InsightsViewer from '../components/InsightsViewer';

function InsightsPage() {
  // Hardcode a sample classId for now or get it from URL params
  const classId = 'sample-class-id';

  return (
    <div>
      <h1>Course Insights</h1>
      <InsightsViewer classId={classId} />
    </div>
  );
}

export default InsightsPage;
