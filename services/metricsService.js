function calculateCycleTime(issues) {
  let total = 0;

  issues.forEach(issue => {
    const start = new Date(issue.started_at);
    const end = new Date(issue.completed_at);
    total += (end - start);
  });

  // return in days
  return (total / issues.length) / (1000 * 60 * 60 * 24);
}

function calculateLeadTime(prs, deployments) {
  let total = 0;

  prs.forEach(pr => {
    const prTime = new Date(pr.created_at);
    // As per instruction, using deployments[0] for simplicity
    const deployTime = new Date(deployments[0].deployment_time);

    total += (deployTime - prTime);
  });

  // return in days
  return (total / prs.length) / (1000 * 60 * 60 * 24);
}

function calculateBugRate(bugs, issues) {
  return bugs.length / issues.length;
}

function deploymentFrequency(deployments) {
  return deployments.length;
}

function prThroughput(prs) {
  return prs.length;
}

module.exports = {
  calculateCycleTime,
  calculateLeadTime,
  calculateBugRate,
  deploymentFrequency,
  prThroughput
};
