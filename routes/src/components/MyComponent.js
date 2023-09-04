import React, { Profiler } from "react";

const MyComponent = () => {
  return <div></div>;
};

const onRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  console.log(
    `${id} (${phase}) - Actual duration: ${actualDuration} - Actual baseDuratio: ${baseDuration}
    Actual StartTime ${startTime} - Actual commitTime ${commitTime} - Actual interactions ${interactions}`
  );
};

const MyProfilerComponent = () => {
  return (
    <Profiler id="MyComponent" onRender={onRenderCallback}>
      <MyComponent />
    </Profiler>
  );
};

export default MyProfilerComponent;
