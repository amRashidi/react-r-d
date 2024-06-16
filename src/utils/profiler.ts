const renderProfile: React.ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  console.table(
  {
  'id': id,
  'phase': phase,
  'actualDuration': actualDuration,
  'baseDuration': baseDuration,
  'startTime': startTime,
  'commitTime': commitTime,
  }
  )
}


export default renderProfile